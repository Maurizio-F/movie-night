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

  client.on("error", (error) => console.log(error));
  client.once("open", () => console.log("Connected to Database"));

  await client.connect();
}
