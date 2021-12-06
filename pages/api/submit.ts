import { NextApiRequest, NextApiResponse  } from "next";
import { connectToDatabase } from "../../util/mongodb";

export default async function submit(req: NextApiRequest, res: NextApiResponse) {
  const db = await connectToDatabase();

  console.log(req.body);
  res.json({
    message: "ok",
  });
};