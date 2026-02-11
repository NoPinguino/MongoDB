use("examen_23_24")

// 1. (2 ptos)
/*
Considera la colección orders proporcionada por el profesor. Muestra el documento con el cuarto
precio total más bajo. Obviamente, no puedes seleccionarlo mirando el id.
*/
// db.orders.find({},{
//     "_id": 0,
//     "total_price": 1
// }).sort({"total_price": 1}).skip(3).limit(1)

// 2. (2 ptos)
/*
Considera la colección orders proporcionada por el profesor. Analiza el siguiente output y, haciendo
uso de las agregaciones, crea un método en JS que produzca la misma salida. Averiguar qué se está imprimiendo
es también parte del ejercicio.

[{
    " _id ": " order_007 ",
    " totalItems ": 8
}]
*/
// db.orders.aggregate([
//     { $unwind: "$items" },
//     {
//         $group: {
//             _id: "$_id",
//             totalItems: { $sum: "$items.quantity" }
//         }
//     },
//     {
//         $sort: { totalItems: -1 }
//     },
//     {
//         $limit: 1
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
// const cursor = db.orders.find({ "customer_id": "cust_002" })
// let cant_pedidos = 0;
// let total_pedidos = 0;
// cursor.forEach(doc => {
//     total_pedidos += doc.total_price;
//     cant_pedidos++;
// });
// print(`Average total price for customer cust_002 : ${total_pedidos / cant_pedidos}`)


// 4. (2 ptos)
/*
Considera la colección products proporcionada por el profesor. Usando agregaciones, muestra el
precio medio de los productos de cada categor ía. Es decir, muestra el siguiente resultado:

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
*/
// db.products.aggregate([
//     {
//         $group: {
//             "_id": "$category",
//             "averagePrice": { $avg: "$price" }
//         }
//     },
//     {
//         $project: {
//             "_id": 0,
//             "averagePrice": { $round: ["$averagePrice", 2] },
//             "category": "$_id",
//         }
//     },
//     {
//         $sort: { "averagePrice": -1 }
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
//     "pages": { $gt: 250 },
//     "title": /The/,
// },{
//     "_id": 0,
//     "title": 1,
//     "author.name": 1,
//     "pages": 1,
// })


// EJERCICIOS EXTRA (CHATGPT):


// 1. (2 ptos)
/*
Considera la colección orders proporcionada por el profesor. Muestra el pedido entregado
(status = "delivered") con el precio total más alto. Obviamente, no puedes seleccionarlo
mirando el id.
*/


// 2. (2 ptos)
/*
Considera la colección orders proporcionada por el profesor. Haciendo uso de agregaciones,
muestra el número total de productos distintos vendidos en todos los pedidos entregados
(status = "delivered"). Un producto cuenta una sola vez por pedido, independientemente
de la cantidad.
*/


// 3. (2 ptos)
/*
Considera la colección orders proporcionada por el profesor. Haciendo uso de un cursor,
calcula el precio medio de los pedidos pagados con credit_card. El resultado que debes
mostrar por pantalla es el siguiente (donde X es una variable):

Average total price for credit_card orders: X
*/


// 4. (2 ptos)
/*
Considera la colección orders proporcionada por el profesor. Muestra los pedidos enviados
a la ciudad de Barcelona cuyo total_price sea mayor que 50. Solo deben mostrarse los
siguientes campos:
- _id
- customer_id
- total_price
- shipping_address.city
*/


// 5. (2 ptos)
/*
Considera la colección orders proporcionada por el profesor. Usando agregaciones, muestra
cuántos pedidos hay por cada método de pago. El resultado debe tener el siguiente formato:

[
  { "payment_method": "credit_card", "count": X },
  { "payment_method": "paypal", "count": Y }
]
*/


// 6. (2 ptos)
/*
Considera la colección products proporcionada por el profesor. Muestra los productos de
la categoría "Electronics" que estén en stock y cuyo precio sea mayor que 300, ordenados
por precio de forma descendente.
*/


// 7. (2 ptos)
/*
Considera la colección products proporcionada por el profesor. Usando agregaciones, muestra
el precio medio de los productos de cada categoría, redondeado a dos decimales y sin
mostrar el campo _id.
*/


// 8. (2 ptos)
/*
Considera la colección books proporcionada por el profesor. Crea una consulta find() para
mostrar los libros de autores británicos con más de 300 páginas. Solo deben mostrarse los
siguientes campos:
- title
- author.name
- pages
- publication_year
*/


// 9. (2 ptos)
/*
Considera la colección books proporcionada por el profesor. Muestra los libros que
pertenezcan al género "Fantasy" y cuya valoración media (rating.average) sea mayor o igual
que 4.8.
*/


// 10. (2 ptos)
/*
Considera la colección books proporcionada por el profesor. Usando agregaciones, muestra
el número de libros por idioma. El resultado debe tener el siguiente formato:

[
  { "language": "English", "count": X },
  { "language": "Spanish", "count": Y }
]
*/
