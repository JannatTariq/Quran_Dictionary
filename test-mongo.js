const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URL;

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected!");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

run();
