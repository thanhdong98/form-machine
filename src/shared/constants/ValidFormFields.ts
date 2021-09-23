import { ControlType } from "../types/FormControlType";
import { FormFieldType } from "../types/FormFieldType";

const ValidFormFields: Record<ControlType, FormFieldType[]> = {
  Input: [
    FormFieldType.controlType,
    FormFieldType.type,
    FormFieldType.label,
    FormFieldType.placeholder,
    FormFieldType.defaultValue,
    FormFieldType.disabled
  ],
  Checkbox: [
    FormFieldType.controlType,
    FormFieldType.label,
    FormFieldType.defaultValue,
    FormFieldType.values,
    FormFieldType.disabled
  ],
  Radio: [
    FormFieldType.controlType,
    FormFieldType.label,
    FormFieldType.defaultValue,
    FormFieldType.values,
    FormFieldType.disabled
  ],
  Select: [
    FormFieldType.controlType,
    FormFieldType.label,
    FormFieldType.defaultValue,
    FormFieldType.values,
    FormFieldType.disabled
  ],
  TextArea: [FormFieldType.controlType, FormFieldType.label, FormFieldType.defaultValue, FormFieldType.disabled],
  Section: [FormFieldType.label, FormFieldType.columns, FormFieldType.bordered, FormFieldType.children]
};

export default ValidFormFields;
