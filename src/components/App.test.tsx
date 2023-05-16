import { act, render, screen } from "../utils/test-utils";
import App from "./App";

//An example of using react-testing-library
describe("App component", async () => {
    test("should render have a button on it", () => {
        render(<App />);

        const button = screen.getByText("toggle");
        expect(button).toBeInTheDocument();
        act(() => {
            button.click();
        });
        expect(screen.getAllByText("MyComponent2")[0]).toBeInTheDocument();
    });
});
