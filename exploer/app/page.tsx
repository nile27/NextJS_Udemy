import Image from "next/image";

export default async function Home() {
  const posts = await (await fetch("http://localhost:4000/post")).json();
  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <h1 className="text-2xl">About Component</h1>
      <h2 className="text-2xl">{new Date().toLocaleTimeString()}</h2>
    </>
  );
}
