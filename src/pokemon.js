/* eslint-disable import/prefer-default-export */

export async function getPokemon(name) {
  return {
    abilities: [{
      ability: {
        name: 'imposter',
        url: 'https://pokeapi.co/api/v2/ability/150/',
      },
      is_hidden: true,
      slot: 3,
    }],
    moves: [{
      move: {
        name: 'transform',
        url: 'https://pokeapi.co/api/v2/move/144/',
      },
    }],
    name,
  };
}

export async function getPokemons(names, sortBy = 'moves', sortOrder = 'desc') {
  // if sortBy is an array, sort by sortBy.length
  return { names, sortBy, sortOrder };
}
