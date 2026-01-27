use("juegos")
// db.videogames


// 1. Encuentra el tercer juego con el rating más alto.
/*
¿Qué hay que hacer?:
- Ordenar los videojuegos por rating de forma descendente.
- Saltar los dos primeros resultados.
- Mostrar únicamente el siguiente juego.
*/
// db.videogames.aggregate([
//     {
//         $sort: { rating: -1 }
//     },
//     {
//         $skip: 2
//     },
//     {
//         $limit: 1
//     }
// ])


// 2. Imprime un solo juego que esté disponible en cinco plataformas.
/*
¿Qué hay que hacer?:
- Crear un campo que cuente el número de plataformas de cada juego.
- Filtrar los juegos que tengan exactamente cinco plataformas.
- Limitar el resultado a un solo documento.
*/
// db.videogames.aggregate([
//     {
//         $project: {
//             _id: 1,
//             totalPlatforms: { $size: "$platforms" }
//         }
//     },
//     {
//         $match: {
//             totalPlatforms: 5
//         }
//     },
//     {
//         $limit: 1
//     }
// ])


// 3. Muestra el precio promedio por género.
/*
¿Qué hay que hacer?:
- Separar los géneros porque un juego puede tener más de uno.
- Agrupar los videojuegos por género.
- Calcular el precio promedio de cada género.
*/
// db.videogames.aggregate([
//     {
//         $unwind: "$genre"
//     },
//     {
//         $group: {
//             _id: "$genre",
//             avgPrice: { $avg: "$price" }
//         }
//     }
// ])


// 4. Juegos desarrollados en Japón mostrando solo título y desarrollador.
/*
¿Qué hay que hacer?:
- Filtrar los juegos cuyo desarrollador sea de Japón.
- Mostrar únicamente el título del juego y el nombre del desarrollador.
*/
// db.videogames.aggregate([
//     {
//         $match: {
//             "developer.country": "Japan"
//         }
//     },
//     {
//         $project: {
//             _id: 0,
//             title: 1,
//             developer: "$developer.name"
//         }
//     }
// ])


// 5. Total de copias vendidas por publisher.
/*
¿Qué hay que hacer?:
- Agrupar los videojuegos por publisher.
- Sumar el total de copias vendidas por cada publisher.
- Ordenar los resultados de mayor a menor.
*/
// db.videogames.aggregate([
//     {
//         $group: {
//             _id: "$publisher",
//             totalVentas: { $sum: "$copiesSold" }
//         }
//     },
//     {
//         $sort: { totalVentas: -1 }
//     }
// ])


// 6. Juegos con rating mayor a 90 y lanzados después de 2016.
/*
¿Qué hay que hacer?:
- Filtrar los juegos con rating superior a 90.
- Filtrar los juegos lanzados después del año 2016.
- Mostrar solo el título, el rating y el año de lanzamiento.
*/
// db.videogames.aggregate([
//     {
//         $match: {
//             $and: [
//                 { rating: { $gt: 90 } },
//                 { releaseYear: { $gt: 2016 } }
//             ]
//         }
//     },
//     {
//         $project: {
//             _id: 0,
//             title: 1,
//             rating: 1,
//             releaseYear: 1
//         }
//     }
// ])


// 7. Promedio de copias vendidas por país del desarrollador.
/*
¿Qué hay que hacer?:
- Agrupar los videojuegos por país del desarrollador.
- Calcular el promedio de copias vendidas por país.
- Ordenar el resultado de mayor a menor promedio.
*/
// db.videogames.aggregate([
//     {
//         $group: {
//             _id: "$developer.country",
//             avgVentasPorPais: { $avg: "$copiesSold" }
//         }
//     },
//     {
//         $sort: { avgVentasPorPais: -1 }
//     }
// ])


// 8. Juego más vendido de cada género.
/*
¿Qué hay que hacer?:
- Separar los géneros para tratar cada uno individualmente.
- Ordenar los juegos por número de copias vendidas.
- Agrupar por género quedándose con el primer juego (el más vendido).
*/
// db.videogames.aggregate([
//     {
//         $unwind: "$genre"
//     },
//     {
//         $sort: { copiesSold: -1 }
//     },
//     {
//         $group: {
//             _id: "$genre",
//             title: { $first: "$title" },
//             copiesSold: { $first: "$copiesSold" }
//         }
//     }
// ])


// 9. Desarrolladoras con más de un videojuego.
/*
¿Qué hay que hacer?:
- Agrupar los videojuegos por nombre del desarrollador.
- Contar cuántos juegos ha creado cada desarrollador.
- Mostrar solo los desarrolladores con más de un juego.
*/
// db.videogames.aggregate([
//     {
//         $group: {
//             _id: "$developer.name",
//             cantJuegos: { $sum: 1 }
//         }
//     },
//     {
//         $match: {
//             cantJuegos: { $gt: 1 }
//         }
//     }
// ])


// 10. Precio total de todos los videojuegos por plataforma.
/*
¿Qué hay que hacer?:
- Separar las plataformas porque un juego puede estar en varias.
- Agrupar los videojuegos por plataforma.
- Sumar el precio total de los juegos de cada plataforma.
*/
// db.videogames.aggregate([
//     {
//         $unwind: "$platforms"
//     },
//     {
//         $group: {
//             _id: "$platforms",
//             precioTotal: { $sum: "$price" }
//         }
//     }
// ])


// 11. Encuentra los videojuegos con un precio inferior a 30 y que tengan al menos 2 premios. Muestra el título, precio y número de premios.
// db.videogames.aggregate([
//     {
//         $project: {
//             _id: "$title",
//             price: 1,
//             cantPremios: {$size: "$awards"}
//         }
//     },
//     {
//         $match: {
//             price: {$lt: 30},
//             cantPremios: {$gte: 2}
//         }
//     },
// ])


// 12. Muestra el año de lanzamiento con mayor número de videojuegos publicados. El resultado debe mostrar el año y la cantidad de juegos.
// db.videogames.aggregate([
//     {
//         $group: {
//             _id: "$releaseYear",
//             cantJuegos: { $sum: 1 },
//         }
//     },
//     {
//         $sort: { cantJuegos: -1 }
//     },
//     {
//         $limit: 1
//     }
// ])


// 13. Calcula el rating promedio de los videojuegos desarrollados por empresas de cada país, pero solo para aquellos países que tengan un rating promedio superior a 92.
// db.videogames.aggregate([
//     {
//         $group: {
//             _id: "$developer.country",
//             avgRating: { $avg: "$rating" }
//         }
//     }, 
//     {
//         $match: {
//             avgRating: { $gt: 92 }
//         }
//     }
// ])


// 14. Encuentra los videojuegos que contengan la palabra “The” en el título y que tengan un rating superior a 92. Usa una expresión regular y muestra título, rating y desarrollador.

// NO SE HACE, NO ENTRAN LOS REGEX EN EL TEMARIO

// 15. Muestra los 3 géneros con mayor promedio de copias vendidas. Debe aparecer el género y el promedio de ventas.
// db.videogames.aggregate([
//     {
//         $unwind: "$genre"
//     },
//     {
//         $project: {
//             _id: "$genre",
//             avgCopiesSold: { $avg: "$copiesSold" }
//         }
//     },
//     {
//         $limit: 3
//     }
// ])


// 16. Crea una agregación que muestre el videojuego más caro y el más barato de cada año de lanzamiento. El resultado debe incluir el año, y para cada uno: título del juego más caro, su precio, título del juego más barato y su precio.
// db.videogames.aggregate([
//     {
//         // Se ordena en bloques de año de salida, y cada bloque se ordena en precio.
//         $sort: { releaseYear: 1, price: 1 }
//     },
//     {
//         $group: {
//             _id: "$releaseYear",
//             // Titulo y precio del más barato
//             masBaratoTitulo: { $last: "$title" },
//             masBaratoPrecio: { $last: "$price" },
//             // Titulo y precio del más caro
//             masCaroTitulo: { $first: "$title" },
//             masCaroPrecio: { $last: "$price" },
//         }
//     },
//     {
//         $sort: { _id: 1 }
//     }
// ])


// 17. Usando un cursor, calcula la media del rating de todos los videojuegos desarrollados por “FromSoftware”. Muestra el resultado en el siguiente formato: Average rating for FromSoftware games: XX.XX



// 18. Usando un cursor, recorre todos los videojuegos con precio superior a 50 y muestra por pantalla el título y el precio de cada uno con el formato: Title: XXXXX - Price: $XX.XX



// 19. Usando un cursor, encuentra el videojuego con más copias vendidas. Muestra el título y las copias vendidas.



// 20. Usando un cursor, cuenta cuántos videojuegos hay de cada plataforma. Ten en cuenta que cada videojuego puede tener múltiples plataformas. Muestra el resultado con el formato: Platform: XXXXX - Count: XX
