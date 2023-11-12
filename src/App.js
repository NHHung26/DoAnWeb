import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RouterCustom from "./routes/router";
import { store } from "./redux/index";
import { Provider, useDispatch, useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <RouterCustom />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
