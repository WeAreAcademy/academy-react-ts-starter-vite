import { useEffect, useState } from "react";
import { MyComponent2 } from "./MyComponent2";

interface MyComponentProps {
    stuff: string;
}
export function MyComponent(props: MyComponentProps): JSX.Element {
    const [showMyComponent2, setShowMyComponent2] = useState(false);
    const x: number = "foo";

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
            <hr />
            <button onClick={() => setShowMyComponent2((p) => !p)}>
                toggle
            </button>
            {showMyComponent2 ? <MyComponent2 /> : <div>other stuff</div>}
        </div>
    );
}
