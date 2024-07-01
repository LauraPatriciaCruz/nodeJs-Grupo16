const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

// Obtener todos los usuarios
router.get('/', (req, res) => {
    connection.query('SELECT * FROM usuarios', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// Crear un nuevo usuario
router.post('/', (req, res) => {
    const { nombre, email, password } = req.body;
    connection.query('INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)', [nombre, email, password], (error, results) => {
        if (error) throw error;
        res.json({ id: results.insertId });
    });
});

// Actualizar un usuario
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, email, password } = req.body;
    connection.query('UPDATE usuarios SET nombre = ?, email = ?, password = ? WHERE id = ?', [nombre, email, password, id], (error, results) => {
        if (error) throw error;
        res.json({ message: 'Usuario actualizado' });
    });
});

// Eliminar un usuario
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM usuarios WHERE id = ?', [id], (error, results) => {
        if (error) throw error;
        res.json({ message: 'Usuario eliminado' });
    });
});

module.exports = router;
