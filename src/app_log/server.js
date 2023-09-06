import express from "express";
import 'dotenv/config';
import stylus from "stylus";

const port = process.env.PORT;
const app = express();

app.disable('x-powered-by');

app.get('/some.css', (req,res) => {
  const css = stylus(`
    body
      color: black
  `).render();
  res.send(css);
});

app.listen(port, () => {
  console.log(`App listen in port ${port}`);
});