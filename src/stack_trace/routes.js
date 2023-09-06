import express from "express";
import content from "./content.js";

const router = express.Router();

router.get('/', (req,res) => {
  res.send(content());
});

export default router;