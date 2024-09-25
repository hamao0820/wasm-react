import Add from "./components/Add";
import AddAndSub from "./components/AddAndSub";
import Div from "./components/Div";
import Hello from "./components/Hello";
import Nums from "./components/Nums";

function App() {
  return (
    <>
      <h1>WASM(Go) + React</h1>
      <Hello />
      <Nums />
      <Add />
      <AddAndSub />
      <Div />
    </>
  );
}

export default App;
