/* eslint-disable no-undef */

import { getPokemon } from '../../src/pokemon';

test('get pokemon with name ...', async () => {
  const pokemon = await getPokemon('ditto');
  expect(pokemon).toEqual({
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
    name: 'ditto',
  });
});

test('get pokemons with names ...', async () => {
  const pokemons = [{
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
    name: 'ditto',
  },
  ];
  expect(pokemons).toContainEqual({
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
    name: 'ditto',
  });
});
