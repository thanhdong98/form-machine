export enum ControlType {
  Input = "Input",
  Checkbox = "Checkbox",
  Radio = "Radio",
  Select = "Select",
  TextArea = "TextArea",
  Section = "Section"
}

export enum InputFieldType {
  number = "number",
  text = "text",
  password = "password",
  time = "time",
  date = "date",
  datetime = "datetime-local"
}

export interface FormControlType {
  id?: string;
  controlType: ControlType;
  label?: string;
  value?: string | boolean | number | string[];
  placeholder?: string;
  defaultValue?: string | number | string[];
  values?: string[];
  disabled?: boolean;
  type?: InputFieldType;
  columns?: 1 | 2 | 3 | 4 | 6;
  children?: FormControlType[];
  bordered?: boolean;
}
