var provincias = require("./src/provincias/indexProvincias");

const express = require("express");

const app = express();

const port = 3000;

app.get("/provincias", (req, res) => {
  try {
    let nombresProvincias = Object.keys(provincias);
    console.log(nombresProvincias);
    res.json(nombresProvincias);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ocurrió un error al obtener las provincias");
  }
});
app.get("/provincias/:provincia", (req, res) => {
  console.log(req.params.provincia);
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
