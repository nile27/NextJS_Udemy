import Login from "./Login";
import Sign from "./Sign";

const Main = () => {
  return (
    <div className="flex justify-start items-center  bg-[#242622]  px-[25px] py-[40px] gap-[24px]">
      <Login />
      <Sign />
    </div>
  );
};

export default Main;
