import { greet } from "./greet";

test("Thing", () => {
    expect(3 + 7).toEqual(10);
    expect(greet("Mo")).toEqual("Hello, Mo");
});
