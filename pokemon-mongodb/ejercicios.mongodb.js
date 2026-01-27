use("pokemon")

// 1. Encuentra el Pokémon con el tercer HP más alto. Muestra pokedexNumber, name y stats.hp.



// 2. Muestra un solo Pokémon que tenga exactamente 3 tipos (usa $size).



// 3. Calcula el promedio de ataque (stats.attack) por generación. Muestra la generación y el promedio.



// 4. Encuentra todos los Pokémon legendarios y muestra solo el pokedexNumber, name y isLegendary.



// 5. Calcula cuántos Pokémon hay de cada tipo principal (primer elemento de types). Ordena de mayor a menor.



// 6. Muestra los Pokémon que tengan velocidad (stats.speed) mayor a 100 y peso menor a 50. Muestra name, stats.speed y weight.



// 7. Agrupa los Pokémon por generación y calcula el promedio de HP de cada generación. Ordena de mayor a menor.



// 8. Encuentra el Pokémon más pesado de cada tipo. Muestra el tipo (_id), name y weight. (Hint: $unwind + $sort + $group + $first)



// 9. Encuentra las habilidades ocultas (hidden: true) que aparecen en más de un Pokémon. Muestra el nombre de la habilidad y la cantidad de Pokémon que la tienen.



// 10. Calcula el peso total de todos los Pokémon de cada tipo. Ten en cuenta que un Pokémon puede tener varios tipos.



// 11. Encuentra los Pokémon que tengan más de 80 en ataque y al menos 2 movimientos que contengan la palabra "attack". Muestra name, stats.attack y moves.



// 12. Muestra el año de generación con más Pokémon creados. Resultado: generación y cantidad de Pokémon.



// 13. Calcula el promedio de defensa (stats.defense) por tipo de Pokémon, pero solo muestra los tipos cuyo promedio sea superior a 60.



// 14. Encuentra los Pokémon cuyo nombre empiece por "pi" y tenga ataque mayor a 50. Muestra name y stats.attack.



// 15. Muestra los 3 tipos de Pokémon con mayor promedio de velocidad (stats.speed). Muestra el tipo y el promedio.



// 16. Muestra el Pokémon más alto y más bajo de cada generación. Resultado: generación, name y height de más alto y más bajo.



// 17. Usando un cursor, calcula la media de defensa (stats.defense) de todos los Pokémon legendarios. Muestra el resultado como: Average defense for legendary Pokémon: XX.XX



// 18. Usando un cursor, recorre todos los Pokémon con peso mayor a 100 y muestra: Name: XXXX - Weight: XX.XX



// 19. Usando un cursor, encuentra el Pokémon con más movimientos. Muestra name y cantidad de movimientos.



// 20. Usando un cursor, cuenta cuántos Pokémon hay por tipo principal (primer elemento de types). Muestra: Type: XXX - Count: XX
