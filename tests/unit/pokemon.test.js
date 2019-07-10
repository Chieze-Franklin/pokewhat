/* eslint-disable no-undef */

import ditto from '../mocks/ditto.json';
import { getPokemon, getPokemons } from '../../src/pokemon';

test('gets pokemon with by ditto', async () => {
  const pokemon = await getPokemon('ditto');
  expect(pokemon).toEqual(ditto);
});

test('gets pokemons by names sorted by height in asc order', async () => {
  const pokemons = await getPokemons([
    'bulbasaur', 'ivysaur', 'venusaur', 'charmander',
  ], 'height', 'asc');
  // charmander: 6
  // bulbasaur: 7
  // ivysaur: 10
  // venusaur: 20
  expect(pokemons.length).toBe(4);
  expect(pokemons[0].name).toBe('charmander');
  expect(pokemons[1].name).toBe('bulbasaur');
  expect(pokemons[2].name).toBe('ivysaur');
  expect(pokemons[3].name).toBe('venusaur');
});

test('gets pokemons by names sorted by height in desc order', async () => {
  const pokemons = await getPokemons([
    'bulbasaur', 'ivysaur', 'venusaur', 'charmander',
  ], 'height');
  expect(pokemons.length).toBe(4);
  expect(pokemons[0].name).toBe('venusaur');
  expect(pokemons[1].name).toBe('ivysaur');
  expect(pokemons[2].name).toBe('bulbasaur');
  expect(pokemons[3].name).toBe('charmander');
});

test('gets pokemons by names sorted by moves in asc order', async () => {
  const pokemons = await getPokemons([
    'bulbasaur', 'ivysaur', 'venusaur', 'charmander',
  ], 'moves', 'asc');
  // ivysaur: 66 moves
  // venusaur: 77 moves
  // bulbasaur: 78 moves
  // charmander: 93 moves
  expect(pokemons.length).toBe(4);
  expect(pokemons[0].name).toBe('ivysaur');
  expect(pokemons[1].name).toBe('venusaur');
  expect(pokemons[2].name).toBe('bulbasaur');
  expect(pokemons[3].name).toBe('charmander');
});

test('gets pokemons by names sorted by moves in desc order', async () => {
  const pokemons = await getPokemons([
    'bulbasaur', 'ivysaur', 'venusaur', 'charmander',
  ]);
  expect(pokemons.length).toBe(4);
  expect(pokemons[0].name).toBe('charmander');
  expect(pokemons[1].name).toBe('bulbasaur');
  expect(pokemons[2].name).toBe('venusaur');
  expect(pokemons[3].name).toBe('ivysaur');
});
