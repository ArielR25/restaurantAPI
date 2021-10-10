const { Router } = require('express');
const router = Router();
const { Restaurantes } = require ('../db.js');

/*
var EARTH_RADIUS = 6378.137; // radio de la Tierra  
 // Convertir el ángulo expresado en grados a un ángulo aproximadamente igual expresado en radianes java Math.toRadians  
function rad(d) {
    return d * Math.PI / 180.0;
}

   * Google Map calcula la distancia entre dos puntos de coordenadas 
   * @param lng1 longitud 1 
   * @param lat1 Latitud 1 
   * @param lng2 Longitud 2 
   * @param lat2 Latitude 2 
   * @ distancia de retorno (km) 

function getDistance(lng1, lat1, lng2, lat2) {
    var radLat1 = rad(lat1);
    var radLat2 = rad(lat2);
    var a = radLat1 - radLat2;
    var b = rad(lng1) - rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2)
        + Math.cos(radLat1) * Math.cos(radLat2)
        * Math.pow(Math.sin(b / 2), 2)));
    s = s * EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000;
    return s;
}

// let a = distance([119.9969915847, 30.2754597274,], [119.9972383479, 30.2759230036])
// let a = distance([30.2822920169, 125.0036899474], [30.2818472718, 120.0034646419])
let a = getDistance(30.27895275, 119.9921260576, 30.2832692396, 120.0249984587)
console.log(a)
*/

router.get('/restaurants/statistics', async (req, res) => {
    let { latitude, longitude, radius } = req.query;
    
    latitude = Number(latitude)
    longitude = Number(longitude)
    radius = Number(radius)

    try{
        if( latitude && longitude && radius ){
            const restaurants = await Restaurantes.findAll()
            console.log(restaurants)
            res.status(200).json({restaurants});
            return;
        }
        else {
            res.status(400).json({error:'Faltan valores (latitude, longitude, radius)'})
            return;
        }
    }catch(e){
        res.status(400).json(e)
        return;
    }
})

module.exports = router;