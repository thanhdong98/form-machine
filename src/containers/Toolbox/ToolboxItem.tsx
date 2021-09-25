import { FC, useState } from "react";
import { Accordion } from "react-bootstrap";
import { ActionPopover, FormFieldEditor } from "../../components";
import { ControlType, FormControlType } from "../../shared/types";

const ToolboxItem: FC<{
  formItem: FormControlType;
  addFormItem: (item: ControlType, afterId?: string) => void;
  deleteFormItem: (id: string) => void;
  editFormItem: (item: FormControlType) => void;
  onMove: (id: string, isUp?: boolean) => void;
}> = ({ formItem, addFormItem, deleteFormItem, editFormItem, onMove }) => {
  const [showAction, toggleShowAction] = useState<"controls" | "actions">();

  return (
    <Accordion.Item
      eventKey={formItem.id || ""}
      key={formItem.id}
      className="position-relative"
      onMouseEnter={() => toggleShowAction("actions")}
      onTouchEnd={() => toggleShowAction("actions")}
      onMouseLeave={() => toggleShowAction(undefined)}
    >
      <ActionPopover
        show={showAction}
        showControls={() => toggleShowAction("controls")}
        onAdd={(control: ControlType) => {
          addFormItem(control, formItem.id);
          toggleShowAction(undefined);
        }}
        onDelete={() => {
          deleteFormItem(formItem?.id || "");
          toggleShowAction(undefined);
        }}
        onMove={(isUp?: boolean) => {
          onMove(formItem?.id || "", isUp);
          toggleShowAction(undefined);
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
