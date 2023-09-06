import express from "express";
import 'dotenv/config';

const port = process.env.PORT;
const app = express();

app.get('/hello', (req,res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`App listen in port ${port}`);
});