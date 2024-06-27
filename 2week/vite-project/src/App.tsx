import "./App.css";
import { useReducer } from "react";
import Exam1 from "./component/Exam1";
import Exam2 from "./component/Exam2";
interface actionType {
  type: string;
  count: number;
}

const reducer = (state: number, action: actionType) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
  }
  throw new Error("[ERROR] unknown action type");
};

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <Exam1 count={count} dispatch={dispatch} />
      <Exam2 count={count} dispatch={dispatch} />
    </>
  );
}

export default App;
