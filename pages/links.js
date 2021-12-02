import { connectToDatabase } from "../util/mongodb";
import React,{useState} from "react";

export default function Links({ links }) {

    const [url,setUrl] =useState('');

    function submitHandler(event){
        event.preventDefault();
        
        const link={
            url:url
        }
        //saveLink(link)

    }
    function urlHandler(event){
        setUrl(event.target.value)
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type='text' onChange={urlHandler} />
            <button type='submit'>Submit</button>
            </form>
      <h1>Top links</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {links.map((link) => (
          <li>
            <h2>{link.url}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}


export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const links = await db
    .collection("links")
    .find({})
    .limit(20)
    .toArray();

  return {
    props: {
      links: JSON.parse(JSON.stringify(links)),
    },
  };
}



