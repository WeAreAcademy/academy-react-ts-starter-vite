import { render, screen } from "../utils/test-utils";
import { MyComponent2 } from "./MyComponent2";

describe("MyComponent2", () => {
    test("renders", () => {
        render(<MyComponent2 />);
        expect(screen.getAllByText("MyComponent2")[0]).toBeInTheDocument();
    });
});
