interface actionType {
  type: string;
  count: number;
}

const Exam2 = ({
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
          dispatch({ type: "INCREASE", count: 1 });
        }}
      >
        +
      </button>
    </>
  );
};

export default Exam2;
