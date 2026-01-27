use("pokemon");

// INSERTAR (USA TU RUTA ABSOLUTA):

// const data = require("fs").readFileSync(
//     "/home/misael/Documents/asignaturas/acceso-datos/mongodb/pokemon-mongodb/pokemons.json",
//     "utf8"
// );

// const pokemons = JSON.parse(data);

// db.pokemons.insertMany(pokemons);

// ELIMINAR:

// db.pokemons.drop()

/*
{
"_id": 1,
"pokedexNumber": 1,
"name": "bulbasaur",
"generation": 1,
"isLegendary": false,
"types": [
    "grass",
    "poison"
],
"height": 0.7,
"weight": 6.9,
"stats": {
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "specialAttack": 65,
    "specialDefense": 65,
    "speed": 45
},
"abilities": [
    {
    "name": "overgrow",
    "hidden": false
    },
    {
    "name": "chlorophyll",
    "hidden": true
    }
],
"moves": [
    "razor-wind",
    "swords-dance",
    "cut",
    ... (hay decenas de movimientos por Pokémon)
]
}
 */