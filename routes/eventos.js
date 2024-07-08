const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

// Obtener todos los eventos
router.get('/', (req, res) => {
    connection.query('SELECT * FROM eventos', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
});

// Obtener un evento por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM eventos WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.length === 0) {
            res.status(404).send('Evento no encontrado');
        } else {
            res.status(200).json(results[0]);
        }
    });
});

// Crear un nuevo evento
router.post('/', (req, res) => {
    const { titulo, descripcion, fecha, lugar } = req.body;
    connection.query('INSERT INTO eventos (titulo, descripcion, fecha, lugar) VALUES (?, ?, ?, ?)', [titulo, descripcion, fecha, lugar], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send('Evento creado con éxito');
        }
    });
});

// Actualizar un evento
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, fecha, lugar } = req.body;
    connection.query('UPDATE eventos SET titulo = ?, descripcion = ?, fecha = ?, lugar = ? WHERE id = ?', [titulo, descripcion, fecha, lugar, id], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.affectedRows === 0) {
            res.status(404).send('Evento no encontrado');
        } else {
            res.status(200).send('Evento actualizado con éxito');
        }
    });
});

// Eliminar un evento
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM eventos WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.affectedRows === 0) {
            res.status(404).send('Evento no encontrado');
        } else {
            res.status(200).send('Evento eliminado con éxito');
        }
    });
});

module.exports = router;
