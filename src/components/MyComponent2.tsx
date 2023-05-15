import { useState } from "react";

const [bad, setBad] = useState(3);

export function MyComponent2(): JSX.Element {
    const x = true;
    if (x) {
        const [x, setX] = useState(10);
    }
    return <div>second component</div>;
}

function myUnusedFn(a: number): number {
    return a * a;
}
