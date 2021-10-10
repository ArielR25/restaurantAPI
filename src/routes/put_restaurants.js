const { Router } = require('express');
const router = Router();
const { Restaurantes } = require ('../db.js');

router.put('/restaurants/put', async (req, res) => {
    const { id, rating, name, site, email, phone, street, city, state, lat, lng } = req.body
    
    try{
        const restaurant = await Restaurantes.findOne({
            where: {
                id: id
            }
        })
        console.log(restaurant)
        if(restaurant){
            restaurant.rating = rating
            restaurant.name = name
            restaurant.site = site
            restaurant.email = email
            restaurant.phone = phone
            restaurant.street = street
            restaurant.city = city
            restaurant.state = state
            restaurant.lat = lat
            restaurant.lng = lng
            
            restaurant.save()
            
            res.status(200).json({restaurants: 'Datos actualizados con exito'})
            return;
        }else{
            res.status(404).json({restaurants: 'No existe ese restaurante'})
            return;
        }
    }catch(e){
        res.status(400).json(e)
        return;
    }
})

module.exports = router;