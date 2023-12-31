import express from "express";
import content from "./content.js";

const router = express.Router();

router.get('/', (req,res) => {
  content()((err, html) => {
    if(err) {
      res.send(500);
      return;
    }
    res.send(html);
  });
});

export default router;