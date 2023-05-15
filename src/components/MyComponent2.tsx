import { useState } from "react";

export function MyComponent2(): JSX.Element {
    const flag = true;
    if (flag) {
        //lint should complain - violation of rules of hooks
        const [x, setX] = useState(10);
    }
    return <div>second component</div>;
}

function notAComponentFunction(a: number): number {
    //lint should complain - violation of rules of hooks
    const [bad, setBad] = useState(3);
    return a * a;
}

function myFunction3() {
    //lint should complain this should be a const
    for (let item of [10, 20, 30]) {
        console.log(item);
    }
}
