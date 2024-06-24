"use client";

import { useEffect, useState } from "react";

export default function Client() {
  const [isLoding, setLoding] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    setLoding(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }

    setLoding(false);
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <h1>Client Component</h1>
    </>
  );
}
