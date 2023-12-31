import express from "express";
import 'dotenv/config';
import router from "./routes.js";
import cuteStack from 'cute-stack';
import { createRequire } from "module";
const require = createRequire(import.meta.url);

cuteStack();
if(process.env.NODE_ENV !== 'production'){
  require('longjohn');
  Error.stackTraceLimit = Infinity;
}

const port = process.env.PORT;
const app = express();


app.use(router);

app.listen(port, () => {
  console.log(`App listen in port ${port}`);
});