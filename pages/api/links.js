import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  const links = await db
    .collection("links")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
  res.json(links);
};

