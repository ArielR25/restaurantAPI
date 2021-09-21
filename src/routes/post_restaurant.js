const { Router } = require('express');
const router = Router();
const { Restaurantes } = require('../db.js');

//endpoint para cargar cada restaurante por body
router.post('/restaurant', async (req, res) => {
    
    const { rating, name, site, email, phone, street, city, state, lat, lng } = req.body
    try {
        const restaurant = await Restaurantes.create({
            where:{
                rating,
                name,
                site,
                email,
                phone,
                street,
                city,
                state,
                lat,
                lng
            }
        })
        res.status(200).json({ response: restaurant })
        return;
    }
    catch(e) {
        res.status(400).json({ response: e})
        return;
    }
})

module.exports = router;