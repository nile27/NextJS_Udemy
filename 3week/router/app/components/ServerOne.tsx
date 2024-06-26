import { resolve } from "path";

export default async function ServerOne() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <>
      <h1>ServerOne Component</h1>
    </>
  );
}
