import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  const links = await db
    .collection("links")
    .insert(req.body)
  res.json(links);
};
