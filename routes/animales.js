const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

// Obtener todos los animales
router.get('/', (req, res) => {
    connection.query('SELECT * FROM animales', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// Crear un nuevo animal
router.post('/', (req, res) => {
    const { nombre, especie, raza, edad, descripcion, fecha_ingreso } = req.body;
    connection.query('INSERT INTO animales (nombre, especie, raza, edad, descripcion, fecha_ingreso) VALUES (?, ?, ?, ?, ?, ?)', [nombre, especie, raza, edad, descripcion, fecha_ingreso], (error, results) => {
        if (error) throw error;
        res.json({ id: results.insertId });
    });
});

// Actualizar un animal
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, especie, raza, edad, descripcion, fecha_ingreso } = req.body;
    connection.query('UPDATE animales SET nombre = ?, especie = ?, raza = ?, edad = ?, descripcion = ?, fecha_ingreso = ? WHERE id = ?', [nombre, especie, raza, edad, descripcion, fecha_ingreso, id], (error, results) => {
        if (error) throw error;
        res.json({ message: 'Animal actualizado' });
    });
});

// Eliminar un animal
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM animales WHERE id = ?', [id], (error, results) => {
        if (error) throw error;
        res.json({ message: 'Animal eliminado' });
    });
});

module.exports = router;
