import { Component } from "react";

export interface SubmittedValueType {
  question?: string;
  answer?: string;
}
export interface FormControlType {
  id?: string;
  controlType: "Input" | "Checkbox" | "Radio" | "Select" | "TextArea" | "Section";
  label?: string;
  value?: string | boolean | number | string[];
  placeholder?: string;
  defaultValue?: string | number | string[];
  values?: string[];
  disabled?: boolean;
  type?: "number" | "text" | "password" | "time" | "date" | "datetime-local";
  columns?: 1 | 2 | 3 | 4 | 6;
  children?: FormControlType[];
  bordered?: boolean;
}
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
