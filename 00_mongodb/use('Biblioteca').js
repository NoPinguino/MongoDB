use('Biblioteca')

// db.libros.insertOne({
//   titulo: "El hombre en busca de sentido",
//   autor: "Viktor E. Frankl",
//   año: 1946,
//   genero: "Psicología / Filosofía",
//   paginas: 184,
//   isbn: "9788497596884",
//   editorial: "Herder",
//   precio: 12.99
// })

db.libros.find({genero: "Fantasía"}, {_id: 0,titulo: 1})