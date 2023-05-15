import { useCallback, useEffect, useState } from "react";
import { MyComponent2 } from "./MyComponent2";
import { MyComponent3 } from "./MyComponent3";

interface MyComponentProps {
    stuff: string;
}
export function MyComponent(props: MyComponentProps): JSX.Element {
    const [isToggled, setToggled] = useState(false);

    const fooFn = useCallback(
        function (myArg: number) {
            console.log(props.stuff);
            console.log(myArg);
        },
        [props.stuff]
    );
    fooFn(17);
    useEffect(() => {
        console.log("useEffect called");
    }, [fooFn]);

    return (
        <div>
            Here is my component stuff: {props.stuff}
            <hr />
            <button onClick={() => setToggled((p) => !p)}>toggle</button>
            {isToggled ? <MyComponent3 /> : <div>other stuff</div>}
            {isToggled ? <MyComponent2 /> : <div>other stuff</div>}
        </div>
    );
}
