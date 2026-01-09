use('Astronomia')
// db.objetos_espaciales.insertMany([
//     {
//         "nombre": "Marte",
//         "tipo": "Planeta",
//         "distancia_tierra_km": 225000000,
//         "masa_indice": 0.107,
//         "caracteristicas": ["Rocoso", "Oxido de hierro", "Polvoriento"],
//         "descubierto": "Antiguedad",
//         "temperatura_media": -63,
//         "misiones_exitosas": 15
//     },
//     {
//         "nombre": "Jupiter",
//         "tipo": "Planeta",
//         "distancia_tierra_km": 778000000,
//         "masa_indice": 317.8,
//         "caracteristicas": ["Gigante gaseoso", "Anillos tenues", "Gran Mancha Roja"],
//         "descubierto": "Antiguedad",
//         "lunas_principales": ["Io", "Europa", "Ganimedes", "Calisto"],
//         "misiones_exitosas": 9
//     },
//     {
//         "nombre": "ISS (Estacion Espacial Internacional)",
//         "tipo": "Satelite Artificial",
//         "distancia_tierra_km": 408,
//         "masa_indice": 0.00000000042,
//         "caracteristicas": ["Habitable", "Laboratorio", "Cooperacion internacional"],
//         "lanzamiento": 1998,
//         "tripulacion_actual": 7,
//         "estado": "Activo"
//     },
//     {
//         "nombre": "Sol",
//         "tipo": "Estrella",
//         "distancia_tierra_km": 149600000,
//         "masa_indice": 333000,
//         "caracteristicas": ["Enana amarilla", "Plasma", "Fusion nuclear"],
//         "temperatura_superficie": 5500,
//         "sistema": "Sistema Solar"
//     },
//     {
//         "nombre": "Voyager 1",
//         "tipo": "Sonda Espacial",
//         "distancia_tierra_km": 24000000000,
//         "masa_indice": 0.00000000072,
//         "caracteristicas": ["Interestelar", "Disco de Oro", "Antigua"],
//         "lanzamiento": 1977,
//         "estado": "Activo",
//         "misiones_exitosas": 1
//     },
//     {
//         "nombre": "Halley",
//         "tipo": "Cometa",
//         "distancia_tierra_km": 5000000000,
//         "periodo_orbital_anios": 75,
//         "caracteristicas": ["Hielo", "Cola visible", "Periodico"],
//         "ultimo_avistamiento": 1986
//     },
//     {
//         "nombre": "Saturno",
//         "tipo": "Planeta",
//         "distancia_tierra_km": 1400000000,
//         "masa_indice": 95.2,
//         "caracteristicas": ["Gigante gaseoso", "Anillos visibles", "Vientos rapidos"],
//         "lunas_conocidas": 82
//     },
//     {
//         "nombre": "Sputnik 1",
//         "tipo": "Satelite Artificial",
//         "distancia_tierra_km": 0, 
//         "caracteristicas": ["Primer satelite", "Sovietico", "Metal pulido"],
//         "lanzamiento": 1957,
//         "estado": "Destruido"
//     },
//     {
//         "nombre": "Hubble",
//         "tipo": "Telescopio Espacial",
//         "distancia_tierra_km": 547,
//         "caracteristicas": ["Fotografia profunda", "Orbita baja", "Espejo primario"],
//         "lanzamiento": 1990,
//         "reparaciones": 5
//     },
//     {
//         "nombre": "Proxima Centauri",
//         "tipo": "Estrella",
//         "distancia_tierra_km": 40208000000000,
//         "masa_indice": 40000,
//         "caracteristicas": ["Enana roja", "Vecina", "Fulgurante"],
//         "sistema": "Alpha Centauri"
//     }
// ]);

// 1. Busca planetas
// db.objetos_espaciales.find({tipo: "Planeta"})

// 2. Busca objetos a menos de 100.000.000km de la Tierra
// db.objetos_espaciales.find({distancia_tierra_km: {$lt: 100000000}})

// 3. Características posee: gigante gaseoso o habitable
// db.objetos_espaciales.find({
//     caracteristicas: {$in: ["Gigante gaseoso", "Habitable"]}
// })

// 4. Tipo planeta con masa índice mayor a 50
// db.objetos_espaciales.find({
//     tipo: "Planeta",
//     masa_indice: {$gt: 50}
// })

// 5. Los tres más lejanos (de más a menos)
//db.objetos_espaciales.find().sort({distancia_tierra_km: -1}).limit(3)

// 6. Orden alfabético. Salta los dos primeros y muestra solo tres depués.
// db.objetos_espaciales.find().sort({nombre: 1}).skip(2).limit(3)

// 7. Actualizar estado de Hubble a -> "En mantenimiento"
// db.objetos_espaciales.updateOne(
//     { nombre: "Hubble" },
//     { $set: { estado: "En mantenimiento" } }
// )
// db.objetos_espaciales.find({nombre: "Hubble"})

// 8. Agregar característica a Marte -> "Agua subterránea"
// db.objetos_espaciales.updateOne(
//     {nombre: "Marte"},
//     {$push: {caracteristicas: "Agua subterránea"}}
// )
// db.objetos_espaciales.find({nombre: "Marte"})

// 9. Incrementar misiones exitosas de Voyager 1
// db.objetos_espaciales.updateOne(
//     {nombre: "Voyager 1"},
//     {$inc: {misiones_exitosas: 1}}
// )
// db.objetos_espaciales.find({nombre: "Voyager 1"})

// 10. Eliminar Sputnik 1
// db.objetos_espaciales.deleteOne({nombre: "Sputnik 1"})

// 11. Encuentra nombres que empiecen por la S
// db.objetos_espaciales.find({nombre: {$regex: "^S"}})

// 12. Encuentra documentos con los campos "lunas_principales" o "lunas_conocidas"
// db.objetos_espaciales.find({
//     $or: [
//         {lunas_principales: {$exists: true}},
//         {lunas_conocidas: {$exists: true}}
//     ]
// })

// 13. Satélites o sondas lanzados entre 1950 y 1980
// db.objetos_espaciales.find({
//     tipo: {$in: ["Satélite Artificial", "Sonda Espacial"]},
//     lanzamiento: {$gte: 1950, $lte: 1980}
// })

// 14. Encontrar cuerpos que no sean planetas
// db.objetos_espaciales.find({tipo: {$ne: "Planeta"}})

// 15. Encontrar estrellas o cometas (tipo)
// db.objetos_espaciales.find(
//     {tipo: {$in: ["Estrella", "Cometa"]}}
// )

// 16. Planeta con exactamente 4 lunas
// db.objetos_espaciales.find({
//     tipo: "Planeta",
//     lunas_principales: {$size: 4}
// })

// 17. Eliminar el campo "descubierto: " de Jupiter
// db.objetos_espaciales.updateOne(
//     {nombre: "Jupiter"},
//     {$unset: {descubierto: ""}}
// )

// 18. Quitar "Polvoriento" como característica de Marte
// db.objetos_espaciales.updateOne(
//     {nombre: "Marte"},
//     {$pull: {caracteristicas: "Polvoriento"}}
// )

// 19. Renombrar campo masa_indice -> masa_relativa
// db.objetos_espaciales.updateMany(
//     {masa_indice: {$exists: true}},
//     {$rename: {"masa_indice" : "masa_relativa"}}
// )


// 20. Ordenar en ASC y DESC
// db.objetos_espaciales.find().sort({
//     tipo: 1,
//     distancia_tierra_km: -1
// })