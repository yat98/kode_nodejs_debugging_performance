import express from "express";
import 'dotenv/config';
import db from './db.js';
import fastq from "fastq";
import { LRUCache } from "lru-cache";

const port = process.env.PORT;
const app = express();
const cache = new LRUCache({
  max: 100,
  ttl: 1000 * 60 * 1,

});
const queue = fastq(worker);
const collection = await db();

async function worker(cart, cb) {
  if(cache.get(cart)) {
    cb(null, cache.get(cart));
  }else{
    await collection.aggregate([
      {$match: {cart: cart}},
      {
        $group: {
          _id: "$cart", 
          total: {
            $sum: {
              $multiply: ["$price", "$quantity"]
            }
          }
        }
      }
    ]).next()
      .then((val) => {
        cache.set(cart, val);
        cb(null, cache.get(cart));
      });
  }

  
}

app.get('/carts/:id', async (req, res) => {
  const cart = parseInt(req.params.id);
  queue.push(cart, (err,result) => {
    if(err) {
      res.json({error: err.message}); 
      return;
    }
    res.json(result);
    return;
  })

  // const data = await collection.find({cart}).toArray();
  // if(data.length > 0) {
  //   const total = data.reduce((acc,e) => (acc += e.price * e.quantity), 0);
  //   return res.send({total});
  // }
  // return res.send({total: data[0]});
});

app.listen(port, () => {
  console.log(`App listen in port ${port}`);
});