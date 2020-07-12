import { MongoClient } from 'mongodb';

const client = new MongoClient("mongodb+srv://sherifwael:nevenkitchen@cluster0-mrdbn.mongodb.net/kitchen?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function setUpDb(db) {
  db.collection("orders");
}

export default async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("kitchen");
  await setUpDb(req.db);
  return next();
}