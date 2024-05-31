type TInput = React.ComponentProps<"input"> & {
  placeholder: string;
};

const Input = (props: TInput) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className=" w-full h-[44px] text-black bg-white rounded-lg p-2 border-[1px] border-[#ACACAC] text-[12px]"
    />
  );
};

export default Input;
