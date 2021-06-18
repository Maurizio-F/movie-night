import { MongoClient } from "mongodb";

let client: MongoClient;
export async function connectDatabase(): Promise<void> {
  const { MONGODB_URL } = process.env;

  if (!MONGODB_URL) {
    throw new Error("process.env.MONGODB_URL is missing");
  }

  client = new MongoClient(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
}
