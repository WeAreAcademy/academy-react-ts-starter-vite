export function MyComponent3(): JSX.Element {
    //This should fail to type-check
    const myNum: string = 10;

    return (
        <div>
            {MyComponent3.name}
            <hr />
            {myNum}
        </div>
    );
}
