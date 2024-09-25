export interface Hello {
  Hello: () => string;
  Nums: () => number[];
  Add: (a: number, b: number) => number;
  AddAndSub: (a: number, b: number) => { sum: number; diff: number };
  Div: (a: number, b: number) => { quot: number; error: string };
}

declare function hello(): string;
declare function nums(): number[];
declare function add(a: number, b: number): number;
declare function addAndSub(a: number, b: number): { sum: number; diff: number };
declare function div(a: number, b: number): { quot: number; error: string };

export const init = async (path: string): Promise<Hello> => {
  const go = new Go();
  const result = await WebAssembly.instantiateStreaming(
    fetch(path),
    go.importObject
  );
  const instance = result.instance;
  go.run(instance);
  return {
    Hello: hello,
    Nums: nums,
    Add: add,
    AddAndSub: addAndSub,
    Div: div,
  };
};
