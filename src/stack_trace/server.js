import express from "express";
import 'dotenv/config';
import router from "./routes.js";
import cuteStack from 'cute-stack';


cuteStack('table');
const port = process.env.PORT;
const app = express();

if(process.env.NODE_ENV !== 'production'){
  Error.stackTraceLimit = Infinity;
}

app.use(router);

app.listen(port, () => {
  console.log(`App listen in port ${port}`);
});