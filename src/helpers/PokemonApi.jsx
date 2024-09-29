export const fetchPokemonList = async (limit = 20, offset = 0) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
        throw new Error("Could not fetch pokemon list.");
    }
    const { results } = await response.json();
    const imageBase = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";


    const data = await Promise.all(results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();
        return {
            id: poke.id,
            name: poke.name,
            abilities: poke.abilities,
            types: poke.types,
            stats: poke.stats,
            image: `${imageBase}${poke.id}.svg`,
        };
    }));

    return data;
};
