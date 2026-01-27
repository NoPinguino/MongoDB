use("Vehículos")
// db.createCollection("coches")
// db.coches.insertMany([
//     { marca: "Toyota", modelo: "Corolla", año: 2018, kmRecorridos: 45000, tipo: "Sedán", extras: ["Aire acondicionado", "Bluetooth", "ABS"] },
//     { marca: "Honda", modelo: "Civic", año: 2020, kmRecorridos: 30000, tipo: "Sedán", extras: ["Aire acondicionado", "Cámara trasera"] },
//     { marca: "Ford", modelo: "Mustang", año: 2016, kmRecorridos: 60000, tipo: "Deportivo", extras: ["ABS", "Control de tracción"] },
//     { marca: "Chevrolet", modelo: "Camaro", año: 2019, kmRecorridos: 25000, tipo: "Deportivo", extras: ["Bluetooth", "Cámara trasera"] },
//     { marca: "BMW", modelo: "X5", año: 2021, kmRecorridos: 15000, tipo: "SUV", extras: ["Aire acondicionado", "GPS", "Control de crucero"] },
//     { marca: "Audi", modelo: "Q7", año: 2018, kmRecorridos: 40000, tipo: "SUV", extras: ["Bluetooth", "ABS", "GPS"] },
//     { marca: "Mercedes", modelo: "C-Class", año: 2017, kmRecorridos: 50000, tipo: "Sedán", extras: ["Aire acondicionado", "Bluetooth", "Control de crucero"] },
//     { marca: "Volkswagen", modelo: "Golf", año: 2020, kmRecorridos: 20000, tipo: "Hatchback", extras: ["ABS", "Bluetooth"] },
//     { marca: "Nissan", modelo: "Leaf", año: 2021, kmRecorridos: 10000, tipo: "Eléctrico", extras: ["GPS", "Aire acondicionado"] },
//     { marca: "Tesla", modelo: "Model 3", año: 2021, kmRecorridos: 8000, tipo: "Eléctrico", extras: ["Autopilot", "GPS", "Bluetooth"] },
//     { marca: "Kia", modelo: "Sportage", año: 2019, kmRecorridos: 35000, tipo: "SUV", extras: ["ABS", "Bluetooth"] },
//     { marca: "Hyundai", modelo: "Tucson", año: 2018, kmRecorridos: 42000, tipo: "SUV", extras: ["Aire acondicionado", "GPS"] },
//     { marca: "Mazda", modelo: "CX-5", año: 2020, kmRecorridos: 27000, tipo: "SUV", extras: ["Bluetooth", "Control de crucero"] },
//     { marca: "Renault", modelo: "Clio", año: 2017, kmRecorridos: 48000, tipo: "Hatchback", extras: ["Aire acondicionado", "ABS"] },
//     { marca: "Peugeot", modelo: "208", año: 2019, kmRecorridos: 22000, tipo: "Hatchback", extras: ["Bluetooth", "GPS"] },
//     { marca: "Fiat", modelo: "500", año: 2016, kmRecorridos: 55000, tipo: "Hatchback", extras: ["Aire acondicionado"] },
//     { marca: "Jeep", modelo: "Wrangler", año: 2020, kmRecorridos: 30000, tipo: "SUV", extras: ["ABS", "Control de tracción"] },
//     { marca: "Subaru", modelo: "Impreza", año: 2018, kmRecorridos: 40000, tipo: "Sedán", extras: ["Aire acondicionado", "Bluetooth"] },
//     { marca: "Toyota", modelo: "RAV4", año: 2021, kmRecorridos: 12000, tipo: "SUV", extras: ["GPS", "Aire acondicionado", "ABS"] },
//     { marca: "Honda", modelo: "Fit", año: 2019, kmRecorridos: 25000, tipo: "Hatchback", extras: ["Bluetooth", "Aire acondicionado"] }
// ])


// Encuentra todos los coches tipo SUV.
// db.coches.find({tipo: "SUV"})


// Encuentra todos los coches con kmRecorridos mayor a 40000.
// db.coches.find({kmRecorridos: {$gt: 40000}})


// Encuentra todos los coches que tengan “GPS” o “Autopilot” en su array de extras.
// db.coches.find({
//     extras: {$in: ["GPS","Autopilot"]}
// })
// db.coches.find({
//     $or: [
//         {extras: "GPS"},
//         {extras: "Autopilot"}
//     ]
// })


// Encuentra todos los coches eléctricos con menos de 20000 km.
// db.coches.find({
//     tipo: "Eléctrico",
//     kmRecorridos: {$lt: 20000}
// })


// Muestra los 5 coches con más kmRecorridos.
// db.coches.find({}).sort({kmRecorridos: -1}).limit(5)


// Ordena alfabéticamente por marca y modelo, y muestra los 3 últimos.
// db.coches.find({}).sort({ marca: -1, modelo: -1 }).limit(3)


// Incrementa en 5000 km los coches marca Toyota.
// db.coches.updateMany(
//     {marca: "Toyota"},
//     {$inc: {kmRecorridos: 5000}}
// )


// Agrega “Sensor de aparcamiento” a los coches tipo Hatchback.
// db.coches.updateMany(
//     {tipo: "Hatchback"},
//     {$push: {extras: "Sensor de aparcamiento"}}
// )
// db.coches.find({tipo: "Hatchback"})


// Cambia el kmRecorridos del Tesla Model 3 a 10000.
// db.coches.updateOne(
//     {marca: "Tesla", modelo: "Model 3"},
//     {$set: {kmRecorridos: 10000}}
// )
// db.coches.find({marca: "Tesla", modelo: "Model 3"})


// Elimina todos los coches con kmRecorridos mayores a 60000.
// db.coches.deleteMany({kmRecorridos: {$gt: 60000}})


// Encuentra todos los coches que tengan el campo extras registrado.
// db.coches.find({
//     extras: {$exists: true}
// })


// Encuentra todos los coches tipo Sedán con menos de 50000 km.
// db.coches.find({
//     tipo: "Sedán",
//     kmRecorridos: {$lt: 50000}
// })


// Elimina el campo año del Chevrolet Camaro.
// db.coches.updateOne(
//     {
//         marca: "Chevrolet",
//         modelo: "Camaro"
//     },
//     {
//         $unset: {año: ""}
//     }
// )
// db.coches.findOne({marca: "Chevrolet",modelo: "Camaro"})


// Elimina “Bluetooth” de los extras de todos los coches marca Honda.
// db.coches.updateMany(
//     {marca: "Honda"},
//     {$pull: {extras: "Bluetooth"}}
// )
// db.coches.find({marca: "Honda"})


// Encuentra coches con exactamente 3 extras.
// db.coches.find({
//     extras: {$size: 3}
// })


// Ordena todos los coches primero por tipo y luego por kmRecorridos descendente.
// db.coches.find({}).sort({tipo: 1, kmRecorridos: -1})


// Encuentra todos los coches tipo SUV con “ABS” como extra.
// db.coches.find({
//     tipo: "SUV",
//     extras: "ABS"
// })


// Agrega “Control de crucero” a todos los coches tipo Sedán.
// db.coches.updateMany(
//     {tipo: "Sedán"},
//     {$push: {extras: "Control de crucero"}}
// )
// db.coches.find({tipo: "Sedán"})


// Encuentra todos los coches con kmRecorridos entre 20000 y 40000 y que tengan “ABS” como extra.
// db.coches.find({
//     kmRecorridos: {
//         $gt: 20000,
//         $lt: 40000, 
//     },
//     extras: "ABS"
// })


// Borra todos los coches con menos de 15000 km.
// db.coches.deleteMany({
//     kmRecorridos: {$lt: 15000}
// })


// EJERCICIOS EXTRA (DIFICULTAD EXÁMEN)


// 1. Encuentra los coches con kmRecorridos entre 25000 y 45000 (incluidos).
// db.coches.find({
//     kmRecorridos: {
//         $gte: 25000,
//         $lte: 45000
//     }
// })


// 2. Encuentra los coches tipo SUV con menos de 40000 km y con "GPS" como extra.
// db.coches.find({
//     tipo: "SUV",
//     extras: "GPS"
// })


// 3. Muestra los 4 coches con menos kmRecorridos, ordenados correctamente.
// db.coches.find({}).sort({kmRecorridos: 1}).limit(4)


// 4. Ordena por marca ascendente y kmRecorridos descendente, muestra los 5 primeros.
// db.coches.find({}).sort({marca: 1, kmRecorridos: -1}).limit(5)


// 5. Incrementa en 3000 km los coches tipo Hatchback con más de 20000 km.
// db.coches.updateMany(
//     {tipo: "Hatchback", kmRecorridos: {$gt: 20000}},
//     {$inc: {kmRecorridos: 3000}}
// )


// 6. Añade "Sensor de lluvia" a los SUV que no lo tengan ya.
// db.coches.updateMany(
//     {
//         tipo: "SUV",
//         extras: {$nin: ["Sensor de lluvia"]}
//     },
//     {
//         $push: {extras: "Sensor de lluvia"}
//     }
// )


// 7. Elimina "Bluetooth" de los coches con más de 40000 km.
// db.coches.updateMany(
//     {kmRecorridos: {$gt: 40000}},
//     {$pull: {extras: "Bluetooth"}}
// )

// 8. Encuentra los coches con exactamente 2 extras.
// db.coches.find({
//     extras: {$size: 2}
// })


// 9. Elimina un coche tipo Deportivo con más de 55000 km.
// db.coches.deleteOne({
//     tipo: "Deportivo",
//     kmRecorridos: {$gt: 55000}
// })


// 10. Encuentra los coches con kmRecorridos entre 20000 y 40000 y con "ABS" o "Control de tracción".
// db.coches.find({
//     kmRecorridos: {$gt: 20000, $lt: 40000},
//     extras: {$in: ["ABS","Control de tracción"]}
// })