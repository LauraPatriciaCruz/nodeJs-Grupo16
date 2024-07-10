require('dotenv').config();



const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Sociedad Protectora de Animales"));

app.listen(3000, () => console.log("Server ready on port 3000."));

// module.exports = app;



// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Rutas
const usuariosRoutes = require('./routes/usuarios');
const animalesRoutes = require('./routes/animales');
const adopcionesRoutes = require('./routes/adopciones');
const eventosRoutes = require('./routes/eventos');

app.use('/usuarios', usuariosRoutes);
app.use('/animales', animalesRoutes);
app.use('/adopciones', adopcionesRoutes);
app.use('/eventos', eventosRoutes);



module.exports = app; // Exportar la aplicación para pruebas o uso externo