type TButtonProps = React.ComponentProps<"button"> & {
  type: "submit" | "button";
  onColor: boolean;
  onWidth?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const button = (props: TButtonProps) => {
  const { children, onColor, onWidth, ...restBtnProps } = props;
  return (
    <button
      {...restBtnProps}
      className={`${
        onColor
          ? " bg-[#4F4F4F] text-[#fffff] border-[#4F4F4F] "
          : "text-[#4F4F4F] border-[#4F4F4F] "
      } ${
        onWidth ? onWidth : "w-full"
      } border-[1px] h-[44px] inter flex justify-center items-center text-[14px] rounded-lg`}
    >
      {children}
    </button>
  );
};

export default button;
