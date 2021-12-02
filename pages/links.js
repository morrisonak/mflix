import { connectToDatabase } from "../util/mongodb";
import React,{useState} from "react";

export default function Links({ links }) {

    const [url,setUrl] =useState('');
    const [desc, setDesc] = useState('');

    async function submitHandler(event){
        event.preventDefault();
        
       
        //saveLink(link)

        const response = await fetch('/api/submitLink?url='+url+'&desc='+desc,);

    }
    function urlHandler(event){
        setUrl(event.target.value)
    }

    function descHandler(event){
      setDesc(event.target.value)
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type='text' onChange={urlHandler} />
            <input type='text' onChange={descHandler} />
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



