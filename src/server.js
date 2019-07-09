import 'babel-polyfill' // eslint-disable-line
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

const app = new express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  res.status(200).send("Welcome!");
});

let server = app.listen(process.env.PORT || 3000, () => {
  let port = server.address().port;
  console.log(`Server started on port ${port}`)
});
