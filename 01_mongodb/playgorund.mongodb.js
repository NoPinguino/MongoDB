// 1. Crea una colecci ́on nueva llamada armas (simplemente el comando de creaci ́on, sin insertar datos).
use('anime')
// db.createCollection('armas')
// db.createCollection('personajes')

// INSERTS
// db.personajes.insertMany([
//   {
//     "nombre": "Saitama",
//     "anime": "One Punch Man",
//     "poder": 10000,
//     "es_humano": true
//   },
//   {
//     "nombre": "Son Goku",
//     "anime": "Dragon Ball",
//     "poder": 9000,
//     "es_humano": false
//   },
//   {
//     "nombre": "Satoru Gojo",
//     "anime": "Jujutsu Kaisen",
//     "poder": 8500,
//     "es_humano": true
//   },
//   {
//     "nombre": "Naruto Uzumaki",
//     "anime": "Naruto",
//     "poder": 7000,
//     "es_humano": true
//   },
//   {
//     "nombre": "Edward Elric",
//     "anime": "Fullmetal Alchemist",
//     "poder": 4500,
//     "es_humano": true
//   },
//   {
//     "nombre": "Meliodas",
//     "anime": "Seven Deadly Sins",
//     "poder": 8600,
//     "es_humano": false
//   },
//   {
//     "nombre": "Eren Jaeger",
//     "anime": "Attack on Titan",
//     "poder": 5000,
//     "es_humano": true
//   },
//   {
//     "nombre": "Vegeta",
//     "anime": "Dragon Ball",
//     "poder": 8800,
//     "es_humano": false
//   },
//   {
//     "nombre": "Alucard",
//     "anime": "Hellsing",
//     "poder": 8200,
//     "es_humano": false
//   }
// ]);

// 2. Inserta un  ́unico personaje nuevo: “Tanjiro Kamado” del anime “Demon Slayer”, con poder 4000 y campo es humano: true.
// db.personajes.insertOne({
//     nombre: "Tanjiro Kamado",
//     anime: "Demon Slayer",
//     poder: 4000,
//     es_humano: true,
// })

// 3. Inserta estos dos personajes a la vez: “Freezer” (Dragon Ball, poder 8000, humano false) y “Sasuke Uchiha” (Naruto, poder 6900, humano true).
// db.personajes.insertMany([
//     {
//         nombre: "Freezer",
//         anime: "Dragon Ball",
//         poder: 8000,
//         es_humano: false,
//     },
//     {
//         nombre: "Sasuke Uchiha",
//         anime: "Naruto",
//         poder: 6900,
//         es_humano: true,
//     }
// ])

// 4. Muestra todos los personajes de la colecci ́on para verificar los datos.
// db.personajes.find({})

// 5. Muestra solo un personaje (el primero que encuentre la base de datos).
// db.personajes.findOne({})

// 6. Busca todos los personajes que pertenezcan al anime “Dragon Ball”.
// db.personajes.find({anime: "Dragon Ball"})

// 7. Busca el documento específico donde el nombre sea exactamente “Eren Jaeger”.
// db.personajes.findOne({nombre: "Eren Jaeger"})

// 8. Muestra todos los personajes, pero proyectando (visualizando) solo los campos nombre y poder (recuerda que el id aparecer ́a por defecto).
// db.personajes.find({},{nombre:1,poder:1})

// 9. Muestra todos los personajes, visualizando nombre y anime, pero ocultando explícitamente el id.
// db.personajes.find({},{_id:0,nombre:1,anime:1})

// 10. Muestra todos los datos de los personajes, excepto el campo es humano (que debe permanecer oculto).
// db.personajes.find({}, {es_humano:0})

// 11. Busca los personajes del anime “Naruto” y muestra solamente su nombre, asegur ́andote de ocultar el id.
// db.personajes.find({anime:"Naruto"},{_id:0,nombre:1})

// 12. Borra un único documento: aquel cuyo nombre sea “Edward Elric”.
// db.personajes.deleteOne({nombre: "Edward Elric"})
//
// RESULTADO:
// {
//   "acknowledged": true,
//   "deletedCount": 1
// }

// 13. Borra todos los personajes que pertenezcan al anime “Dragon Ball”.
// db.personajes.deleteMany({anime:"Dragon Ball"})
//
// RESULTADO:
// {
//   "acknowledged": true,
//   "deletedCount": 3
// }

// 14. Borra todos los personajes que tengan exactamente un poder de 5000.
// db.personajes.deleteMany({poder: 5000})
//
// RESULTADO:
// {
//   "acknowledged": true,
//   "deletedCount": 1
// }

// 15. Borra todos los documentos restantes para dejar la colección vacía.
// db.personajes.deleteMany({})
//
// RESULTADOS
// {
//   "acknowledged": true,
//   "deletedCount": 7
// }

// db.getMongo().getDBs()
// db.getCollectionNames()