const { Router } = require('express');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const post_restaurantscsv = require ('./post_restaurantscsv.js');
const post_restaurant = require ('./post_restaurant.js');
const get_restaurants = require ('./get_restaurants.js');
const put_restaurants = require ('./put_restaurants.js');
const delete_restaurants = require ('./delete_restaurants.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', post_restaurant);
router.use('/', post_restaurantscsv);
router.use('/', get_restaurants);
router.use('/', put_restaurants);
router.use('/', delete_restaurants);

module.exports = router;
