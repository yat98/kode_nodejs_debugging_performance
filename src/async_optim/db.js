import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017';
const dbName = 'shoptim';
const client = new MongoClient(url);

const connect = async () =>  {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('carts');
  return collection;
}

export default connect;