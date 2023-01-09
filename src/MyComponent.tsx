import { useEffect } from "react";

export function MyComponent(): JSX.Element {
  function foo(myArg) {

  }
  useEffect(() => {
    foo();
  }, []);

  return <div>Here is my component</div>;
}
