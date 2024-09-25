import useHello from "../hooks/useHello/useHello";

const Hello: React.FC = () => {
  const hello = useHello();
  const onClick = () => {
    if (hello) {
      alert(hello.Hello());
    }
  };
  return hello ? (
    <button type="button" onClick={onClick}>
      Hello
    </button>
  ) : (
    <div>loading...</div>
  );
};

export default Hello;
