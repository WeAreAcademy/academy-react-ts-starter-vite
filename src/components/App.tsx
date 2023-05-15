import { greet } from "../greet";
import { MyComponent } from "./MyComponent";

function App() {
    return (
        <div className="App">
            <MyComponent />

            {greet("scholar")}
        </div>
    );
}

export default App;
