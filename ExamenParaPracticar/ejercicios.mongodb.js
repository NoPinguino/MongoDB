use("examen_23_24")

// 1. (2 ptos)
/*
Considera la colecci ́on orders proporcionada por el profesor. Muestra el documento con el cuarto
precio total más bajo. Obviamente, no puedes seleccionarlo mirando el id.
*/
// db.orders.find({}).sort({total_price:1}).skip(3).limit(1)

// 2. (2 ptos)
/*
Considera la colección orders proporcionada por el profesor. Analiza el siguiente output y, haciendo
uso de las agregaciones, crea un método en JS que produzca la misma salida. Averiguar qu ́e se está imprimiendo
es también parte del ejercicio.

Notas personales:
- En la salida aparece un campo que no existe, lo voy a tener que crear.
- Creo que el campo que aparece en la salida es un sumatorio de los campos 'quantity' de los subdocumentos (documentos embebidos) de la lista items. (sum_quantity == 8)
*/
// db.orders.aggregate([
//     {
//         $project: {
//             "_id": 1,
//             "totalQuantity": {$sum: "$items.quantity"}
//         }
//     },
//     {
//         $match: {
//             "totalQuantity": 8
//         }
//     }
// ])

// 3. (2 ptos)
/*
Considera la colección orders proporcionada por el profesor. Haciendo uso de un cursor, calcula la
media del precio total de los pedidos del customer con id = cust 002. Si te fijas, este cliente ha realizado dos
pedidos, cuyo precio total es 45 y 70 respectivamente. El resultado que debes mostrar por pantalla es el siguiente
(donde cust 002 y 57.5 son variables en la instrucción print):

resultado en consola: Average total price for customer cust_002 : 57.5
*/
// const cursor = db.orders.find({"customer_id": "cust_002"}) // El cursor contiene dos pedidos.
// let precioTotal = 0
// let count = 0
// let cust_id // Me pide que el id de cliente sea variable
// cursor.forEach(doc => {
//     precioTotal += doc.total_price
//     count++
//     cust_id = doc.customer_id
// })
// console.log(`Average total price for customer: ${cust_id} : ${precioTotal / count}`)

// 4. (2 ptos)
/*
Considera la colección products proporcionada por el profesor. Usando agregaciones, muestra el
precio medio de los productos de cada categor ́ıa. Es decir, muestra el siguiente resultado:

[
    {
        "averagePrice": 620,
        "category": "Electronics"
    },
    {
        "averagePrice": 74,
        "category": "Fashion"
    }
]

Notas personales:
- Se agupa por categoría.
- Se crean campos para un nombre legible de categoría (no imprimir _id) y un promedio del precio.
- ¿Se ordena de mayor a menor según precio promedio?
*/
// db.products.aggregate([
//     {
//         $group: {
//             "_id": "$category",
//             "averagePrice": { $avg: "$price" },
//         },
//     },
//     {
//         $project: {
//             "_id": 0,
//             "averagePrice": { $round: ["$averagePrice", 0] },
//             "category": "$_id",
//         }
//     },
//     {
//         $sort: {
//             "averagePrice": -1
//         }
//     }
// ])

// 5. (2 ptos)
/*
Considera la colección books proporcionada por el profesor. Crea una consulta find() para mostrar
los autores que sean de nacionalidad Británica con libros que contengan la palabra The y tengan más de 250
páginas. Para buscar los libros con la palabra The debes usar title: /The/. El resultado debería ser el siguiente
(observa los campos que se muestran):

[
    {
        "title": "The Lord of the Rings",
        "author": {
            "name": "J.R.R. Tolkien"
        },
        "pages": 1178
    }
]
*/
// db.books.find({
//     "author.nationality": "British",
//     "pages": {$gt: 250},
//     "title": /The/,
// },{
//     "_id": 0,
//     "title": 1,
//     "author.name": 1,
//     "pages": 1
// })