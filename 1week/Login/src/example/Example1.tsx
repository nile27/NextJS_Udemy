import Button from "../components/Button";
import Input from "../components/Input";

const Example1 = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-center items-center gap-1 flex-col border border-white p-3">
        <Button
          type={"submit"}
          disabled={false}
          name={"button"}
          color={"bg-rose-700"}
        >
          ddd
        </Button>
        <Button
          type={"submit"}
          disabled={false}
          name={"button"}
          color={"bg-rose-900"}
        >
          Cancle
        </Button>
        <Button
          type={"submit"}
          disabled={false}
          name={"button"}
          color={"bg-rose-400"}
        >
          Success
        </Button>
      </div>
      <div>
        <Input placeholder={"입력해주세요"} />
      </div>
      <div className="flex justify-center items-center p-3 gap-2">
        <Input placeholder={"입력해주세요"} />
        <Button
          type={"submit"}
          disabled={false}
          name={"button"}
          color={"bg-rose-400"}
        >
          Success
        </Button>
      </div>
    </div>
  );
};

export default Example1;
