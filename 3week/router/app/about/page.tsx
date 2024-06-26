import ServerOne from "../components/ServerOne";
import { Suspense } from "react";
import ServerTwo from "../components/ServerTwo";

export default function About() {
  return (
    <>
      <Suspense
        fallback={<h1 className=" text-red-500">suspense one loading...</h1>}
      >
        <ServerOne />
      </Suspense>

      <Suspense
        fallback={<h1 className=" text-blue-500">suspense one loading...</h1>}
      >
        <ServerTwo />
      </Suspense>
    </>
  );
}
