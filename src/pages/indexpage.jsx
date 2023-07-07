import Post from "../post";
import {useEffect, useState} from "react";

export default function IndexPage() {

  const [posts,setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      // posts store and array of objects(posts stored in database)
      response.json().then(posts => {
        setPosts(posts);
      })
    })
  }, [])


  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </>
  );
}