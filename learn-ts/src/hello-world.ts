const pokemon = ["bulbasaur", "charmander", "squirtle"];

//ts is incremental
pokemon.push("pikachu");

console.log(pokemon);

const pikachu = {
  name: "pikachu",
  weight: 50,
};

//get the type of
console.log(typeof pikachu);

console.log(pikachu.weight);

//backand forth communication between editor and us, lets us help this in developing this further.
//typescript types can help in setting the types and the editor and not figure everyhting out at the runtime.

const logPokemon = (pokemons: string[] | null) => {
  if (typeof pokemons === "object") {
    // biome-ignore lint/complexity/noForEach: <explanation>
    pokemons?.forEach((pokemon) => console.log(pokemon));
  }
  return pokemon;
};

logPokemon(["Bulbasuar", "Charmander", "Squirtle"]);
