import { useState } from "react";

export function MyComponent2(): JSX.Element {
    const [x] = useState(10);

    return (
        <div>
            <h2>{MyComponent2.name}</h2>
            x: {x}
        </div>
    );
}

export function notAComponentFunction(a: number): number {
    return a * a;
}

export function myFunction3() {
    //lint should complain this should be a const
    for (const item of [10, 20, 30]) {
        console.log(item);
    }
}
