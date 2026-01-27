// ❗ SE NECESITA NODE JS MÍNIMO V.18+ ❗
// EJECUTAR CON: node generar_pokemon.js

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// 👉 Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 👉 Archivo de salida (misma carpeta)
const OUTPUT_FILE = path.join(__dirname, "pokemons.json");

// 🔹 Cantidad total de Pokémon actuales
const TOTAL_POKEMON = 1025;

// 🔹 Pokémon legendarios (simplificado)
const LEGENDARIES = [
    144, 145, 146, 150, 151,
    243, 244, 245, 249, 250, 251,
    377, 378, 379, 380, 381, 382, 383, 384, 385, 386,
    480, 481, 482, 483, 484, 485, 486, 487, 488,
    489, 490, 491, 492, 493,
    638, 639, 640, 641, 642, 643, 644, 645, 646, 647,
    716, 717, 718, 719, 720, 721, 722, 723, 724, 725,
    888, 889, 890, 891, 892, 893, 894, 895, 896, 897,
    1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017,
    1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025
];

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemon(id) {
    const res = await fetch(`${BASE_URL}${id}`);
    if (!res.ok) {
        console.error(`❌ Error cargando Pokémon ${id}`);
        return null;
    }
    return res.json();
}

(async () => {
    const pokemons = [];

    for (let i = 1; i <= TOTAL_POKEMON; i++) {
        const p = await getPokemon(i);
        if (!p) continue;

        pokemons.push({
            _id: i,  // Usar directamente el número de la Pokédex
            pokedexNumber: i,
            name: p.name,
            generation: i <= 151 ? 1 :
                i <= 251 ? 2 :
                    i <= 386 ? 3 :
                        i <= 493 ? 4 :
                            i <= 649 ? 5 :
                                i <= 721 ? 6 :
                                    i <= 809 ? 7 :
                                        i <= 898 ? 8 : 9,
            isLegendary: LEGENDARIES.includes(i),
            types: p.types.map(t => t.type.name),
            height: p.height / 10,
            weight: p.weight / 10,
            stats: {
                hp: p.stats.find(s => s.stat.name === "hp").base_stat,
                attack: p.stats.find(s => s.stat.name === "attack").base_stat,
                defense: p.stats.find(s => s.stat.name === "defense").base_stat,
                specialAttack: p.stats.find(s => s.stat.name === "special-attack").base_stat,
                specialDefense: p.stats.find(s => s.stat.name === "special-defense").base_stat,
                speed: p.stats.find(s => s.stat.name === "speed").base_stat
            },
            abilities: p.abilities.map(a => ({
                name: a.ability.name,
                hidden: a.is_hidden
            })),
            moves: p.moves.map(m => m.move.name)
        });

        // 👇 Progreso por terminal cada 10 Pokémon
        if (i % 10 === 0) console.error(`✔️ Pokémon ${i} (${p.name})`);
    }

    // 👉 Guardar el JSON en archivo
    fs.writeFileSync(
        OUTPUT_FILE,
        JSON.stringify(pokemons, null, 2),
        "utf-8"
    );

    console.log(`\n✅ Archivo generado correctamente: ${OUTPUT_FILE}`);
    console.log(`📦 Total Pokémon: ${pokemons.length}`);
})();
