export default async function About() {
  // cache를 사용하지 말라는 코드
  // const posts = await (
  //   await fetch("http://localhost:4000/post", { cache: "no-store" })
  // )
  //   .json();

  // 지정된 시간이 될 떄까지 가지고 있다가 시간이 지나면 캐시에 등록?

  // const posts = await (
  //   await fetch("http://localhost:4000/post", { next: { revalidate: 10 } })
  // ).json();
  //
  const posts = await (
    await fetch("http://localhost:4000/post", { next: { revalidate: 10 } })
  ).json();
  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <h1 className="text-2xl">About Component</h1>
      <h2 className="text-2xl">{new Date().toLocaleTimeString()}</h2>
    </>
  );
}
