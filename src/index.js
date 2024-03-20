// ---------- IMPORTAR BIBLIOTECAS ----------
const express = require("express");
const cors = require("cors");
require("dotenv").config();

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