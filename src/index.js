// ---------- IMPORTAR BIBLIOTECAS ----------
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mysql = require("mysql2/promise");

// ---------- CONFIGURACIÓN MYSQL ----------

const getConnection = async () => {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_SCHEMA,
    port: process.env.MYSQL_PORT,
  });

  await connection.connect();

  return connection;
};

// ---------- CREAR VARIABLES ----------

const app = express();
const port = process.env.PORT;

// ---------- CONFIGURACIÓN EXPRESS ----------

app.use(cors());
app.use(express.json({ limit: "25Mb" }));

// ---------- ARRANCAR ----------

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// ---------- ENDPOINTS ----------

// Endpoint para obtener todas las recetas
app.get("/api/recetas", async (req, res) => {
  try {
    const conn = await getConnection();

    // Obtener todas las recetas
    const [recetas] = await conn.query("SELECT * FROM recetas");

    // Obtener todos los ingredientes
    const [ingredientes] = await conn.query("SELECT * FROM ingredientes");

    // Cerrar la conexión
    await conn.end();

    // Agrupar los ingredientes por receta
    const recetasConIngredientes = recetas.map((receta) => {
      const ingredientesDeReceta = ingredientes.filter(
        (ingrediente) => ingrediente.receta_id === receta.id
      );
      return { ...receta, ingredientes: ingredientesDeReceta };
    });

    // Devolver los datos de las recetas e ingredientes
    res.json({
      info: { count: recetasConIngredientes.length },
      results: recetasConIngredientes,
    });
  } catch (error) {
    console.error("Error al obtener las recetas:", error);
    res
      .status(500)
      .json({ success: false, message: "Error al procesar la solicitud" });
  }
});

// Endpoint para obtener una receta por su ID
app.get("/api/recetas/:id", async (req, res) => {
  const { id } = req.params;

  // Validaciones
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({
      success: false,
      message: "Ha ocurrido un error",
    });
  }

  try {
    const conn = await getConnection();

    // Obtener la receta por su ID
    const [receta] = await conn.query("SELECT * FROM recetas WHERE id = ?", [
      id,
    ]);

    if (receta.length === 0) {
      return res.sendStatus(404);
    }
    // Obtener los ingredientes de la receta
    const [ingredientes] = await conn.query(
      "SELECT nombre, cantidad FROM ingredientes WHERE receta_id = ?",
      [id]
    );

    // Cerrar la conexión
    await conn.end();

    // Devolver los datos de la receta e ingredientes
    res.json({ ...receta[0], ingredientes });
  } catch (error) {
    console.error("Error al obtener la receta:", error);
    res
      .status(500)
      .json({ success: false, message: "Error al procesar la solicitud" });
  }
});

// Endpoint para crear una receta con sus ingredientes
app.post("/api/recetas", async (req, res) => {
  const { nombre, instrucciones, imagen, ingredientes } = req.body;

  if (!nombre || !instrucciones || !imagen || !Array.isArray(ingredientes)) {
    return res.status(400).json({
      success: false,
      message: "Ha ocurrido un error",
    });
  }

  try {
    const conn = await getConnection();

    const [insertResult] = await conn.query(
      "INSERT INTO recetas (nombre, instrucciones, imagen) VALUES (?, ?, ?)",
      [nombre, instrucciones, imagen]
    );

    const recetaId = insertResult.insertId;

    for (const ingrediente of ingredientes) {
      await conn.query(
        "INSERT INTO ingredientes (receta_id, nombre, cantidad) VALUES (?, ?, ?)",
        [recetaId, ingrediente.nombre, ingrediente.cantidad]
      );
    }

    await conn.end();

    res.json({
      success: true,
      message: "Receta creada con éxito",
      id: recetaId,
    });
  } catch (error) {
    console.error("Error al crear la receta:", error);
    res.status(500).json({
      success: false,
      message: "Error al crear la receta",
    });
  }
});

// Endpoint para actualizar una receta y sus ingredientes
app.put("/api/recetas/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, instrucciones, imagen, ingredientes } = req.body;

  if (
    !id ||
    !nombre ||
    !instrucciones ||
    !imagen ||
    !Array.isArray(ingredientes)
  ) {
    return res.status(400).json({
      success: false,
      message: "Ha ocurrido un error",
    });
  }

  try {
    const conn = await getConnection();

    await conn.query(
      "UPDATE recetas SET nombre = ?, instrucciones = ?, imagen = ? WHERE id = ?",
      [nombre, instrucciones, imagen, id]
    );

    await conn.query("DELETE FROM ingredientes WHERE receta_id = ?", [id]);

    for (const ingrediente of ingredientes) {
      await conn.query(
        "INSERT INTO ingredientes (receta_id, nombre, cantidad) VALUES (?, ?, ?)",
        [id, ingrediente.nombre, ingrediente.cantidad]
      );
    }

    await conn.end();

    res.json({
      success: true,
      message: "Receta actualizada con éxito",
      id: id,
    });
  } catch (error) {
    console.error("Error al actualizar la receta y sus ingredientes:", error);
    res.status(500).json({
      success: false,
      message: "Error al procesar la solicitud.",
    });
  }
});

// Endpoint para obtener eliminar una receta y sus ingredientes en base a su id
app.delete("/api/recetas/:id", async (req, res) => {
  const { id } = req.params;

  // Verificar que el id está definido y es un número
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({
      success: false,
      message: "Ha ocurrido un error",
    });
  }

  try {
    const conn = await getConnection();

    // Eliminar la receta por su ID
    await conn.query("DELETE FROM recetas WHERE id = ?", [id]);

    // Cerrar la conexión
    await conn.end();

    // Devolver una respuesta exitosa
    res.json({
      success: true,
      message: `Se ha eliminado la receta con id=${id}`,
    });
  } catch (error) {
    console.error("Error al eliminar la receta:", error);
    res.status(500).json({
      success: false,
      message: "Error al procesar la solicitud",
    });
  }
});
