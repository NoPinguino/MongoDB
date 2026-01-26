use('CiudadDB')
// db.createCollection('habitantes')
// db.habitantes.insertMany([
//     { "nombre": "Ana López", "edad": 28, "profesion": "Panadera", "viveEnCentro": true, "poder": 0 },
//     { "nombre": "Carlos Méndez", "edad": 35, "profesion": "Bombero", "viveEnCentro": false, "poder": 5 },
//     { "nombre": "Lucía Ramírez", "edad": 22, "profesion": "Artista", "viveEnCentro": true, "poder": 2 },
//     { "nombre": "Jorge Torres", "edad": 40, "profesion": "Profesor", "viveEnCentro": false, "poder": 0 },
//     { "nombre": "Marta Silva", "edad": 30, "profesion": "Ingeniera", "viveEnCentro": true, "poder": 3 },
// ])
// db.habitantes.find({})


// db.createCollection('visitantes')

// db.habitantes.insertOne({
//     nombre: "Pedro Martínez",
//     edad: 27,
//     profesion: "Músico",
//     viveEnCentro: true,
//     poder: 1,
// })

// db.habitantes.insertMany([
//     {
//         nombre: "Sofía Díaz",
//         edad: 34,
//         profesion: "Abogada",
//         viveEnCentro: false,
//         poder: 0
//     },
//     {
//         nombre: "Andrés Pérez",
//         edad: 29,
//         profesion: "Deportista",
//         viveEnCentro: true,
//         poder: 4,
//     },
// ])

// db.habitantes.find({
//     viveEnCentro: true
// })

// db.habitantes.findOne({
//     poder: {$gt: 2},
// })

// DOS FORMAS DE HACER EL EJERCICIO 6:

// db.habitantes.find({
//     $or: [
//         {profesion: "Profesor"},
//         {profesion: "Ingeniera"},
//     ]
// })

// db.habitantes.find({
//     profesion: {$in: ["Profesor", "Ingeniera"]}
// })

// db.habitantes.find({
//     nombre: "Lucía Ramírez"
// })

// db.habitantes.find({},{
//     _id: 0,
//     edad: 0,
//     viveEnCentro: 0,
//     poder: 0,
// })

// db.habitantes.find({},{
//     poder: 0
// })

// db.habitantes.deleteOne({
//     nombre: "Carlos Méndez"
// })

// db.habitantes.deleteMany({
//     poder: 0
// })

// db.habitantes.deleteMany({})

// LUGARES A PARTIR DE AQUÍ:

// db.createCollection("lugares")
// db.lugares.insertMany([
//     { "nombre": "Parque Central", "tipo": "Parque", "areaM2": 5000, "visitantesDiarios": 200, "actividades": ["Correr", "Yoga", "Picnic"] },
//     { "nombre": "Biblioteca Central", "tipo": "Biblioteca", "areaM2": 2000, "visitantesDiarios": 150, "actividades": ["Leer", "Estudiar", "Talleres"] },
//     { "nombre": "Estadio Municipal", "tipo": "Estadio", "areaM2": 15000, "visitantesDiarios": 500, "actividades": ["Fútbol", "Conciertos"] },
//     { "nombre": "Museo de Arte", "tipo": "Museo", "areaM2": 3000, "visitantesDiarios": 100, "actividades": ["Exposiciones", "Talleres", "Visitas guiadas"] },
//     { "nombre": "Café del Centro", "tipo": "Café", "areaM2": 100, "visitantesDiarios": 80, "actividades": ["Café", "Reuniones", "Lectura"] }
// ])
// db.lugares.find({})

// db.lugares.find({
//     tipo: "Parque"
// })

// db.lugares.find({
//     areaM2: {$gt: 1000}
// })

// db.lugares.find({
//     $or: [
//         {actividades: "Talleres"},
//         {actividades: "Yoga"}
//     ]
// })

// db.lugares.find({
//     actividades: {$in: ["Talleres", "Yoga"]}
// })

// db.lugares.find({
//     $and: [
//         {tipo: "Museo"},
//         {visitantesDiarios: {$gt: 50}}
//     ]
// })

// db.lugares.find({}).sort({visitantesDiarios: -1}).limit(2)

// db.lugares.find({}).sort({nombre: 1}).skip(2).limit(2)

// db.lugares.updateOne({
//     nombre: "Café del Centro" // Primero lo buscas
// },
// {
//     $set: {visitantesDiarios: 100} // Segundo lo modificas
// })

// db.lugares.updateOne({
//     nombre: "Estadio Municipal"
// },
// {
//     $push: {actividades: "Música en vivo"}
// })

// db.lugares.updateOne(
//     {nombre: "Parque Central"},
//     {$inc: {visitantesDiarios: 10}}
// )

// db.lugares.deleteOne({nombre: "Museo de Arte"})

// db.lugares.find(
//     {actividades: {$exists: true}}
// )

// db.lugares.find({
//     $and: [
//         {areaM2: {$lt: 5000}},
//         {tipo: {$ne: "Café"}}
//     ]
// })

// db.lugares.updateOne(
//     { nombre: "Estadio Municipal" },
//     { $unset: { areaM2: "" } }
// )

// db.lugares.updateOne(
//     {nombre: "Parque Central"},
//     {$pull: {actividades: "Yoga"}}
// )

// db.lugares.find({}).sort({nombre: 1, visitantesDiarios: -1})