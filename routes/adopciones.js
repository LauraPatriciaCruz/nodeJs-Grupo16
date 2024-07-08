const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

// Obtener todas las adopciones
router.get('/', (req, res) => {
    connection.query('SELECT * FROM adopciones', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
});

// Obtener una adopción por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM adopciones WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.length === 0) {
            res.status(404).send('Adopción no encontrada');
        } else {
            res.status(200).json(results[0]);
        }
    });
});

// Crear una nueva adopción
router.post('/', (req, res) => {
    const { usuario_id, animal_id, fecha_adopcion } = req.body;
    connection.query('INSERT INTO adopciones (usuario_id, animal_id, fecha_adopcion) VALUES (?, ?, ?)', [usuario_id, animal_id, fecha_adopcion], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send('Adopción creada con éxito');
        }
    });
});

// Actualizar una adopción
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { usuario_id, animal_id, fecha_adopcion } = req.body;
    connection.query('UPDATE adopciones SET usuario_id = ?, animal_id = ?, fecha_adopcion = ? WHERE id = ?', [usuario_id, animal_id, fecha_adopcion, id], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.affectedRows === 0) {
            res.status(404).send('Adopción no encontrada');
        } else {
            res.status(200).send('Adopción actualizada con éxito');
        }
    });
});

// Eliminar una adopción
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM adopciones WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.affectedRows === 0) {
            res.status(404).send('Adopción no encontrada');
        } else {
            res.status(200).send('Adopción eliminada con éxito');
        }
    });
});

module.exports = router;
