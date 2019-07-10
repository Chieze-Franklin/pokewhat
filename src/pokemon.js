/* eslint-disable import/prefer-default-export */

import request from 'request-promise-native';

export async function getPokemon(name) {
  try {
    const response = await request({
      url: `https://pokeapi.co/api/v2/pokemon/${name}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      resolveWithFullResponse: true,
    });
    if (response.body) {
      return JSON.parse(response.body);
    }
    return undefined;
  } catch (e) {
    return undefined;
  }
}

export async function getPokemons(names, sortBy = 'moves', sortOrder = 'desc') {
  // if sortBy is an array, sort by sortBy.length
  if (names && Array.isArray(names)) {
    const pokemons = [];
    for (let i = 0; i < names.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const pokemon = await getPokemon(names[i]);
      if (pokemon) {
        pokemons.push(pokemon);
      }
    }
    pokemons.sort((a, b) => {
      let left = a[sortBy];
      let right = b[sortBy];
      if (Array.isArray(a[sortBy])) {
        left = a[sortBy].length;
        right = b[sortBy].length;
      }
      if (!sortOrder || sortOrder === 'desc') {
        return left <= right;
      }
      return left > right;
    });
    return pokemons;
  }
  return [];
}
