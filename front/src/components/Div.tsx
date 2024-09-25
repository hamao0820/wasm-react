import { useState } from "react";
import useHello from "../hooks/useHello/useHello";

const Div: React.FC = () => {
  const hello = useHello();
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const onClick = () => {
    if (hello) {
      const { quot, error } = hello.Div(a, b);
      if (error) {
        alert(error);
      } else {
        alert(quot);
      }
    }
  };
  return hello ? (
    <div>
      <label htmlFor="a">a:</label>
      <input
        type="number"
        id="a"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <label htmlFor="b">b:</label>
      <input
        type="number"
        id="b"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />
      <button type="button" onClick={onClick}>
        Div
      </button>
    </div>
  ) : (
    <div>loading...</div>
  );
};

export default Div;
