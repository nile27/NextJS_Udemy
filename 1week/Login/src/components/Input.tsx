type TInput = React.ComponentProps<"input"> & {
  placeholder: string;
};

const Input = (props: TInput) => {
  return (
    <input
      placeholder={props.placeholder}
      className=" w-[240px] h-[44px] bg-white rounded p-2"
    />
  );
};

export default Input;
