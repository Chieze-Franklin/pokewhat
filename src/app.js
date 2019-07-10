import 'babel-polyfill' // eslint-disable-line
import cors from 'cors';
import Express from 'express';
import bodyParser from 'body-parser';

import { getPokemons } from './pokemon';

const app = new Express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/top', async (req, res) => {
  let { names } = req.query;
  if (names) {
    names = names.split(',');
  } else {
    names = [];
  }
  const sortedList = await getPokemons(names);
  if (sortedList.length > 0) {
    return res.status(200).send({ data: sortedList[0] });
  }
  return res.status(404).send({ error: 'No pokemon found' });
});

export default app;
