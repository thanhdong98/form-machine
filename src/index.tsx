import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import Sample from "./samples/Sample";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Sample />
  </React.StrictMode>,
  document.getElementById("root")
);
export { FormGenerator, FormBuilder } from "./containers";
export type { FormControlType, ControlType } from "./shared/types/FormControlType";
export { parseTemplate } from "./shared/utils";
