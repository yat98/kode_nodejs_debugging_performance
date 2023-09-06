import express from "express";
import 'dotenv/config';
import past from "./past.js";
import future from "./future.js";

const port = process.env.PORT;
const app = express();

app.get('/:age', (req, res) => {
  res.send(past(req.params.age, 10) + future(req.params.age, 10));
});

app.listen(port, () => {
  console.log(`App listen in port ${port}`);
});