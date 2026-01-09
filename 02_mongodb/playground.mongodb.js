use('Biblioteca2')
// db.createCollection("libros")   
// db.libros.insertMany([
// {
// "titulo": "El Señor de los Anillos",
// "precio": 45,
// "cantidad": 50,
// "editorial": "Planeta"
// },
// {
// "titulo": "Cien años de soledad",
// "precio": 30,
// "cantidad": 100,
// "editorial": "Sudamericana"
// },
// {
// "titulo": "Aprende MongoDB",
// "precio": 55,
// "cantidad": 10,
// "editorial": "O'Reilly"
// },
// {
// "titulo": "La Sombra del Viento",
// "precio": 20,
// "cantidad": 50,
// "editorial": "Planeta"
// },
// {
// "titulo": "El Principito",
// "precio": 15,
// "cantidad": 200,
// "editorial": "Salamandra"
// },
// {
// "titulo": "Clean Code",
// "precio": 42,
// "cantidad": 5,
// "editorial": "Anaya"
// },
// {
// "titulo": "Don Quijote",
// "precio": 40,
// "cantidad": 49,
// "editorial": "Planeta"
// },
// {
// "titulo": "Harry Potter",
// "precio": 25,
// "cantidad": 60,
// "editorial": "Salamandra"
// }
// ]);
// db.libros.find({})

// 1. $GT
// db.libros.find({precio: {$gt:40} })

// 2. &GTE
// db.libros.find({precio: {$gte: 50}})

// 3. $NOT
// db.libros.find({cantidad: {$not: 50}})

// 4. ENTRE DOS VALORES
// db.libros.find({precio: {$gt: 20, $lt: 45}})

// 5. EDITORIAL $eq PLANETA
// db.libros.find({editorial: {$eq: "Planeta"}})

// 5. ORDENAR RESULTADOS (A-Z)
// db.libros.find({}).sort({titulo: 1})

// 6. CONTAR RESULTADOS
// db.libros.find({precio: {$gt: 40}}).count()

// 7. LIMITAR RESULTADOS
// db.libros.find({}).sort({titulo: 1}).limit(5)

// 8. ENBELLECE LA SALIDA EN CONSOLA (antiguamente)
// db.libros.find({}).sort({titulo: 1}).limit(5).pretty()