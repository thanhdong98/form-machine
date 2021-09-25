import { FC, useContext } from "react";
import { Accordion, Button, Col, Row } from "react-bootstrap";
import { v4 } from "uuid";
import { AddControlButton, Tooltip } from "../../components";
import { ControlDefaultValue } from "../../shared/constants";
import { Download, Save } from "../../shared/icons";
import { ControlType, FormBuilderContext, FormControlType } from "../../shared/types";
import ToolboxItem from "./ToolboxItem";

const Toolbox: FC = () => {
  const { schema, setSchema, onSave } = useContext(FormBuilderContext);

  const addFormItem = (type: ControlType, afterId = "") => {
    if (afterId) {
      const afterIndex = schema.findIndex((formItem: FormControlType) => formItem.id === afterId);
      schema.splice(afterIndex + 1, 0, { ...ControlDefaultValue[type], id: v4() });
      setSchema([...schema]);
    } else setSchema([...schema, { ...ControlDefaultValue[type], id: v4() }]);
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
        <Col xs={4} lg={6}>
          <h1>Edit</h1>
        </Col>
        <Col xs={4} lg={3} className="d-flex align-items-center justify-content-end">
          <Tooltip text="Download template">
            <Button variant="outline-info" className="btn-control" onClick={downloadTemplate}>
              <Download height="100%" />
            </Button>
          </Tooltip>
        </Col>
        <Col xs={4} lg={3} className="d-flex align-items-center justify-content-end">
          <Tooltip text="Save template">
            <Button variant="outline-info" className="btn-control" onClick={onSave}>
              <Save height="100%" />
            </Button>
          </Tooltip>
        </Col>
      </Row>
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
    </>
  ) : (
    <AddControlButton onAdd={addFormItem}> Add Items </AddControlButton>
  );
};

export default Toolbox;
