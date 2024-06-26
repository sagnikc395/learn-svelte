//this will be checked in compile time, but not in run time

const pokemon = [];

const addPokemon = (pokemonName: string) => {
  pokemon.push(pokemonName);
};

addPokemon("Pikachu");

// compile time check passes,but not runtime checks.
//addPokemon(1);
