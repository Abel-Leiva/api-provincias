const express = require("express");
const cors = require("cors");
const provincias = require("./src/provincias/indexProvincias");

const app = express();
const port = 3000;

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

app.get("/provincias", (req, res) => {
  try {
    let nombresProvincias = Object.keys(provincias);
    res.json(nombresProvincias);
  } catch (error) {
    res.status(500).send("Ocurrió un error al obtener las provincias");
  }
});

app.get("/provincias/:provincia", (req, res) => {
  const { provincia } = req.params;
  if (req.params.provincia && provincias[provincia]) {
    res.json(provincias[provincia]);
  } else {
    res.status(404).send("Provincia no encontrada");
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
