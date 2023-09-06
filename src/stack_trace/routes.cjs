const express = require('express');
const content = require('./content.cjs');

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

module.exports = router;