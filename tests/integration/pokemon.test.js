/* eslint-disable no-undef */

import supertest from 'supertest';

import app from '../../src/app';

test('/top should get the strongest pokemon', async () => {
  const response = await
  supertest(app).get('/top?names=bulbasaur,ivysaur,venusaur,charmander');
  expect(response.statusCode).toBe(200);
  expect(response.body.data.name).toBe('charmander');
});
