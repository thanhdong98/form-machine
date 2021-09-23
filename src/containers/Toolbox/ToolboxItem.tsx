import { FC, useState } from "react";
import { Accordion } from "react-bootstrap";
import ActionPopover from "../../components/ActionPopover";
import FormFieldEditor from "../../components/FormFieldEditor";
import { ControlType, FormControlType } from "../../shared/types/FormControlType";

const ToolboxItem: FC<{
  formItem: FormControlType;
  addFormItem: (item: ControlType, afterId?: string) => void;
  deleteFormItem: (id: string) => void;
  editFormItem: (item: FormControlType) => void;
  onMove: (id: string, isUp?: boolean) => void;
}> = ({ formItem, addFormItem, deleteFormItem, editFormItem, onMove }) => {
  const [showAction, toggleShowAction] = useState(false);

  return (
    <Accordion.Item
      eventKey={formItem.id || ""}
      key={formItem.id}
      className="position-relative"
      onMouseEnter={() => {
        toggleShowAction(true);
      }}
      onMouseLeave={() => toggleShowAction(false)}
    >
      <ActionPopover
        show={showAction}
        onAdd={(control: ControlType) => {
          addFormItem(control, formItem.id);
          toggleShowAction(false);
        }}
        onDelete={() => {
          deleteFormItem(formItem?.id || "");
          toggleShowAction(false);
        }}
        onMove={(isUp?: boolean) => {
          onMove(formItem?.id || "", isUp);
          toggleShowAction(false);
        }}
      />
      <Accordion.Header>
        {formItem?.controlType} : {formItem?.label}
      </Accordion.Header>
      <Accordion.Body>
        <FormFieldEditor formControlItem={formItem} editFormItem={editFormItem} />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default ToolboxItem;
