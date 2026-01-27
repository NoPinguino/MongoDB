use("pokemon");

// Pon la tuta absoluta de tu JSON para insertar aquí:
const data = require("fs").readFileSync(
    "/home/misael/Documents/asignaturas/acceso-datos/mongodb/pokemon-mongodb/pokemons.json",
    "utf8"
);

const pokemons = JSON.parse(data);

db.pokemons.insertMany(pokemons);
