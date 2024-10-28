const express = require('express');
const router = express.Router();
const path = require('path');

// Rutas para los consultorios
router.get('/lanus', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'consultorio-lanus.html'));
});

router.get('/san-antonio', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'consultorio-san-antonio.html'));
});

router.get('/internacion-domiciliaria', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'internacion-domiciliaria.html'));
});

module.exports = router;


