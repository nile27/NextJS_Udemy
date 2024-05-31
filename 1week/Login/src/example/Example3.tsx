import { useState } from "react";

const Example3 = () => {
  const [inputStr, setInputStr] = useState<string>("");
  return (
    <>
      <input
        type="password"
        value={inputStr}
        onChange={(e) => {
          setInputStr(e.target.value);
        }}
      />
    </>
  );
};

export default Example3;
