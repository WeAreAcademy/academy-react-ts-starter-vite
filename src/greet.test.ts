import { greet } from "./greet";

//docs: https://jestjs.io/docs/expect
test("greet returns a string, greeting the passed name", () => {
    expect(greet("Zaphod")).toEqual("Hello, Zaphod");
    expect(greet("Mo")).toEqual("Hello, Mo");
});

//docs: https://www.chaijs.com/api/assert/
test("demonstrating chai 'assert' library", () => {
    assert.equal(greet("Zaphod"), "Hello, Zaphod");
    assert.equal(greet("Mo"), "Hello, Mo");

    assert.deepEqual({ b: [10, 20], a: 10 }, { a: 10, b: [10, 20] });
});
