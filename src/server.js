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
  const sortedList = await getPokemons();
  res.status(200).send(sortedList[0]);
});

const server = app.listen(process.env.PORT || 3000, () => {
  const { port } = server.address();
  console.log(`Server started on port ${port}`) // eslint-disable-line
});
