# restaurantAPI

### Bienvenid@ a la restaurantAPI

Una API que almacena valores de restaurantes en postgreSQL con el siguiente modelo:

![image](https://user-images.githubusercontent.com/82990938/134221130-38d0cb7b-b4d0-4c0b-90f4-ec43e76520ab.png)

---

Esta API cuenta con varios endpoints que trabajan como un CRUD, a continuación te muestro como utilizarlos:

## CREATE

Para crear nuevas entradas, existen dos metodos:

* por archivo .csv

Para crear una entrada por .csv es necesario que el elemento que contiene el archivo, tenga la propiedad name='avatar'.
Ejemplo:
~~~
  <input type='file' name='avatar'/>
~~~
Ahora si el endpoint para cargar los datos es:

~~~
https://arielrestaurantapi.herokuapp.com/restaurantscsv
~~~

* por body

Para cargar una entrada manualmente, se debe eviar por body un objeto tipo json con la estructura del modelo. Por ejemplo:

~~~
{
    "rating":2,
    "name":"Super Restaurant",
    "site":"https://superRestaurant.com",
    "email":"superRestaurant@rest.com",
    "phone":"123 423 4566",
    "street":"123 calle feliz",
    "city":"Saujil",
    "state":"Catamarca",
    "lat":12.111323,
    "lng":-22.112444
}
~~~

En este caso, el endpoint necesario es:

~~~
https://arielrestaurantapi.herokuapp.com/restaurant
~~~

---

## READ

Para leer entradas, hay varias maneras, dependiendo lo que se necesite.

Si quieres obtener entradas de 20 en 20, simplemente envias un query con el número que indica la sección que deseas. El número se indica en la variable page
~~~
https://arielrestaurantapi.herokuapp.com/restaurants?page=1
~~~

#### Funcionamiento

page    resgistros

page=0 devuelve 1 al 20

page=1 devuelve 21 al 40

page=2 devuelve 41 al 60

etc


#### Respuesta

el endpoint devuelve una respuesta en forma de json con la siguiente estructura:

~~~
{
    "restaurants": [
        {
            "id": "4e17896d-a26f-44ae-a8a4-5fbd5cde79b0",
            "rating": 0,
            "name": "Hernández - Lira",
            "site": "http://graciela.com.mx",
            "email": "Brandon_Vigil@hotmail.com",
            "phone": "570 746 998",
            "street": "93725 Erick Arroyo",
            "city": "Mateofurt",
            "state": "Hidalgo",
            "lat": 19.437904276995,
            "lng": -99.1286576775023,
            "createdAt": "2021-09-21T14:33:26.850Z",
            "updatedAt": "2021-09-21T14:33:26.850Z"
        },
        {
            "id": "851f799f-0852-439e-b9b2-df92c43e7672",
            "rating": 1,
            "name": "Barajas, Bahena and Kano",
            "site": "https://federico.com",
            "email": "Anita_Mata71@hotmail.com",
            "phone": "534 814 204",
            "street": "82247 Mariano Entrada",
            "city": "Mérida Alfredotown",
            "state": "Durango",
            "lat": 19.4400570537131,
            "lng": -99.1270470974249,
            "createdAt": "2021-09-21T14:33:26.221Z",
            "updatedAt": "2021-09-21T14:33:26.221Z"
        }
    ]
}
~~~

Cuando el rango seleccionado no contiene registros, devuelve esta respuesta:

~~~
{
    "restaurants": "No hay mas restaurantes en la base de datos"
}
~~~

Si se desea obtener los registros por el nombre del restaurante, se puede enviar por query el nombre o parte del mismo en la variable name, de esta manera traerá todos los resgistros que contentan ese string, ignorando la direfencia entre mayusculas o minusculas,

Ejemplo:

~~~
https://arielrestaurantapi.herokuapp.com/restaurants?name=cas

encuentra 3 registros:

{
    "restaurants": [
        {
            "id": "ed23040e-6d68-4211-b31c-62e2f36d120a",
            "rating": 3,
            "name": "Casanova - Jaramillo",
            "site": "http://brayan.com",
            "email": "Valentina_Gracia59@nearbpo.com",
            "phone": "573.342.065",
            "street": "220 Ángel Gabriel Solar",
            "city": "Cancún Yaretzi",
            "state": "Durango",
            "lat": 19.4338099754932,
            "lng": -99.1293445790167,
            "createdAt": "2021-09-21T14:33:28.871Z",
            "updatedAt": "2021-09-21T14:33:28.871Z"
        },
        {
            "id": "32b74fb4-1911-4db9-9646-f5ce4663ff1c",
            "rating": 0,
            "name": "Alicea - Castañeda",
            "site": "https://gustavo.org",
            "email": "Gerardo_Ozuna32@yahoo.com",
            "phone": "599 747 935",
            "street": "5702 Yamileth Terrenos",
            "city": "Coronadoview",
            "state": "Zacatecas",
            "lat": 19.4394962074356,
            "lng": -99.1264430870515,
            "createdAt": "2021-09-21T14:33:30.093Z",
            "updatedAt": "2021-09-21T14:33:30.093Z"
        },
        {
            "id": "3765054a-c706-4dcd-8424-aa8db4e5a4bd",
            "rating": 4,
            "name": "Casárez S.L.",
            "site": "https://julio césar.gob.mx",
            "email": "Isaac86@gmail.com",
            "phone": "567057696",
            "street": "808 Noriega Pasaje",
            "city": "La Paz Lucasbury",
            "state": "Jalisco",
            "lat": 19.4354772960097,
            "lng": -99.1257455545481,
            "createdAt": "2021-09-21T14:33:30.008Z",
            "updatedAt": "2021-09-21T14:33:30.008Z"
        }
    ]
}
~~~

nota: si se agrega el query name, es ignorado el query page

---

## UPDATE

Para hacer un update, se envia por body, en un json los datos COMPLETOS del modelo. Donde el id es el del registro que se desea actualizar.

Ejemplo:

~~~
https://arielrestaurantapi.herokuapp.com/restaurants/put

{
    "id":"851f799f-0852-439e-b9b2-df92c43e7672",
    "rating":2,
    "name":"Super Restaurant",
    "site":"https://superRestaurant.com",
    "email":"superRestaurant@rest.com",
    "phone":"123 423 4566",
    "street":"123 calle feliz",
    "city":"Saujil",
    "state":"Catamarca",
    "lat":12.111323,
    "lng":-22.112444
}
~~~

La respuesta será:
~~~
{
    "restaurants": "Datos actualizados con exito"
}
~~~
O en caso de no encontrar el id:
~~~
{
    "restaurants": "No existe ese restaurante"
}
~~~

## DELETE

Para hacer un delete, se debe enviar el id del restaurante en cuestion:

~~~
https://arielrestaurantapi.herokuapp.com/restaurants/delete/4e17896d-a26f-44ae-a8a4-5fbd5cde79b0

las respuestas son:
* caso afirmativo:
  
  {
    "restaurants": "Restaurante eliminado con exito"
  }
  
* caso negativo:

  {
    "restaurants": "No existe ese restaurante"
  }
  
~~~

### Resumen con los endpoints:

#### crear
* `https://arielrestaurantapi.herokuapp.com/restaurantscsv`

* `https://arielrestaurantapi.herokuapp.com/restaurant`

### leer

* `https://arielrestaurantapi.herokuapp.com/restaurants?page=1`

* `https://arielrestaurantapi.herokuapp.com/restaurants?name=cas`

### actualizar

* `https://arielrestaurantapi.herokuapp.com/restaurants/put`

### eliminar

* `https://arielrestaurantapi.herokuapp.com/restaurants/delete/4e17896d-a26f-44ae-a8a4-5fbd5cde79b0`




