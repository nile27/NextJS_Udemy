"use client";
import { useRouter } from "next/navigation";

const NavigationComponent = () => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.back()}>Go Back</button>
      <button onClick={() => router.forward()}>Go Forward</button>
      <button onClick={() => router.push("/login")}>Go to About</button>
      <button onClick={() => router.replace("/login")}>Replace to About</button>
    </div>
  );
};

export default NavigationComponent;
