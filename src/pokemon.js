/* eslint-disable import/prefer-default-export */

import request from 'request-promise-native';

export async function getPokemon(name) {
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
}

export async function getPokemons(names, sortBy = 'moves', sortOrder = 'desc') {
  // if sortBy is an array, sort by sortBy.length
  return { names, sortBy, sortOrder };
}
