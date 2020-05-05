import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./tailwind.css";
import App from "./app";

const Application = () => <BrowserRouter>
  <App/>
</BrowserRouter>;

let el = document.createElement("div");
el.id = "app";
el.classList.add("min-h-screen");
document.body.append(el);

ReactDOM.render(<Application/>, el);

// @ts-ignore
if (module && module.hot) {
  // @ts-ignore
  module.hot.accept();
}