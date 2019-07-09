import app from './app';

const server = app.listen(process.env.PORT || 3000, () => {
  const { port } = server.address();
  console.log(`Server started on port ${port}`) // eslint-disable-line
});
