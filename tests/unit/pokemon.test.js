/* eslint-disable no-undef */

import ditto from '../mocks/ditto.json';
import { getPokemon, getPokemons } from '../../src/pokemon';

test('gets pokemon with by ditto', async () => {
  const pokemon = await getPokemon('ditto');
  expect(pokemon).toEqual(ditto);
});

test('gets pokemons by names sorted by moves in desc order', async () => {
  const pokemons = await getPokemons([
    'bulbasaur', 'ivysaur', 'venusaur', 'charmander',
  ]);
  // charmander: 93 moves
  // bulbasaur: 78 moves
  // venusaur: 77 moves
  // ivysaur: 66 moves
  expect(pokemons.length).toBe(4);
  expect(pokemons[0].name).toBe('charmander');
  expect(pokemons[1].name).toBe('bulbasaur');
  expect(pokemons[2].name).toBe('venusaur');
  expect(pokemons[3].name).toBe('ivysaur');
});
