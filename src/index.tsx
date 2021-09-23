import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import Sample from "samples/Sample";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Sample />
  </React.StrictMode>,
  document.getElementById("root")
);

export { default as FormBuilder } from "containers/FormBuilder";
export { default as FormGenerator } from "containers/FormGenerator";
export type { FormControlType, ControlType } from "shared/types/FormControlType";
export { parseTemplate } from "shared/utils/parseTemplate";
