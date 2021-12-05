function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const pokemons = ['Bulbasaur', 'Charmander', 'Pikachu'];
const pokemonAttackList = ['VineWhip', 'Flare', 'Thunderbolt'];

Pokemon.prototype.callPokemon = function () {
  return `I choose you, ${this.name}`;
};
Pokemon.prototype.pokemonAttack = function () {
  return `${this.name} used ${this.attackList}`;
};

const bulbasaur = new Pokemon('Bulbasaur', 'Grass', pokemonAttackList[0]);
const charmander = new Pokemon('Charmander', 'Fire', pokemonAttackList[1]);
const pikachu = new Pokemon('Pikachu', 'Electric', pokemonAttackList[2]);

console.log(bulbasaur.callPokemon());
console.log(bulbasaur.pokemonAttack());
console.log(charmander.callPokemon());
console.log(charmander.pokemonAttack());
console.log(pikachu.callPokemon());
console.log(pikachu.pokemonAttack());
