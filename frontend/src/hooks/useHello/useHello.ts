import { useSyncExternalStore } from "react";
import { init, Hello } from "../../lib/hello-wasm/hello-wasm";
import createStore from "../../lib/store/store";

const helloStore = createStore<Hello | undefined>(undefined);
let loading = false;

const useHello = (): Hello | undefined => {
  if (!helloStore.getSnapshot() && !loading) {
    loading = true;
    init("/hello.wasm")
      .then((hello) => {
        helloStore.publish(hello);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        loading = false;
      });
  }

  return useSyncExternalStore(helloStore.subscribe, helloStore.getSnapshot);
};

export default useHello;
