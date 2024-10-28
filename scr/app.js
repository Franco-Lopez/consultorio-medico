const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos (CSS, imágenes)
app.use(express.static(path.join(__dirname, '../public')));

// Rutas
const indexRoutes = require('./routes/index');
const consultorioRoutes = require('./routes/consultorio');
const quienesSomosRoutes = require('./routes/quienes-somos'); // Agregar aquí

// Usar las rutas
app.use('/', indexRoutes);
app.use('/consultorio', consultorioRoutes);
app.use('/', quienesSomosRoutes); // Usar la ruta de quienes somos

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

