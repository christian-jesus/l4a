const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Datos de muestra
const clientes = ['george', 'alexander', 'enrique'];
const productos = ['telefono', 'audifono', 'microfono'];

// Rutas
app.get('/', (req, res) => {
  res.send('Bienvenido a mi aplicación Express');
});

app.get('/clientes', (req, res) => {
  res.json(clientes);
});

app.get('/productos', (req, res) => {
  res.json(productos);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
