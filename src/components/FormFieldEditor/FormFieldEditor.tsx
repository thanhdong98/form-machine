import { FC, ReactElement, useCallback, useMemo } from "react";
import { Form } from "react-bootstrap";
import ValidFormFields from "../../shared/constants/ValidFormFields";
import { ControlType, FormControlType, InputFieldType } from "../../shared/types/FormControlType";
import { FormFieldType } from "../../shared/types/FormFieldType";
import FormChildrenFieldEditor from "./FormChildrenFieldEditor";
import FormValueFieldEditor from "./FormValueFieldEditor";

const FormFieldEditor: FC<{ formControlItem: FormControlType; editFormItem: (formItem: FormControlType) => void }> = ({
  formControlItem,
  editFormItem
}) => {
  const onChange = useCallback(
    (e: any) => {
      editFormItem({
        ...formControlItem,
        [e.target.name]: ["disabled", "bordered"].includes(e.target.name) ? e.target.checked : e.target.value
      });
    },
    [formControlItem, editFormItem]
  );

  const FormFieldLabels: Record<FormFieldType, string> = {
    disabled: "Disable",
    controlType: "Element Type",
    label: "Title",
    placeholder: "Placholder",
    defaultValue: "Default Value(s)",
    values: "Values",
    value: "Value",
    type: "Type",
    columns: "Columns",
    children: "Control Items",
    bordered: "Contain Border"
  };

  const FormFieldInputs: Record<FormFieldType, ReactElement> = useMemo(
    () => ({
      disabled: (
        <Form.Check
          label="Disabled"
          defaultChecked={formControlItem.disabled}
          name="disabled"
          id={`disabledField-${formControlItem.id}`}
          onChange={onChange}
        />
      ),
      controlType: (
        <Form.Select defaultValue={formControlItem.controlType} onChange={onChange} name="controlType">
          {Object.values(ControlType).map((item: ControlType) => (
            <option value={item} key={`controlType-${formControlItem.id}-${item}`}>
              {item.toString()}
            </option>
          ))}
        </Form.Select>
      ),
      label: (
        <Form.Control type="text" placeholder="Title" value={formControlItem.label} onChange={onChange} name="label" />
      ),
      placeholder: (
        <Form.Control
          type="text"
          placeholder="placeholder"
          value={formControlItem.placeholder}
          onChange={onChange}
          name="placeholder"
        />
      ),
      defaultValue: (
        <Form.Control
          type={formControlItem.controlType === ControlType.Input ? formControlItem.type : "text"}
          placeholder="Default Value"
          value={formControlItem.defaultValue}
          onChange={onChange}
          name="defaultValue"
        />
      ),
      values: (
        <FormValueFieldEditor
          values={formControlItem.values}
          onChange={(values: string[]) =>
            editFormItem({
              ...formControlItem,
              values: values
            })
          }
        />
      ),
      type: (
        <Form.Select onChange={onChange} value={formControlItem.type} name="type">
          {Object.values(InputFieldType).map((field: string) => (
            <option key={`type-${formControlItem.id}-${field}`} value={field}>
              {field}
            </option>
          ))}
        </Form.Select>
      ),
      value: <div>not implement yet</div>,
      children: <FormChildrenFieldEditor editFormItem={editFormItem} formControlItem={formControlItem} />,
      columns: (
        <Form.Select size="sm" onChange={onChange} value={formControlItem.columns} name="columns">
          {[1, 2, 3, 4, 6].map((val) => (
            <option key={`columns-${formControlItem.id}-${val}`} value={val}>
              {val}
            </option>
          ))}
        </Form.Select>
      ),
      bordered: (
        <Form.Check
          label="Bordered"
          defaultChecked={formControlItem.bordered}
          name="bordered"
          id={`borderedField-${formControlItem.id}`}
          onChange={onChange}
        />
      )
    }),
    [formControlItem, onChange, editFormItem]
  );

  return (
    <>
      {ValidFormFields[formControlItem.controlType].map((formField: FormFieldType) => (
        <Form.Group key={`group-${formControlItem.id}-${formField}`} className="mb-2">
          <Form.Label>{FormFieldLabels[formField]}</Form.Label>
          {FormFieldInputs[formField]}
        </Form.Group>
      ))}
    </>
  );
};

export default FormFieldEditor;
