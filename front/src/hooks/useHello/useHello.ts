import { init, Hello } from "../../lib/hello-wasm/hello-wasm";

const useHello = async (): Promise<Hello> => {
  const wasm = await init("/hello.wasm");
  return wasm;
};

export default useHello;
