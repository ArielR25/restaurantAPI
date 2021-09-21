const { Router } = require('express');
const router = Router();
const multer = require('multer') 
const upload = multer ({ dest:'uploads/' })
const csv = require('csv-parser')
var fs = require('fs');
const { Restaurantes } = require('../db.js');

//endpoint para cargar el archivo .csv
router.post('/restaurantscsv', upload.single('avatar'), async (req, res) => {
    
    try {
        const results = []

        fs.createReadStream(req.file.path)
            .pipe(csv({}))
            .on('data', (data) => results.push(data))
            .on('end', () => {
                results.forEach( async data => {
                    const { id, rating, name, site, email, phone, street, city, state, lat, lng } = data
                    await Restaurantes.findOrCreate({
                        where:{
                            id,
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
                })
            })
        fs.unlinkSync(req.file.path)    //borro el archivo que crea multer
        
        res.status(200).json({response: 'successfully loaded'})
        return;
    }
    catch(e) {
        res.status(400).json({ response: e})
        return;
    }
})

module.exports = router;