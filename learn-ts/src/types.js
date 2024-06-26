const pokemon = "pikachu";
const weight = 60;
const electric = true;

console.log(typeof pokemon);
console.log(typeof weight);
console.log(typeof electric);

//wrapper around them
const stringPrimitive = "Pikachu";
console.log(typeof stringPrimitive.toLocaleLowerCase());
const stringObj = new String("Pikachu");
console.log(typeof stringObj);

const number = "42";
const stringer = String(number);

//add checks inplace
function isString(value) {
  // biome-ignore lint/complexity/noUselessTernary: <explanation>
  return typeof value === "string" ? true : false;
}

isString("Pikachu");
isString(new String("Pikachu"));


