import dns from "node:dns";
import mongoose from "mongoose";

// Force Node to use Cloudflare DNS instead of the system DNS
dns.setServers(["1.1.1.1", "1.0.0.1"]);

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error("Please define MONGODB_URL in .env");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

export default async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URL)
      .then((mongoose) => {
        console.log("✅ MongoDB Connected");
        return mongoose;
      })
      .catch((err) => {
        console.error("❌ MongoDB Connection Error:", err);
        cached.promise = null; // Allow retry if connection fails
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
