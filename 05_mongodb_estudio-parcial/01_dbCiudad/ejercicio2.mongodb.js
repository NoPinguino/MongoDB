use("CiudadDB")
// db.lugares.drop()
// db.createCollection("lugares")
// db.lugares.insertMany([
//     { nombre: "Teatro Central", tipo: "Teatro", areaM2: 1200, visitantesDiarios: 80, actividades: ["Obras de teatro", "Ensayos", "Conciertos"] },
//     { nombre: "Plaza Mayor", tipo: "Plaza", areaM2: 4500, visitantesDiarios: 300, actividades: ["Mercados", "Conciertos", "Exposiciones"] },
//     { nombre: "Cine Urbano", tipo: "Cine", areaM2: 800, visitantesDiarios: 120, actividades: ["Proyecciones", "Talleres de cine"] },
//     { nombre: "Parque Norte", tipo: "Parque", areaM2: 6000, visitantesDiarios: 220, actividades: ["Correr", "Yoga", "Picnic"] },
//     { nombre: "Biblioteca Central", tipo: "Biblioteca", areaM2: 2000, visitantesDiarios: 150, actividades: ["Leer", "Estudiar", "Talleres literarios"] },
//     { nombre: "Estadio Olímpico", tipo: "Estadio", areaM2: 15000, visitantesDiarios: 500, actividades: ["Fútbol", "Conciertos", "Eventos deportivos"] },
//     { nombre: "Museo Histórico", tipo: "Museo", areaM2: 3500, visitantesDiarios: 100, actividades: ["Exposiciones", "Talleres", "Visitas guiadas"] },
//     { nombre: "Café Cultural", tipo: "Café", areaM2: 150, visitantesDiarios: 60, actividades: ["Lectura", "Reuniones", "Tertulias"] },
//     { nombre: "Galería Modernista", tipo: "Galería", areaM2: 1200, visitantesDiarios: 90, actividades: ["Exposiciones", "Talleres", "Visitas guiadas"] },
//     { nombre: "Auditorio del Lago", tipo: "Auditorio", areaM2: 2500, visitantesDiarios: 200, actividades: ["Conciertos", "Eventos culturales"] },
//     { nombre: "Parque Sur", tipo: "Parque", areaM2: 4800, visitantesDiarios: 180, actividades: ["Ciclismo", "Yoga", "Picnic"] },
//     { nombre: "Teatro Juvenil", tipo: "Teatro", areaM2: 900, visitantesDiarios: 70, actividades: ["Obras de teatro", "Talleres de actuación"] },
//     { nombre: "Cine Retro", tipo: "Cine", areaM2: 700, visitantesDiarios: 60, actividades: ["Proyecciones clásicas", "Talleres de cine"] },
//     { nombre: "Café del Mercado", tipo: "Café", areaM2: 120, visitantesDiarios: 40, actividades: ["Lectura", "Reuniones"] },
//     { nombre: "Museo de Ciencias", tipo: "Museo", areaM2: 4000, visitantesDiarios: 130, actividades: ["Exposiciones", "Talleres", "Conferencias"] },
//     { nombre: "Auditorio Central", tipo: "Auditorio", areaM2: 3000, visitantesDiarios: 250, actividades: ["Conciertos", "Teatro", "Eventos culturales"] },
//     { nombre: "Plaza de la Cultura", tipo: "Plaza", areaM2: 3200, visitantesDiarios: 210, actividades: ["Ferias", "Exposiciones", "Conciertos"] },
//     { nombre: "Galería del Arte", tipo: "Galería", areaM2: 1100, visitantesDiarios: 80, actividades: ["Exposiciones", "Talleres", "Visitas guiadas"] },
//     { nombre: "Parque Este", tipo: "Parque", areaM2: 5300, visitantesDiarios: 190, actividades: ["Correr", "Yoga", "Picnic"] },
//     { nombre: "Café Literario", tipo: "Café", areaM2: 100, visitantesDiarios: 50, actividades: ["Lectura", "Tertulias", "Reuniones"] }
// ])
// db.lugares.find({})

// 1 - ENCUENTRA LOS PARQUES
// db.lugares.find({
//     tipo: "Parque"
// })

// 2 - ENCUENTRA LUGARES CON AREA MAYOR A 3000
// db.lugares.find({
//     areaM2: {$gt: 3000}
// })

// 3 - ENCUENTRA LUGARES CON LAS ACTIVIDADES TALLERES O YOGA
// db.lugares.find({
//     $or: [
//         {actividades: "Talleres"},
//         {actividades: "Yoga"}
//     ]
// })
// db.lugares.find({
//     actividades: {$in: ["Talleres","Yoga"]}
// })

// 4 - ENCUENTRA LUGARES TIPO MUSEO CON MÁS DE 100 VISITANTES DIARIOS
// db.lugares.find({
//     $and: [
//         {tipo: "Museo"},
//         {visitantesDiarios: {$gt: 100}}
//     ]
// })

// 5 - MUESTRA LOS 3 LUGARES CON MÁS VISITANTES DIARIOS
// db.lugares.find({}).sort({visitantesDiarios: -1}).limit(3)

// 6 - ORDENA ALFABÉTICAMENTE, OMITE LOS PRIMEOS CINCO Y MUESTRA LOS TRES SIGUIENTES
// db.lugares.find({}).sort({nombre: 1}).skip(5).limit(3)

// 7 - ACTUALIZA CAFÉ CULTURAL PARA QUE TENGA 100 VISITANTES DIARIOS
// db.lugares.updateOne(
//     {nombre: "Café Cultural"},
//     {$set: {visitantesDiarios: 100}}
// )
// db.lugares.findOne({nombre: "Café Cultural"})

// 8 - AGREGA MÚSICA EN VIVO A LA LISTA DE ACTIVIDADES DE ESTADIO OLIMPICO
// db.lugares.updateOne(
//     {nombre: "Estadio Olímpico"},
//     {$push: {actividades: "Música en vivo"}}
// )
// db.lugares.findOne({nombre: "Estadio Olímpico"})

// 9 - ACTUALIZA VISITANTES DIARIOS DEL PARQUE NORTE A 15
// db.lugares.updateOne(
//     {nombre: "Parque Norte"},
//     {$set: {visitantesDiarios: 15}}
// )
// db.lugares.findOne({nombre: "Parque Norte"})

// 10 - ELIMINA MUSEO HISTÓRICO
// db.lugares.deleteOne({nombre: "Museo Histórico"})

// 11 - ENCUENTRA TODOS LOS LUGARES CON ACTIVIDADES REGISTRADAS
// db.lugares.find(
//     {actividades: {$exists: true}}
// )

// 12 - ENCUENTRA TODOS LOS LUGARES CON UN AREA MENOR A 2000 QUE NO SEAN CAFÉS
// db.lugares.find({
//     $and: [
//         {areaM2: {$lt: 2000}},
//         {tipo: {$ne: "Café"}}
//     ]
// })

// 13 - ELIMINA EL CAMPO AREAM2 DE ESTADIO OLIMPICO
// db.lugares.updateOne(
//     {nombre: "Estadio Olímpico"},
//     {$unset: {areaM2: ""}}
// )
// db.lugares.findOne({nombre: "Estadio Olímpico"})

// 14 - ELIMINA YOGA DE LAS ACTIVIDADES DEL PARQUE NORTE
// db.lugares.updateOne(
//     {nombre: "Parque Norte"},
//     {$pull: {actividades: "Yoga"}}
// )
// db.lugares.findOne({nombre: "Parque Norte"})

// 15 - ENCUENTRA LOS LUGARES TIPO AUDITORIO CON MÁS DE 200 VISITANTES DIARIOS
// db.lugares.find({
//     $and: [
//         {tipo: "Auditorio"},
//         {visitantesDiarios: {$gt: 200}}
//     ]
// })

// 16 - ENCUENTRA LOS LUGARES CON EXACTAMENTE TRES ACTIVIDADES
// db.lugares.find({
//     actividades: {$size: 3}
// })

// 17 - ORDENA LOS LUGARES PRIMERO ALFABÉTICAMENTE Y LUEGO POR VISITANTES DIARIOS (DESCENDENTE)
// db.lugares.find({}).sort({nombre: 1, visitantesDiarios: -1})

// 18 - ENCUENTRA LOS LUGARES CON MÁS DE 1000M2 QUE TENGAN CONCIERTOS COMO ACTIVIDAD
// db.lugares.find({
//     $and: [
//         {areaM2: {$gt: 1000}},
//         {actividades: "Conciertos"}
//     ]
// })

// 19 - AÑADE LA ACTIVIDAD 'CAFÉ LITERARIO' EN TODOS LOS CAFÉS
// db.lugares.updateMany(
//     {tipo: "Café"},
//     {$push: {actividades: "Café literario"}}
// )
// db.lugares.find({tipo: "Café"})

// 20 - BORRA TODOS LOS LUGARES CON MENOS DE 100 VISITANTES DIARIOS:
// db.lugares.deleteMany({visitantesDiarios: {$lt: 100}})
// db.lugares.find({visitantesDiarios: {$lt: 100}})