// ❗ SE NECESITA NODE JS MÍNIMO V.18+ ❗
// EJECUTAR CON: node generar_pokemon.js

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// 👉 Obtener la ruta del archivo actual (ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 👉 Archivo de salida (misma carpeta)
const OUTPUT_FILE = path.join(__dirname, "pokemons.json");

// Incluye las cuatro primeras generaciones de Pokémon.
const GENERATIONS = {
    1: { start: 1, end: 151 },
    2: { start: 152, end: 251 },
    3: { start: 252, end: 386 },
    4: { start: 387, end: 493 }
};

// Elige aquí cuantas generaciones quieres.
const SELECTED_GENERATIONS = [1, 2, 3, 4];

// Pokémon legendarios (definidos manualmente)
const LEGENDARIES = [
    144, 145, 146, 150, 151,
    243, 244, 245, 249, 250, 251,
    377, 378, 379, 380, 381, 382, 383, 384, 385, 386,
    480, 481, 482, 483, 484, 485, 486, 487, 488,
    489, 490, 491, 492, 493
];

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemon(id) {
    const res = await fetch(`${BASE_URL}${id}`);
    return res.json();
}

(async () => {
    const pokemons = [];

    for (const gen of SELECTED_GENERATIONS) {
        const { start, end } = GENERATIONS[gen];

        for (let i = start; i <= end; i++) {
            const p = await getPokemon(i);

            pokemons.push({
                _id: `pk_${String(i).padStart(4, "0")}`,
                pokedexNumber: i,
                name: p.name,
                generation: gen,
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
                moves: p.moves.slice(0, 8).map(m => m.move.name)
            });

            // 👇 Progreso SOLO por terminal
            console.error(`✔️ Pokémon ${i} (${p.name})`);
        }
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
