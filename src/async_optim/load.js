import {MongoClient} from 'mongodb';
const url = 'mongodb://localhost:27017';

let count = 0;
const max = 10000;

const client = new MongoClient(url);
const dbName = 'shoptim';

async function insert(collection) {
  await collection.insertOne({
    cart: parseInt(Math.random() * 100),
    quantity: parseInt(Math.random() * 10) + 1,
    price: Math.random() * 1000
  }, insert);
}

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('carts');

  while(count <= max){
    await insert(collection);
    count++;
  }
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
