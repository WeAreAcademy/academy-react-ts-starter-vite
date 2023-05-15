import { greet } from "../greet";
import { MyComponent } from "./MyComponent";

function App() {
    return (
        <div className="App">
            <MyComponent stuff={"blah"} />

            {greet("scholar")}
        </div>
    );
}

export default App;
