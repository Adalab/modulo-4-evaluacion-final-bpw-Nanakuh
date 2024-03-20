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
app.get("/api/recetas/:id", async (req, res) => {});
app.post("/api/recetas", async (req, res) => {});
app.put("/api/recetas", async (req, res) => {});
app.delete("/api/recetas/:id", async (req, res) => {});