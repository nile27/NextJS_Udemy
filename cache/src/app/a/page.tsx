import Button from "@/components/Button";

export default async function APage() {
  // 웹 애플리케이션 방면으로 어떤 걸 사용할지 판단
  //const posts = await (await fetch("http://localhost:4000/posts")).json();

  // data cache에 저장이 되있건 말건 요청을 하는 옵션 no-store
  // data cache를 우회해서 사용
  // no-store 옵션을 제거하면 마지막에 저장된 캐시에 값을 보여줌
  // 실시간 data를 확인할 때 유리, (구매 내역, 본 기록 등)
  // const posts = await (
  //   await fetch("http://localhost:4000/posts", { cache: "no-store" })
  // ).json();

  // data cache를 10초 뒤 재검증
  // revalidate의 시간이 지난 후 2번을 요청을 해야 사용 가능
  // 일정시간 데이터를 사용할수 있다면 사용
  // no-store는 우회하는 거지만, revalidate는 새로 cache에 저장하는 것이기 때문에 cache에 그대로 저장이 됨
  // const posts = await (
  //   await fetch("http://localhost:4000/posts", {
  //     next: {
  //       revalidate: 10,
  //     },
  //   })
  // ).json();

  // revalidate 보다 좀 더 광범위한 캐싱 무력화 방법
  // tags에 있는 posts라는 요청이 지워지고 새로운 데이터 캐싱
  const posts = await (
    await fetch("http://localhost:4000/posts", {
      next: {
        tags: ["posts"],
      },
    })
  ).json();
  console.log(posts);
  return (
    <>
      <h1>APage Component</h1> <h1>{new Date().toLocaleTimeString()}</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <Button />
    </>
  );
}
