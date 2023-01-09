import { useEffect } from "react"

interface MyComponentProps {
  stuff: string;
}
export function MyComponent(props: MyComponentProps): JSX.Element {
  function foo(myArg: number) {
    console.log(props.stuff);
    console.log(myArg);

  }
  useEffect(() => {
    foo(17);
  }, []);

  return <div>Here is my component

  </div>;
}
