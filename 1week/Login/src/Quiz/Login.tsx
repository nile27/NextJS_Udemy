import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

interface IHeaderTextEllement {
  headerText: string;
  placeHolderArr: string[];
  btnText: string[];
  inputValue: string[];
}

interface IHeaderText {
  login: IHeaderTextEllement;
  sign: IHeaderTextEllement;
}

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputLogin, setInputLogin] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [inputSign, setInputSign] = useState<{
    [index: string]: string;
  }>({
    name: "",
    email: "",
    password: "",
  });

  const loginText: IHeaderText = {
    login: {
      headerText: "Login Into App",
      inputValue: ["email"],
      placeHolderArr: ["someone@example.com"],
      btnText: ["Log In", "Go To Sing up"],
    },
    sign: {
      headerText: "Sign Into App",
      inputValue: ["name", "email"],
      placeHolderArr: ["Enter Your Name", "someone@example.com"],
      btnText: ["Sign In", "Go To Log In"],
    },
  };

  const handleInputValueLogin =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputLogin({ ...inputLogin, [key]: e.target.value });
      console.log(inputLogin);
    };
  const handleInputValueSign =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputSign({ ...inputSign, [key]: e.target.value });
    };
  const handleOnclick = () => {
    setIsLogin(!isLogin);
    setInputLogin({ email: "", password: "" });
    setInputSign(inputSign);
    console.log(inputLogin, inputSign);
  };

  return (
    <div className="flex justify-start items-center min-w-[375px] bg-[#FFFFFF] flex-col px-[25px] py-[40px]">
      <div className=" w-[100%] flex justify-start items-start flex-col gap-2">
        <h1 className="font-bold text-[20px] text-[#4f4f4f]">
          {isLogin ? loginText.login.headerText : loginText.sign.headerText}
        </h1>
        <span className="text-[12px] text-[#4f4f4f]">
          Please enter your details to continue.
        </span>
        <div className="w-[100%] flex justify-start items-start flex-col gap-2">
          {isLogin
            ? loginText.login.placeHolderArr.map((item, idx: number) => {
                return (
                  <Input
                    type="text"
                    value={inputLogin.email}
                    key={idx}
                    placeholder={item}
                    onChange={handleInputValueLogin(
                      loginText.login.inputValue[idx]
                    )}
                  />
                );
              })
            : loginText.sign.placeHolderArr.map((item, idx) => {
                return (
                  <Input
                    type="text"
                    key={idx}
                    value={inputSign[loginText.sign.inputValue[idx]]}
                    placeholder={item}
                    onChange={handleInputValueSign(
                      loginText.sign.inputValue[idx]
                    )}
                  />
                );
              })}
          <Input
            type="password"
            placeholder={"Enter Password"}
            onChange={handleInputValueSign("password")}
          />
          <div className="flex gap-2 pt-2">
            <input
              type="checkbox"
              defaultChecked
              className="text-white accent-white"
            />
            <div className="flex gap-1">
              <span className="text-[#4f4f4f] text-[12px]">I agree with</span>
              <span className="text-[#4f4f4f] text-[12px] font-bold ">
                terms
              </span>
              <span className="text-[#4f4f4f] text-[12px]">and</span>
              <span className="text-[#4f4f4f] text-[12px] font-bold">
                policies.
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col mt-3 mb-3 w-full gap-[16px]">
          <Button onColor={true} type="button">
            {isLogin ? "Log in" : "Sign in"}
          </Button>
          <Button onColor={false} type="button" onClick={handleOnclick}>
            {isLogin ? "Go To Log In" : "Go To Sign up"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
