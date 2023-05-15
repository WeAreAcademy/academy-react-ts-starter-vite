import { useEffect } from "react";
import { MyComponent2 } from "./MyComponent2";

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

    return (
        <div>
            Here is my component stuff: {props.stuff}
            <MyComponent2 />
        </div>
    );
}
