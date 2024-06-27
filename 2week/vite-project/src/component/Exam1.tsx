interface actionType {
  type: string;
  count: number;
}

const Exam1 = ({
  count,
  dispatch,
}: {
  count: number;
  dispatch: React.Dispatch<actionType>;
}) => {
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "DECREASE", count: 1 });
        }}
      ></button>
    </>
  );
};

export default Exam1;
