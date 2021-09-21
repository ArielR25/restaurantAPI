const { Router } = require('express');
const router = Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Restaurantes } = require ('../db.js');

router.get('/restaurants', async (req, res) => {
    let { name, page=0 } = req.query;
    
    page = Number(page)
    try{
        if( !name ){    //envia resgistros de 20 en 20, tomando como referencia la variable page, empieza desde page*20
            const restaurants = await Restaurantes.findAll({
                offset: page * 20,
                limit: 20
            })
            if(restaurants.length >0) res.status(200).json({restaurants});
            else res.status(200).json({restaurants: 'No hay mas restaurantes en la base de datos'})
            return;
        }
        else {  //si se provee el query name, busca los nombres que macheen con dicho dato, mayuscula y minuscula es lo mismo
            const restaurants = await Restaurantes.findAll({
                where: {name: {
                    [Op.iLike]: `%${name}%`
                }}
            })
            if(restaurants.length > 0) res.status(200).json({restaurants});
            else res.status(200).json({restaurants: 'No se encontraron restaurantescon ese nombre'})
            return;
        }
    }catch(e){
        res.status(400).json(e)
        return;
    }
})

module.exports = router;