use("AcademiaDB")

// db.libros.drop()

// db.createCollection("clientes")

// db.clientes.insertMany([
//     {
//         nombre: "Ana Lopez",
//         ciudad: "Madrid",
//         direccion: {
//             calle: "Colon",
//             numero: 45
//         }
//     },
//     {
//         nombre: "Juan Perez",
//         ciudad: "Madrid",
//         direccion: {
//             calle: "Colon",
//             numero: 120
//         }
//     },
//     {
//         nombre: "Maria Garcia",
//         ciudad: "Barcelona",
//         direccion: {
//             calle: "Diagonal",
//             numero: 300
//         }
//     },
//     {
//         nombre: "Luis Martinez",
//         ciudad: "Sevilla",
//         direccion: {
//             calle: "Colon",
//             numero: 10
//         }
//     }
// ])

// db.createCollection("libros")

// db.libros.insertMany([
//     {
//         codigo: 1,
//         nombre: "El Aleph",
//         autor: {
//             nombre: "Borges",
//             nacionalidad: "Argentina"
//         },
//         precio: 45,
//         editoriales: ["Planeta", "Siglo XXI"]
//     },
//     {
//         codigo: 2,
//         nombre: "Ficciones",
//         autor: {
//             nombre: "Borges",
//             nacionalidad: "Argentina"
//         },
//         precio: 60,
//         editoriales: ["Emecé"]
//     },
//     {
//         codigo: 3,
//         nombre: "La ciudad y los perros",
//         autor: {
//             nombre: "Mario Vargas Llosa",
//             nacionalidad: "Peruana"
//         },
//         precio: 55,
//         editoriales: ["Alfaguara", "Planeta"]
//     },
//     {
//         codigo: 4,
//         nombre: "Don Quijote",
//         autor: {
//             nombre: "Cervantes",
//             nacionalidad: "Española"
//         },
//         precio: 70,
//         editoriales: ["Anaya"]
//     }
// ])

// db.createCollection("posts")

// db.posts.insertMany([
//     {
//         titulo: "Introducción a MongoDB",
//         comentarios: [
//             { autor: "Juan Perez", texto: "Muy útil" },
//             { autor: "Maria Lopez", texto: "Gracias!" }
//         ]
//     },
//     {
//         titulo: "Bases de datos NoSQL",
//         comentarios: [
//             { autor: "Pablo Rodriguez", texto: "Buen artículo" },
//             { autor: "Juan Perez", texto: "Interesante" }
//         ]
//     },
//     {
//         titulo: "Modelado en MongoDB",
//         comentarios: [
//             { autor: "Maria Lopez", texto: "Claro y conciso" }
//         ]
//     }
// ])

// db.createCollection("series")

// db.series.insertMany([
//     {
//         nombre: "The Big Bang Theory",
//         temporadas: [
//             {
//                 numero: 1,
//                 capitulos: [
//                     { numero: 1, titulo: "Pilot" },
//                     { numero: 2, titulo: "The Big Bran Hypothesis" }
//                 ]
//             },
//             {
//                 numero: 2,
//                 capitulos: [
//                     { numero: 1, titulo: "The Bad Fish Paradigm" }
//                 ]
//             }
//         ]
//     },
//     {
//         nombre: "The Walking Dead",
//         temporadas: [
//             {
//                 numero: 1,
//                 capitulos: [
//                     { numero: 1, titulo: "Days Gone Bye" },
//                     { numero: 2, titulo: "Guts" }
//                 ]
//             }
//         ]
//     }
// ])


// COLECCIONES: clientes / libros / posts / series

// 1. Mostrar todos los clientes que viven en 'Barcelona'
// db.clientes.find({ciudad: "Barcelona"})


// 2. Mostrar libros que tengan más de una editorial (NO POSIBLE CON LO QUE SÉ)
// db.libros.find({
//     editoriales: {$size: {&gt: 1}}
// })


// 3. Mostrar todos los comentarios de los posts donde ha comentado 'Juan Perez'
// db.posts.find({
//     "comentarios.autor": {$in: ["Juan Perez"]}
// })


// 4. Mostrar los títulos de los libros cuyo precio esté entre 50 y 70
// db.libros.find({
//     precio: {$gt: 50, $lt: 70}
// })


// 5. Añadir 'Nueva edición' a las editoriales del libro 'Ficciones'
// db.libros.updateOne(
//     {nombre: "Ficciones"},
//     {$push: {editoriales: "Nueva edición"}}
// )


// 6. Eliminar la editorial 'Siglo XXI' de 'El Aleph'
// db.libros.updateOne(
//     {nombre: "El Aleph"},
//     {$pull: {editoriales: "Siglo XXI"}}
// )


// 7. Renombrar el campo 'nombre' de los autores a 'nombreAutor' en todos los libros
// db.libros.updateMany(
//     {},
//     {$rename: {"autor.nombre": "autor.nombreAutor"}}
// )
// db.libros.find({})


// 8. Mostrar todas las temporadas de 'The Big Bang Theory'
// db.series.find({nombre: "The Big Bang Theory"},{"temporadas.numero": 1})


// 9. Mostrar todos los capítulos de la primera temporada de 'The Big Bang Theory' (NO POSIBLE CON LO QUE SÉ)
// db.series.find(
//     { nombre: "The Big Bang Theory", "temporadas.numero": 1 },
//     { "temporadas.capitulos": 1}
// )



// 10. Mostrar el primer capítulo de la primera temporada de todas las series
db.series.find(
    { "temporadas.numero": 1 },
    { _id: 0, "temporadas.capitulos": { $slice: 1 } }   // trae solo el primer capítulo del array
)