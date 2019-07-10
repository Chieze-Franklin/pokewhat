/* eslint-disable no-undef */

import supertest from 'supertest';

import app from '../../src/app';

test('/top should get the strongest pokemon', async () => {
  const response = await
  supertest(app).get('/top?names=bulbasaur,ivysaur,venusaur,charmander');
  expect(response.statusCode).toBe(200);
  expect(response.body.data.name).toBe('charmander');
}, 30000);

test('/rank should order the pokemons accroding to strength', async () => {
  const response = await
  supertest(app).get('/rank?names=bulbasaur,ivysaur,venusaur,charmander');
  expect(response.statusCode).toBe(200);
  expect(response.body.data.length).toBe(4);
  expect(response.body.data[0].name).toBe('charmander');
  expect(response.body.data[1].name).toBe('bulbasaur');
  expect(response.body.data[2].name).toBe('venusaur');
  expect(response.body.data[3].name).toBe('ivysaur');
}, 30000);
