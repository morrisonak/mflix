import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
  console.log(req.query.url)
  const link={
    url:req.query.url,
    description:req.query.desc
  }
  const { db } = await connectToDatabase();
  const links = await db
    .collection("links")
    .insert(link)
  res.json(links);
};