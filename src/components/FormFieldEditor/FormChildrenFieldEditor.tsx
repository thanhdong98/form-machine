import { FC } from "react";
import { Accordion } from "react-bootstrap";
import { v4 } from "uuid";
import ToolboxItem from "../../containers/Toolbox/ToolboxItem";
import { ControlDefaultValue } from "../../shared/constants";
import { ControlType, FormControlType } from "../../shared/types";
import AddControlButton from "../AddControlButton";

const FormChildrenFieldEditor: FC<{ formControlItem: FormControlType; editFormItem: (item: FormControlType) => void }> =
  ({ formControlItem, editFormItem }) => {
    const { children = [] } = formControlItem;
    const addChild = (type: ControlType, afterId?: string) => {
      const newItem = { ...ControlDefaultValue[type], id: v4() };
      if (afterId) {
        const afterIndex = children.findIndex((item: FormControlType) => item.id === afterId);
        children.splice(afterIndex + 1, 0, newItem);
        editFormItem({ ...formControlItem, children: [...children] });
      } else editFormItem({ ...formControlItem, children: [...children, newItem] });
    };

    const deleteChild = (id: string) =>
      editFormItem({ ...formControlItem, children: children.filter((item: FormControlType) => item.id !== id) });

    const editChild = (editingFormItem: FormControlType) => {
      if (editingFormItem) {
        const itemIndex = children.findIndex((item) => item.id === editingFormItem.id);
        children[itemIndex] = editingFormItem;

        editFormItem({ ...formControlItem, children: [...children] });
      }
    };

    const onMove = (id: string, isUp?: boolean) => {
      const index = children.findIndex((item) => item.id === id);
      const swappedIndex = isUp ? index - 1 : index + 1;

      const tempItem = children[swappedIndex];

      if (tempItem) {
        children[swappedIndex] = children[index];
        children[index] = tempItem;
        editFormItem({ ...formControlItem, children: [...children] });
      }
    };

    return formControlItem.children?.length ? (
      <Accordion flush={false}>
        {formControlItem.children?.map((formItem: FormControlType) => (
          <ToolboxItem
            key={`toolbox-${formItem.id}`}
            addFormItem={addChild}
            deleteFormItem={deleteChild}
            editFormItem={editChild}
            formItem={formItem}
            onMove={onMove}
          />
        ))}
      </Accordion>
    ) : (
      <AddControlButton onAdd={addChild}> Add Child </AddControlButton>
    );
  };

export default FormChildrenFieldEditor;
