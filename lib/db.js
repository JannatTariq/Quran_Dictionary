// import dns from "node:dns";
// import mongoose from "mongoose";
// import { MongoClient } from "mongodb";
// dns.setServers(["8.8.8.8", "8.8.4.4"]);
// const client = new MongoClient(process.env.MONGODB_URL);
// console.log("🔥 db.js LOADED");
// export default async function dbConnect() {
//   try {
//     console.log("🔥 dbConnect CALLED");

//     await client.connect();
//     console.log("You successfully connected to MongoDB!");
//     return client;
//   } catch (err) {
//     console.dir(err);
//   }
// }

import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error("Please define MONGODB_URL");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

export default async function dbConnect() {
  console.log("🔥 dbConnect CALLED");
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("Before connect");

    // await mongoose.connect(process.env.MONGODB_URL);

    cached.promise = mongoose.connect(MONGODB_URL).then((mongoose) => {
      console.log("✅ MongoDB Connected");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
