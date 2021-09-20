import express from 'express';
import { dirname } from 'path';

const app = express();
app.use(express.static('src/public'));
app.use('/css', express.static(dirname + 'src/public/css'));
app.use('/fonts', express.static(dirname + 'src/public/fonts'));
app.use('/images', express.static(dirname + 'src/public/images'));

const server = app.listen(8080, () => {
  const port = server.address().port;
  console.log(`Server started at http://localhost:${port}`);
});