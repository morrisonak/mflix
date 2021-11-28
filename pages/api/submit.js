// this api funtion will take in a subbmission and add it to the database

import { findDOMNode } from "react-dom";
import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
    const { db } = await connectToDatabase();
    
    const movies = await db
        .collection("movies")
        .find({})
        .sort({ metacritic: -1 })
        .limit(5)
        .toArray();
    res.json(movies);
        
    };
   