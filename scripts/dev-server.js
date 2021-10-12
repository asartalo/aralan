import express from 'express';
import livereload from 'livereload';
import { dirname, resolve, join } from 'path';

const rootPath = resolve(dirname(''));

const app = express();
app.use(express.static('src/public'));
app.use('/css', express.static(dirname + 'src/public/css'));
app.use('/fonts', express.static(dirname + 'src/public/fonts'));
app.use('/images', express.static(dirname + 'src/public/images'));

const server = app.listen(8080, () => {
  const port = server.address().port;
  console.log(`Server started at http://localhost:${port}`);
});

/** Watch for file changes in src **/

const liveServer = livereload.createServer({ debug: true });
console.log(rootPath);
liveServer.watch(join(rootPath, 'src'));