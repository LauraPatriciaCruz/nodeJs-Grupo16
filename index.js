const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connection = require('./db/connection');

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

app.get("/", (req, res)=>{
    res.send("Sociedad Protectora de Animales");
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
