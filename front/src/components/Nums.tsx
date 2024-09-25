import useHello from "../hooks/useHello/useHello";

const Nums: React.FC = () => {
  const hello = useHello();
  const onClick = () => {
    if (hello) {
      alert(hello.Nums());
    }
  };
  return hello ? (
    <button type="button" onClick={onClick}>
      Nums
    </button>
  ) : (
    <div>loading...</div>
  );
};

export default Nums;
