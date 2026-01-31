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


// 21. Encuentra los 5 Pokémon con mayor defensa especial (stats.spDefense). Muestra pokedexNumber, name y stats.spDefense.
// db.pokemons.find({}, {"_id": 0, "name": 1, "stats.specialDefense": 1 }).sort({"stats.specialDefense": -1}).limit(5)
// db.pokemons.aggregate([
//     {
//         $sort: {
//             "stats.specialDefense": -1
//         }
//     },
//     {
//         $project: {
//             "_id": 0,
//             "nombre": "$name",
//             "defensa_especial": "$stats.specialDefense",
//         }
//     },
//     {
//         $limit: 5
//     }
// ])


// 22. Muestra todos los Pokémon que sean legendarios y que tengan más de un tipo. Muestra name, types e isLegendary.
// db.pokemons.find({
//     "isLegendary": true,
//     "types.1": {$exists: true},
// },{
//     "_id": 0,
//     "name": 1,
//     "types": 1,
//     "isLegendary": 1,
// })


// 23. Calcula el total de Pokémon por generación y tipo (combinación generación + tipo). Muestra generación, tipo y cantidad.
// db.pokemons.aggregate([
//     {
//         $addFields: {
//             "tipo_principal": { "$arrayElemAt": ["$types", 0] }
//         }
//     },
//     {
//         $group: {
//             "_id": { "generation": "$generation", "type": "$tipo_principal" },
//             "num_pkmn": { $sum: 1 }
//         }
//     },
//     {
//         $sort: {
//             num_pkmn: -1
//         }
//     }
// ])


// 24. Encuentra los Pokémon cuyo peso esté entre 30 y 60 (inclusive) y que tengan velocidad menor a 70. Muestra name, weight y stats.speed.
// db.pokemons.find({
//     $and: [
//         { "weight": { $gte: 30 } },
//         { "weight": { $lte: 60 } },
//     ],
//     "stats.speed": {$lt: 70}
// },{"_id": 0, "name": 1, "weight": 1, "stats.speed": 1})
// db.pokemons.aggregate([
//     {
//         $match: {
//             "weight": { $gte: 30 },
//             "weight": { $lte: 60 },
//             "stats.speed": { $lt: 70 },
//         }
//     },
//     {
//         $project: {
//             "_id": 0,
//             "name": 1,
//             "weight": 1,
//             "speed": "$stats.speed",
//         }
//     }
// ])


// 25. Muestra el Pokémon con menor ataque de cada generación. Resultado: generación, name y stats.attack.
// db.pokemons.aggregate([
//     {
//         $sort: {
//             "stats.attack": 1
//         }
//     },{
//         $group: {
//             _id: "$generation",
//             nombre: {$first: "$name"},
//             ataque: {$first: "$stats.attack"}
//         }
//     },{
//         $sort: {
//             ataque: 1
//         }
//     }
// ])


// 26. Calcula el promedio de altura (height) por tipo principal (primer elemento de types). Ordena de mayor a menor.
// db.pokemons.aggregate([
//     {
//         $addFields: {
//             "tipo_principal": { "$arrayElemAt": ["$types", 0] }
//         }
//     }, {
//         $group: {
//             "_id": "$tipo_principal",
//             "avg_height": { $avg: "$height" },
//         }
//     }, {
//         $project: {
//             "_id": 0,
//             "type": "$_id",
//             "avg_height": { $round: ["$avg_height", 2] },
//         }
//     }, {
//         $sort: { "avg_height": -1 }
//     }
// ])


// 27. Encuentra los Pokémon que tengan exactamente 3 habilidades. Muestra name y número de habilidades.
// db.pokemons.aggregate([
//     {
//         $match: {
//             "abilities": { $size: 3 }
//         }
//     },
//     {
//         $project: {
//             "_id": 0,
//             "name": 1,
//             "num_abilities": { $size: "$abilities" },
//         }
//     }
// ])


// 28. Muestra los tipos de Pokémon que tengan al menos un Pokémon legendario. Resultado: tipo y cantidad de legendarios.
// db.pokemons.aggregate([
//     {
//         $unwind: "$types"
//     },
//     {
//         $match: {
//             "isLegendary": true,
//         }
//     },
//     {
//         $group: {
//             "_id": "$types",
//             "cont_legendarios": { $sum: 1 }
//         }
//     },
//     {
//         $sort: { "cont_legendarios": -1 }
//     }
// ])


// 29. Encuentra el Pokémon más ligero de cada tipo. Muestra tipo, name y weight.
// db.pokemons.aggregate([
//     {
//         $unwind: "$types"
//     },
//     {
//         $sort: {
//             "weight": 1
//         }
//     },
//     {
//         $group: {
//             "_id": "$types",
//             "ligero_nombre": { $first: "$name"},
//             "ligero_peso": { $first: "$weight" },
//         }
//     },
//     {
//         $project: {
//             "ligero_peso": { $round: [ "$ligero_peso", 2 ] },
//             "ligero_nombre": 1,
//         }
//     },
//     {
//         $sort: { "ligero_peso": 1 }
//     }
// ])


// 30. Calcula cuántos Pokémon tienen ataque mayor que defensa (stats.attack > stats.defense). Muestra solo el total.
// db.pokemons.aggregate([
//     {
//         $match: {
//             $expr: { $gt: ["$stats.attack", "$stats.defense"] }
//         }
//     },
//     {
//         $group: {
//             _id: "Pokémon con más ataque que defensa",
//             total: { $sum: 1 }
//         }
//     }
// ])


// 31. Muestra los Pokémon cuya suma total de stats (hp + attack + defense + spAttack + spDefense + speed) sea mayor a 500. Muestra name y total.


// 32. Agrupa los Pokémon por número de tipos (1 o 2) y calcula el promedio de velocidad de cada grupo.


// 33. Encuentra los Pokémon que compartan al menos un tipo con un Pokémon legendario (sin ser legendarios). Muestra name y types.


// 34. Muestra los 3 Pokémon con más habilidades ocultas (hidden: true). Muestra name y cantidad de habilidades ocultas.


// 35. Calcula el promedio de peso por generación, pero solo para Pokémon que tengan velocidad mayor a 80.


// 36. Encuentra los Pokémon cuya altura sea mayor que el promedio de altura de su generación. Muestra name, generation y height.


// 37. Usando un cursor, muestra todos los Pokémon cuyo nombre empiece por vocal. Formato: Name: XXXX.


// 38. Usando un cursor, calcula cuántos Pokémon tienen más movimientos que el promedio de movimientos del total de Pokémon.


// 39. Usando un cursor, encuentra el Pokémon con el mayor ratio ataque / defensa. Muestra name y el valor del ratio con 2 decimales.


// 40. Usando un cursor, cuenta cuántos Pokémon hay por generación y muestra el resultado ordenado por generación ascendente.
