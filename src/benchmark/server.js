import express from "express";
import path from 'path';
import 'dotenv/config';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/hello', (req,res) => {
  res.render('hello', { title: 'Express' });
});

app.post('/echo', (req,res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`App listen in port ${port}`);
});