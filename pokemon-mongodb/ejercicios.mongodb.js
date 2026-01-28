use("pokemon")

// 1. Encuentra el Pokémon con el tercer HP más alto. Muestra pokedexNumber, name y stats.hp.
// db.pokemons.aggregate([
//     {
//         $sort: { "stats.hp" : -1 }
//     },
//     {
//         $project: {
//             "pokedexNumber": 1,
//             "name": 1,
//             "stats.hp": 1
//         }
//     },
//     {
//         $skip: 2
//     },
//     {
//         $limit: 1
//     }
// ])


// 2. Muestra un solo Pokémon que tenga exactamente 102 movimientos (usa $size). (He puesto tres soluciones de más simple a más completa)
//
// db.pokemons.find({
//     moves: {$size: 102}
// },
// {
//     pokedexNumber: 1,
//     name: 1,
// }).limit(1)
//
// db.pokemons.aggregate([
//     {
//         $project: {
//             "_id": 0,
//             "pokedexNumber": 1,
//             "numMoves": {$size: "$moves"},
//             "name": 1
//         }
//     },
//     {
//         $match: {
//             "numMoves": 102
//         }
//     },
//     {
//         $limit: 1
//     }
// ])
//
// db.pokemons.aggregate([
//     {
//         $addFields: {
//             "numMoves": {$size: "$moves"}
//         }
//     },
//     {
//         $match: {
//             "numMoves": 102
//         }
//     },
//     {
//         $project: {
//             "_id": 0,
//             "pokedexNumber": 1,
//             "name": 1,
//             "numMoves": 1
//         }
//     },
//     {
//         $limit: 1
//     }
// ])


// 3. Calcula el promedio de ataque (stats.attack) por generación. Muestra la generación y el promedio.
// db.pokemons.aggregate([
//     {
//         $group: {
//             "_id": "$generation",
//             "avgAttack": { $avg: "$stats.attack"}
//         }
//     },
//     {
//         // No es necesario, solo lo he hecho para aprender a redondear decimales
//         $project: {
//             _id: 1,
//             avgAttack: { $round: ["$avgAttack", 2] }
//         }
//     },
//     {
//         $sort: {"avgAttack": -1}
//     }
// ])


// 4. Encuentra todos los Pokémon legendarios y muestra solo el pokedexNumber, name y isLegendary.
// db.pokemons.find({
//     isLegendary: true
// },{
//     _id: 0,
//     pokedexNumber: 1,
//     name: 1,
//     isLegendary: 1,
// })
// db.pokemons.aggregate([
//     {
//         $match: { "isLegendary" : true }
//     },
//     {
//         $project: {
//             _id: 0,
//             pokedexNumber: 1,
//             generation: 1,
//             name: 1,
//             isLegendary: 1
//         }
//     },
//     {
//         $sort: {
//             generation: 1,
//             pokedexNumber: 1,
//         }
//     },
// ])
//
// No muestra todos los legendarios porque se ejecuta en Compass, que limita los resultados a los primeros 20.


// 5. Calcula cuántos Pokémon hay de cada tipo principal (primer elemento de types). Ordena de mayor a menor.
// db.pokemons.aggregate([
//     {
//         $unwind: "$types",
//     },
//     {
//         $group: {
//             _id: "$types",
//             cantPokemon: { $sum: 1 },
//         }
//     },
//     {
//         $sort: { cantPokemon: -1 }
//     }
// ])


// 6. Muestra los Pokémon que tengan velocidad (stats.speed) mayor a 100 y peso menor a 50. Muestra name, stats.speed y weight. (Ambas respuestas válidas, el $and: es redundante pero es para estudiar)
// db.pokemons.find({
//     $and: [
//         {
//             "stats.speed": {$gte: 100}
//         },
//         {
//             "weight": {$lte: 50}
//         }
//     ]
// },{
//     "name": 1,
//     "stats.speed": 1,
//     "weight":1
// })
// db.pokemons.aggregate([
//     {
//         $match: {
//             $and: [
//                 {
//                     "stats.speed": { $gte: 100 },
//                 },
//                 {
//                     "weight": { $lte: 50 }
//                 }
//             ]
//         }
//     },
//     {
//         $project: {
//             "name": 1,
//             "stats.speed": 1,
//             "weight": 1
//         }
//     },
// ])


// 7. Agrupa los Pokémon por generación y calcula el promedio de HP de cada generación. Ordena de mayor a menor.
// db.pokemons.aggregate([
//     {
//         $group: {
//             _id: "$generation",
//             avgHP: { $avg: "$stats.hp" }
//         }
//     },
//     {
//         $project: {
//             avgHP: { $round: ["$avgHP", 2] }
//         }
//     },
//     {
//         $sort: {
//             avgHP: -1
//         }
//     }
// ])


// 8. Encuentra el Pokémon más pesado de cada tipo. Muestra el tipo (_id), name y weight. (Hint: $unwind + $sort + $group + $first)
//
// - ¡Ejercicio clave!: uso de first / last
//
// db.pokemons.aggregate([
//     {
//         $unwind: "$types",
//     },
//     {
//         $sort: {
//             "weight": -1
//         }
//     },
//     {
//         $group: {
//             _id: "$types",
//             nombre: {$first: "$name"}, 
//             peso: {$first: "$weight"},
//         }
//     }
// ])


// 9. Encuentra las habilidades ocultas (hidden: true) que aparecen en más de un Pokémon. Muestra el nombre de la habilidad y la cantidad de Pokémon que la tienen.
// db.pokemons.aggregate([
//     {
//         $unwind: "$abilities"
//     },
//     {
//         $match: {
//             "abilities.hidden": true
//         }
//     },
//     {
//         $group: {
//             "_id": "$abilities.name",
//             "count": { $sum: 1 }
//         }
//     },
//     {
//         $match: {
//             count: { $gt: 1 }
//         }
//     }
// ])


// 10. Calcula el peso total de todos los Pokémon de cada tipo. Ten en cuenta que un Pokémon puede tener varios tipos.
// db.pokemons.aggregate([
//     {
//         $unwind: "$types"
//     },
//     {
//         $group: {
//             "_id": "$types",
//             "acumulador":  { $sum : "$weight" },
//         }
//     },
//     {
//         $sort: { acumulador : -1 }
//     }
// ])


// 11. Encuentra los Pokémon que tengan más de 80 en ataque y 2 tipos, siendo uno de ellos 'ground'. Muestra: name, stats.attack y la lista de tipos.
// db.pokemons.aggregate([
//     {
//         $match: {
//             $and: [
//                 {
//                     "stats.attack": { $gt: 80 }
//                 },
//                 {
//                     "types": { $size: 2 },
//                 },
//                 {
//                     "types": "ground"
//                 }
//             ]
//         }
//     },
//     {
//         $project: {
//             "_id": 0,
//             "name": 1,
//             "stats.attack": 1,
//             "types": 1,
//         }
//     }
// ])


// 12. Muestra la generación con más Pokémon creados. Resultado: generación y cantidad de Pokémon.
// db.pokemons.aggregate([
//     {
//         $group: {
//             "_id": "$generation",
//             "cantidad_pokemon": { $sum: 1 }
//         }
//     },
//     {
//         $project: {
//             "_id": 1,
//             "cantidad_pokemon": 1
//         }
//     },
//     {
//         $sort: { "cantidad_pokemon" : -1 }
//     }
// ])


// 13. Calcula el promedio de defensa (stats.defense) por tipo de Pokémon, pero solo muestra los tipos cuyo promedio sea superior a 60.
// db.pokemons.aggregate([
//     {
//         $unwind: "$types"
//     },
//     {
//         $group: {
//             _id: "$types",
//             avg_defense: { $avg: "$stats.defense" },
//         }
//     },
//     {
//         $match: {
//             avg_defense: { $gt: 60 }
//         }
//     },
//     {
//         $sort: {
//             avg_defense: -1
//         }
//     }
// ])


// 14. Encuentra los Pokémon con ataque mayor a 50 y pokedexNumber impar. Muestra name, stats.attack, generación y número de tipos.
// db.pokemons.aggregate([
//     {
//         $addFields: {
//             is_odd_num: { $mod: ["$pokedexNumber", 2] }
//         }
//     },
//     {
//         $match: {
//             $and: [
//                 {
//                     "stats.attack": { $gt: 50 },
//                 },
//                 {
//                     "is_odd_num": 1
//                 }
//             ]
//         }
//     },
//     {
//         $project: {
//             "name": 1,
//             "stats.attack": 1,
//             "generation": 1,
//             "num_tipos": { $size: "$types" }
//         }
//     },
//     {
//         $sort: {
//             "stats.attack": -1
//         }
//     }
// ])


// 15. Muestra los 3 tipos de Pokémon con mayor promedio de velocidad (stats.speed). Muestra el tipo y el promedio.
// db.pokemons.aggregate([
//     {
//         $unwind: "$types"
//     },
//     {
//         $group: {
//             "_id": "$types",
//             "avg_speed": { $avg : "$stats.speed" }
//         }
//     },
//     {
//         $project: {
//             "_id": 1,
//             "avg_speed": { $round: ["$avg_speed", 2] }
//         }
//     },
//     {
//         $sort: {
//             "avg_speed": -1
//         }
//     },
//     {
//         $limit: 3
//     }
// ])


// 16. Muestra el Pokémon más alto y más bajo de cada generación. Resultado: generación, name y height de más alto y más bajo.
// db.pokemons.aggregate([
//     {
//         $sort: { "height": -1 }
//     },
//     {
//         $group: {
//             "_id": "$generation",
//             "nombre_alto": { $first: "$name" },
//             "altura_alto": { $first: "$height" },
//             "nombre_bajo": { $last: "$name" },
//             "altura_bajo": { $last: "$height" },
//         }
//     },
//     {
//         $sort: { "_id": 1 }
//     }
// ])


// 17. Usando un cursor, calcula la media de defensa (stats.defense) de todos los Pokémon legendarios. Muestra el resultado como: Average defense for legendary Pokémon: XX.XX
// let cursor = db.pokemons.find({})
// let acc_def = 0
// let count = 0
// cursor.forEach(doc => {
//     if (doc.isLegendary) {
//         acc_def += doc.stats.defense
//         count++
//     }
// })
// console.log(`Average defense for legendary Pokémon: ${(acc_def/count).toFixed(2)}.`)


// 18. Usando un cursor, recorre todos los Pokémon con peso mayor a 100 y muestra: Name: XXXX - Weight: XX.XX
// let cursor = db.pokemons.find({"weight": {$gt: 100}})
// cursor.forEach(doc => {
//     console.log(`Name: ${doc.name} - Weight: ${(doc.weight).toFixed(2)}`)
// })


// 19. Usando un cursor, encuentra el Pokémon con más movimientos. Muestra name y cantidad de movimientos.
// let cursor = db.pokemons.find({},{"name": 1, "moves": 1})
// let nombre = ""
// let max_moves = 0
// cursor.forEach(doc => {
//     moves_length = doc.moves.length
//     if (moves_length > max_moves) {
//         max_moves = moves_length
//         nombre = doc.name
//     }
// });
// console.log(`El Pokémon que puede aprender más movimientos es ${nombre} con ${max_moves} movimientos.`)


// 20. Usando un cursor, cuenta cuántos Pokémon hay por tipo principal (primer elemento de types). Muestra: Type: XXX - Count: XX
// let cursor = db.pokemons.find({})
// let contador_tipos = new Map()
// cursor.forEach(doc => {
//     let tipo_primario = doc.types[0]
//     if (contador_tipos.has(tipo_primario)) {
//         contador_tipos.set(tipo_primario, contador_tipos.get(tipo_primario) + 1)
//     } else {
//         contador_tipos.set(tipo_primario, 1)
//     }
// })
// for (let [k,v] of contador_tipos) {
//     console.log(`${k} : ${v}`)
// }