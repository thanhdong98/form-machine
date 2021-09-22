import AddControlButton from "components/AddControlButton";
import Tooltip from "components/Tooltip";
import FormControlDefaultValue from "shared/constants/ControlValueDefault";
import { FC, useContext } from "react";
import { Accordion, Col, Row, Button } from "react-bootstrap";
import { Download, Save } from "shared/icons";
import FormBuilderContext from "shared/types/FormBuilderContext";
import { ControlType, FormControlType } from "shared/types/FormControlType";
import { v4 } from "uuid";
import ToolboxItem from "./ToolboxItem";

const Toolbox: FC = () => {
  const { schema, setSchema, onSave } = useContext(FormBuilderContext);

  const addFormItem = (type: ControlType, afterId = "") => {
    if (afterId) {
      const afterIndex = schema.findIndex((formItem: FormControlType) => formItem.id === afterId);
      schema.splice(afterIndex + 1, 0, { ...FormControlDefaultValue[type], id: v4() });
      setSchema([...schema]);
    } else setSchema([...schema, { ...FormControlDefaultValue[type], id: v4() }]);
  };

  const deleteFormItem = (id: string) => setSchema(schema.filter((item: FormControlType) => item.id !== id));

  const editFormItem = (editingFormItem: FormControlType) => {
    if (editingFormItem) {
      const itemIndex = schema.findIndex((item) => item.id === editingFormItem.id);
      schema[itemIndex] = editingFormItem;

      setSchema([...schema]);
    }
  };

  const onMove = (id: string, isUp?: boolean) => {
    const index = schema.findIndex((item) => item.id === id);
    const swappedIndex = isUp ? index - 1 : index + 1;

    const tempItem = schema[swappedIndex];

    if (tempItem) {
      schema[swappedIndex] = schema[index];
      schema[index] = tempItem;
      setSchema([...schema]);
    }
  };

  const downloadTemplate = () => {
    const element = document.createElement("a");
    const textFile = new Blob([JSON.stringify(schema)], { type: "text/json" }); //pass data from localStorage API to blob
    element.href = URL.createObjectURL(textFile);
    element.download = "formTemplates.json";
    document.body.appendChild(element);
    element.click();
  };

  return schema.length ? (
    <>
      <Row className="justify-content-between mb-3">
        <Col>
          <h1>Edit</h1>
        </Col>
        <Col md={2} className="d-flex align-items-center">
          <Tooltip text="Download template">
            <Button variant="outline-info" className="w-100" onClick={downloadTemplate}>
              <Download height="100%" />
            </Button>
          </Tooltip>
        </Col>
        <Col md={2} className="d-flex align-items-center">
          <Tooltip text="Save template">
            <Button variant="outline-info" className="w-100" onClick={onSave}>
              <Save height="100%" />
            </Button>
          </Tooltip>
        </Col>
      </Row>
      <Accordion flush={false}>
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
    </>
  ) : (
    <AddControlButton onAdd={addFormItem}> Add Items </AddControlButton>
  );
};

export default Toolbox;
