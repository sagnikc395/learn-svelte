//this will be checked in compile time, but not in run time

const pokemon = [];

const addPokemon = (pokemonName: string) => {
  pokemon.push(pokemonName);
};

addPokemon("Pikachu");

// compile time check passes,but not runtime checks.
//addPokemon(1);

//can take advantage of gradual adoption or can use jsdoc

//ts is static type checker -> it checks your code before it runs it.
// ts is a superset of js -> meaning that any JS program is also a valid TS program.
// TS preserves the runtime behaviour of JS -> TS doesnt change how JS works
// TS compiles to JS
// Types are gone once it compiles to JS
// Using TS is a gradual adoption.
