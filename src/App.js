import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RouterCustom from "./routes/router";
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterCustom />
      </BrowserRouter>
    </div>
  );
}

export default App;
