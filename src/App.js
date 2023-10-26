import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouterCustom from "./routes/router";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <RouterCustom />
      </BrowserRouter>
    </div>
  );
}

export default App;
