import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export { default as FormBuilder } from "./containers/FormBuilder";
export { default as FormGenerator } from "./containers/FormGenerator";
export type { FormControlType, ControlType } from "./shared/types/FormControlType";
export { parseTemplate } from "./shared/utils/parseTemplate";
