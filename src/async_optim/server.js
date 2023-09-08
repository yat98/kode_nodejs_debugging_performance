import express from "express";
import 'dotenv/config';
import db from './db.js';

const port = process.env.PORT;
const app = express();
const collection = await db();

app.get('/carts/:id', async (req, res) => {
  const cart = parseInt(req.params.id);

  // const data = await collection.find({cart}).toArray();
  // if(data.length > 0) {
  //   const total = data.reduce((acc,e) => (acc += e.price * e.quantity), 0);
  //   return res.send({total});
  // }

  const data = await collection.aggregate([
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
  ]).toArray();

  return res.send({total: data[0]});
});

app.listen(port, () => {
  console.log(`App listen in port ${port}`);
});