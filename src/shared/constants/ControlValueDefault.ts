import { ControlType, FormControlType } from "../types/FormControlType";

const CheckboxDefaultValue: FormControlType = {
  controlType: ControlType.Checkbox,
  defaultValue: [],
  values: [],
  disabled: false,
  label: ""
};

const RadioDefaultValue: FormControlType = {
  controlType: ControlType.Radio,
  values: [],
  disabled: false,
  label: ""
};

const InputDefaultValue: FormControlType = {
  controlType: ControlType.Input,
  defaultValue: "",
  disabled: false,
  label: "",
  placeholder: ""
};

const TextAreaDefaultValue: FormControlType = {
  controlType: ControlType.TextArea,
  value: "",
  values: [],
  disabled: false,
  label: ""
};

const SelectDefaultValue: FormControlType = {
  controlType: ControlType.Select,
  values: [],
  disabled: false,
  label: ""
};

const SectionDefaultValue: FormControlType = {
  controlType: ControlType.Section,
  children: [],
  label: "",
  bordered: false
};

const FormControlDefaultValue: Record<ControlType, FormControlType> = {
  Checkbox: CheckboxDefaultValue,
  Radio: RadioDefaultValue,
  Input: InputDefaultValue,
  TextArea: TextAreaDefaultValue,
  Select: SelectDefaultValue,
  Section: SectionDefaultValue
};

export default FormControlDefaultValue;
