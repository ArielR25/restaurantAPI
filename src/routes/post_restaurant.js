require('dotenv').config();
const { Router } = require('express');
const router = Router();
const { Restaurantes } = require('../db.js');

router.post('/restaurant', async (req, res) => {
    try {

        res.status(200).json({response: 'successfully loaded'})
    }
    catch {
        res.status(400).json({ response: 'failed to load data'})
    }
})

module.exports = router;