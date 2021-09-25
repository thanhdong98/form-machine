import { Component } from "react";
import { FormControlType, SubmittedValueType, ControlType } from "./src/shared/types";

export interface FormBuilderProps {
  schema?: FormControlType[];
  onSave?: (schema: FormControlType[]) => void;
}

export interface FormGeneratorProps {
  schema: FormControlType[];
  onSubmit?: (result: SubmittedValueType[]) => void;
  className?: string;
}

declare class FormBuilder extends Component<FormBuilderProps, any> {}
declare class FormGenerator extends Component<FormGeneratorProps, any> {}
declare module "form-machine" {}

export { FormBuilder, FormGenerator };
export type { FormControlType, ControlType, SubmittedValueType };
export { parseTemplate } from "./src/shared/utils";
