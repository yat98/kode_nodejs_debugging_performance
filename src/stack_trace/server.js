import express from "express";
import 'dotenv/config';
import router from "./routes.js";

const port = process.env.PORT;
const app = express();
app.use(router);

app.listen(port, () => {
  console.log(`App listen in port ${port}`);
});