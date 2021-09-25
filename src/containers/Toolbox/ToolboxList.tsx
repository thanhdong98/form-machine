import { FC } from "react";
import { Accordion } from "react-bootstrap";
import { v4 } from "uuid";
import { AddControlButton } from "../../components";
import { ControlDefaultValue } from "../../shared/constants";
import { ControlType, FormControlType } from "../../shared/types";
import ToolboxItem from "./ToolboxItem";

const ToolboxList: FC<{
  schema: FormControlType[];
  editSchema: (schema: FormControlType[]) => void;
}> = ({ schema = [], editSchema }) => {
  const addFormItem = (type: ControlType, afterId = "") => {
    if (afterId) {
      const afterIndex = schema.findIndex((formItem: FormControlType) => formItem.id === afterId);
      schema.splice(afterIndex + 1, 0, { ...ControlDefaultValue[type], id: v4() });
      editSchema([...schema]);
    } else editSchema([...schema, { ...ControlDefaultValue[type], id: v4() }]);
  };

  const deleteFormItem = (id: string) => editSchema(schema.filter((item: FormControlType) => item.id !== id));

  const editFormItem = (editingFormItem: FormControlType) => {
    if (editingFormItem) {
      const itemIndex = schema.findIndex((item) => item.id === editingFormItem.id);
      schema[itemIndex] = editingFormItem;

      editSchema([...schema]);
    }
  };

  const onMove = (id: string, isUp?: boolean) => {
    const index = schema.findIndex((item) => item.id === id);
    const swappedIndex = isUp ? index - 1 : index + 1;

    const tempItem = schema[swappedIndex];

    if (tempItem) {
      schema[swappedIndex] = schema[index];
      schema[index] = tempItem;
      editSchema([...schema]);
    }
  };

  return schema.length ? (
    <Accordion flush={false} className="mb-2">
      {schema.map((formItem: FormControlType) => (
        <ToolboxItem
          key={`toolbox-${formItem.id}`}
          addFormItem={addFormItem}
          deleteFormItem={deleteFormItem}
          editFormItem={editFormItem}
          formItem={formItem}
          onMove={onMove}
        />
      ))}
    </Accordion>
  ) : (
    <AddControlButton onAdd={addFormItem}> Add Item </AddControlButton>
  );
};

export default ToolboxList;
