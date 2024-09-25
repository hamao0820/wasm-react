import useHello from "./hooks/useHello/useHello";

function App() {
  const hello = useHello();
  console.log(hello);
  hello.then((h) => {
    console.log(h.Hello());
    console.log(h.Add(1, 2));
    console.log(h.AddAndSub(1, 2));
    console.log(h.Div(1, 2));
    console.log(h.Div(1, 0));
  });
  return (
    <>
      <h1>WASM(Go) + React</h1>
    </>
  );
}

export default App;
