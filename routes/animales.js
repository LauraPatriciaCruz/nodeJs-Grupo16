const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

// Obtener todos los animales
router.get('/', (req, res) => {
    connection.query('SELECT * FROM animales', (error, results) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).json(results);
        }
    });
});

// Obtener un animal por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM animales WHERE id = ?', [id], (error, results) => {
        if (error) {
            res.status(500).send(error);
        } else if (results.length === 0) {
            res.status(404).send('Animal no encontrado');
        } else {
            res.status(200).json(results[0]);
        }
    });
});

// Crear un nuevo animal
router.post('/', (req, res) => {
    const { nombre, especie, raza, edad, descripcion, fecha_ingreso } = req.body;
    connection.query('INSERT INTO animales (nombre, especie, raza, edad, descripcion, fecha_ingreso) VALUES (?, ?, ?, ?, ?, ?)', [nombre, especie, raza, edad, descripcion, fecha_ingreso], (error, results) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(201).json({ id: results.insertId, message: 'Animal creado con éxito' });
        }
    });
});

// Actualizar un animal
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, especie, raza, edad, descripcion, fecha_ingreso } = req.body;
    connection.query('UPDATE animales SET nombre = ?, especie = ?, raza = ?, edad = ?, descripcion = ?, fecha_ingreso = ? WHERE id = ?', [nombre, especie, raza, edad, descripcion, fecha_ingreso, id], (error, results) => {
        if (error) {
            res.status(500).send(error);
        } else if (results.affectedRows === 0) {
            res.status(404).send('Animal no encontrado');
        } else {
            res.status(200).json({ message: 'Animal actualizado con éxito' });
        }
    });
});

// Eliminar un animal
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM animales WHERE id = ?', [id], (error, results) => {
        if (error) {
            res.status(500).send(error);
        } else if (results.affectedRows === 0) {
            res.status(404).send('Animal no encontrado');
        } else {
            res.status(200).json({ message: 'Animal eliminado con éxito' });
        }
    });
});

module.exports = router;

