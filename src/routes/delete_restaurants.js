const { Router } = require('express');
const router = Router();
const { Restaurantes } = require ('../db.js');

router.delete('/restaurants/delete/:id', async (req, res) => {
    let { id } = req.params;
    
    try{
        const restaurant = await Restaurantes.findOne({
            where: {
                id: id
            }
        })
        if(restaurant){
            restaurant.destroy()
            res.status(200).json({restaurants: 'Restaurante eliminado con exito'})
        }else{
            res.status(404).json({restaurants: 'No existe ese restaurante'})
        }
        return;
    }catch(e){
        res.status(400).json(e)
        return;
    }
})

module.exports = router;