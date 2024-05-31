import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

const Sign = () => {
  const [addValue, setAddValue] = useState("");
  const dummyData: string[] = [
    "algorithm",
    "coding test",
    "nextJS",
    "React",
    "HTMl",
  ];
  return (
    <div className="flex justify-start items-center min-w-[375px] gap-[20px] bg-[#FFFFFF] flex-col px-[25px] py-[40px]">
      <div className=" w-[100%] flex justify-start items-start flex-col gap-2">
        <h1 className="font-bold text-[20px] text-[#4f4f4f]">Todo List App</h1>
        <span className="text-[12px] text-[#4f4f4f]">
          Please enter your details to continue.
        </span>
      </div>
      <div className="flex justify-center items-end gap-2 w-full">
        <Input
          type="text"
          value={addValue}
          placeholder="Enter Todo List"
          onChange={(e) => setAddValue(e.target.value)}
        />
        <Button type="button" onColor={true} onWidth={"w-[77px]"}>
          Add
        </Button>
      </div>
      <ul className="flex gap-2 flex-col w-full">
        {dummyData.map((item, idx) => {
          return (
            <li
              key={idx}
              className="flex h-[44px] bg-[#f5f5f5] text-black justify-between items-center w-full p-[15px] gap-[15px] border-[1px] rounded-lg border-[#4F4F4F]"
            >
              <input
                type="checkbox"
                defaultChecked
                className="h-[24px] w-[24px] accent-white "
              />
              <span className="w-full">{item}</span>
              <div className=" h-[18px] w-[24px] bg-[#e1e2e2] flex justify-center items-center  border-[1px] rounded-sm border-[#4F4F4F]">
                <img src="../../public/Vector.png" alt="X" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sign;
