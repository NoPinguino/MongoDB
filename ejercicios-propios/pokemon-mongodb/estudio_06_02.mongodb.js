use("pokemon");

// 1. Obtén el nombre y el número de la Pokédex de todos los Pokémon de la primera generación.
// db.pokemons.find({
//     "generation": 1
// },{
//     "_id": 0,
//     "name": 1,
//     "pokedexNumber": 1,
// })


// 2. Lista todos los Pokémon que no son legendarios y pesan más de 100 kg.
// db.pokemons.find({
//     "isLegendary": false,
//     "weight": {$gt: 100}
// },{
//     "_id": 0,
//     "name": 1,
//     "pokedexNumber": 1,
// })


// 3. Devuelve todos los Pokémon que tengan exactamente un solo tipo.
// db.pokemons.find({
//     "types": {$size: 1}
// },{
//     "_id": 0,
//     "name": 1,
//     "pokedexNumber": 1,
// })


// 4. Muestra los Pokémon que tengan una altura mayor que 2 metros o un peso menor que 10 kg.
// db.pokemons.find({
//     $or: [
//         {"height": {$gt: 2 } },
//         {"weight": {$lt: 10} },
//     ]
// },{
//     "_id": 0,
//     "name": 1,
//     "pokedexNumber": 1
// })


// 5. Obtén los Pokémon que sean de tipo fire.
// db.pokemons.find({
//     "types": "fire"
// },{
//     "_id": 0,
//     "name": 1,
//     "pokedexNumber": 1,
//     "types": 1,
// })


// 6. Encuentra los Pokémon que tengan dos tipos exactamente y uno de ellos sea "flying".
// db.pokemons.find({
//     $and: [
//         {"types": {$size: 2} },
//         {"types": "flying"}
//     ]
// },{
//     "_id": 0,
//     "name": 1,
//     "pokedexNumber": 1,
//     "types": 1,
// })


// 7. Lista los Pokémon que tengan alguna habilidad oculta (hidden: true).
// db.pokemons.find({
//     "abilities.hidden": true
// },{
//     "_id": 0,
//     "name": 1,
//     "pokedexNumber": 1,
//     "abilities": 1,
// })


// 8. Devuelve los Pokémon que no tengan ninguna habilidad oculta.
// db.pokemons.find({
//     "abilities": {
//         $not: {
//             $elemMatch: {"hidden": true}
//         }
//     }
// },{
//     "_id": 0,
//     "name": 1,
//     "abilities": 1,
// })


// 9. Busca los Pokémon que puedan aprender el movimiento "cut".
// db.pokemons.find({
//     "moves": "cut"
// },{
//     "_id": 0,
//     "name": 1,
// })


// 10. Obtén los Pokémon con ataque mayor que 100 y defensa menor que 80.
// db.pokemons.find({
//     $and: [
//         {"stats.attack": {$gt: 100} },    
//         {"stats.defense": {$lt: 80} }
//     ]
// },{
//     "_id": 0,
//     "name": 1,
//     "stats.attack": 1,
//     "stats.defense": 1
// })


// 11. Encuentra los Pokémon cuyo speed esté entre 60 y 100 (ambos inclusive).
// db.pokemons.find({
//     $and: [
//         {"stats.speed": { $gte: 60 } },
//         {"stats.speed": { $lte: 100 } },
//     ]
// },{
//     "_id": 0,
//     "name": 1,
//     "stats.speed": 1
// })


// 12. Devuelve los Pokémon que no sean de tipo "water" ni "grass".
// db.pokemons.find({
//     "types": {$nin: ["water", "grass"]}
// },{
//     "_id": 0,
//     "name": 1,
//     "types": 1
// })


// 13. Muestra solo el nombre, tipos y stats.speed de los Pokémon, ordenados por velocidad de mayor a menor.
// db.pokemons.find({},{
//     "_id": 0,
//     "name": 1,
//     "stats.speed": 1,
// }).sort({"stats.speed": -1})


// 14. Obtén los 10 Pokémon más pesados.
// db.pokemons.find({},{
//     "_id": 0,
//     "name": 1,
//     "weight": 1,
// }).sort({"weight": -1}).limit(10)


// 15. Lista los Pokémon de la generación 1 ordenados por hp ascendente, mostrando solo nombre y hp.
// db.pokemons.find({
//     "generation": 1,
// },{
//     "_id": 0,
//     "name": 1,
//     "stats.hp": 1,
// }).sort({"stats.hp": 1})

/*
- AGREGACIONES
*/

// 16. Usando agregación, lista los Pokémon que no sean legendarios, sean de generación 1 o 2, y tengan más de 500 puntos totales de estadísticas.
// db.pokemons.aggregate([
//     {
//         $addFields: {
//             "stats_total": {
//                 $add: [
//                     "$stats.hp",
//                     "$stats.attack",
//                     "$stats.defense",
//                     "$stats.specialAttack",
//                     "$stats.specialDefense",
//                     "$stats.speed",
//                 ]
//             }
//         }
//     },
//     {
//         $match: {
//             "isLegendary": false,
//             "stats_total": {$gt: 500},
//             "generation": {$in: [1,2]}
//         }
//     },
//     {
//         $project: {
//             "_id": 0,
//             "name": 1,
//             "isLegendary": 1,
//             "stats_total": 1,
//         }
//     },
// ])


// 17. Calcula el promedio de peso de los Pokémon por generación.
// db.pokemons.aggregate([
//     {
//         $group: {
//             "_id": "$generation",
//             "avg_weight": { $avg: "$weight" }
//         }
//     }, {
//         $project: {
//             "avg_weight": { $round: ["$avg_weight", 2] }
//         }
//     }, {
//         $sort: {
//             "avg_weight": -1
//         }
//     }
// ])


// 18. Obtén cuántos Pokémon hay por tipo.
// db.pokemons.aggregate([
//     {
//         $unwind: "$types",
//     }, {
//         $group: {
//             "_id": "$types",
//             "num_pkmn": { $sum: 1 }
//         }
//     },
//     {
//         $sort: { "num_pkmn": -1 }
//     }
// ])


// 19. Muestra el Pokémon con el mayor ataque de cada generación.
// db.pokemons.aggregate([
//     {
//         $sort: {
//             "generation": 1,
//             "stats.attack": -1,
//         }
//     },
//     {
//         $group: {
//             "_id": "$generation",
//             "max_attack_name": { $first: "$name" },
//             "max_attack_stat": { $first: "$stats.attack" }
//         }
//     },
//     {
//         $sort: {
//             "max_attack_stat": -1
//         }
//     }
// ])


// 20. Calcula la media de velocidad de los Pokémon legendarios y no legendarios por separado.
// db.pokemons.aggregate([
//     {
//         $group: {
//             "_id": "$isLegendary",
//             "avg_speed": {$avg: "$stats.speed"}
//         }
//     },
//     {
//         $project: {
//             "_id": 0,
//             "isLegendary": "$_id",
//             "avg_speed": {$round: ["$avg_speed", 2]}
//         }
//     }
// ])


// 21. Obtén el top 5 Pokémon con mayor suma total de estadísticas (suma de hp, attack, defense, specialAttack, specialDefense y speed).
// db.pokemons.aggregate([
//     {
//         $addFields: {
//             "stats_total": {
//                 $add: [
//                     "$stats.hp",
//                     "$stats.attack",
//                     "$stats.defense",
//                     "$stats.specialAttack",
//                     "$stats.specialDefense",
//                     "$stats.speed"
//                 ]
//             }
//         }
//     },
//     {
//         $project: {
//             "_id": 0,
//             "name": 1,
//             "pokedexNumber": 1,
//             "stats_total": 1
//         }
//     },
//     {
//         $sort: {
//             "stats_total": -1
//         }
//     },
//     {
//         $limit: 5
//     }
// ])


// 22. Actualiza todos los Pokémon de la generación 1 añadiendo el campo {"region": "Kanto"}
// db.pokemons.updateMany({
//     "generation": 1
// },{
//     $set: {
//         "region": "Kanto"
//     }
// })
//
// Para comprobar que se han modificado correctamente:
// db.pokemons.find({
//     "region": "Kanto"
// },{"_id": 0, "name": 1, "generation": 1, "region": 1,})


// 23. Elimina todos los Pokémon cuyo pokedexNumber sea mayor que 1000.
// db.pokemons.deleteMany({
//     "pokedexNumber": { $gt: 1000 }
// })