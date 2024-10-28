const express = require('express');
const router = express.Router();
const path = require('path');

// Ruta para la página ¿Quiénes Somos?
router.get('/quienes-somos', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'quienes-somos.html')); // Asegúrate de que el archivo exista en la carpeta 'views'
});

module.exports = router;

