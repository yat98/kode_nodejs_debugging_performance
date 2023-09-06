require('dotenv/config');
const express = require('express');
const router = require('./routes.cjs');
const cuteStack = require('cute-stack')();

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