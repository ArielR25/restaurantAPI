const { Router } = require('express');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const post_restaurant = require ('./post_restaurant.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', post_restaurant);

module.exports = router;
