"use client";
import { redirect, useRouter } from "next/navigation";

export default function blogNumber({
  params: { id },
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const number = parseInt(id);

  if (Number.isNaN(number)) {
    redirect("/blog/page/notfound");
  }

  return (
    <>
      <h1>blogNumer Component</h1>
    </>
  );
}
