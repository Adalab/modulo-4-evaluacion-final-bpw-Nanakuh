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

app.get("/api/recetas", async (req, res) => {});

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
      res.status(404).json({ message: "Receta no encontrada" });
    }

    // Obtener los ingredientes de la receta
    const [ingredientes] = await conn.query(
      "SELECT nombre, cantidad FROM ingredientes WHERE receta_id = ?",
      [id]
    );

    // Cerrar la conexión
    await conn.end();

    // Devolver los datos de la receta e ingredientes
    res.json({ receta: receta[0], ingredientes });
  } catch (error) {
    console.error("Error al obtener la receta:", error);
    res
      .status(500)
      .json({ success: false, message: "Error al procesar la solicitud" });
  }
});
app.post("/api/recetas", async (req, res) => {});
app.put("/api/recetas", async (req, res) => {});
app.delete("/api/recetas/:id", async (req, res) => {});
