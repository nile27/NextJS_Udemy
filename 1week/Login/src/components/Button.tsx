type TButtonProps = React.ComponentProps<"button"> & {
  type: "submit";
  color: string;
  children: React.ReactNode;
};

const Button = (props: TButtonProps) => {
  const { children, ...restBtnProps } = props;
  return (
    <>
      {/* <button
        type={props.type}
        name={props.name}
        disabled={props.disabled}
        className={`${
          props.color ? props.color : "bg-rose-500"
        } inter w-[77px] h-[44px] flex justify-center items-center text-[14px] min-w-[77px]`}
      >
        {props.children}
      </button> */}

      <button
        {...restBtnProps}
        className={`${
          props.color ? props.color : "bg-rose-500"
        } inter w-[77px] h-[44px] flex justify-center items-center text-[14px] min-w-[77px] rounded`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
