const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

// Obtener todos los usuarios
router.get('/', (req, res) => {
    connection.query('SELECT * FROM usuarios', (error, results) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).json(results);
        }
    });
});

// Obtener un usuario por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM usuarios WHERE id = ?', [id], (error, results) => {
        if (error) {
            res.status(500).send(error);
        } else if (results.length === 0) {
            res.status(404).send('Usuario no encontrado');
        } else {
            res.status(200).json(results[0]);
        }
    });
});

// Crear un nuevo usuario
router.post('/', (req, res) => {
    const { nombre, email, password } = req.body;
    connection.query('INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)', [nombre, email, password], (error, results) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(201).json({ id: results.insertId, message: 'Usuario creado con éxito' });
        }
    });
});

// Actualizar un usuario
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, email, password } = req.body;
    connection.query('UPDATE usuarios SET nombre = ?, email = ?, password = ? WHERE id = ?', [nombre, email, password, id], (error, results) => {
        if (error) {
            res.status(500).send(error);
        } else if (results.affectedRows === 0) {
            res.status(404).send('Usuario no encontrado');
        } else {
            res.status(200).json({ message: 'Usuario actualizado con éxito' });
        }
    });
});

// Eliminar un usuario
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM usuarios WHERE id = ?', [id], (error, results) => {
        if (error) {
            res.status(500).send(error);
        } else if (results.affectedRows === 0) {
            res.status(404).send('Usuario no encontrado');
        } else {
            res.status(200).json({ message: 'Usuario eliminado con éxito' });
        }
    });
});

module.exports = router;

