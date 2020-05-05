import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./app.css";
import App from "./app";

const Application = () => <BrowserRouter>
  <App/>
</BrowserRouter>;

let root = document.getElementById("root");

ReactDOM.render(<Application/>, root);

// @ts-ignore
if (module && module.hot) {
  // @ts-ignore
  module.hot.accept();
}