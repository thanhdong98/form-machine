import { FC, useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Tooltip } from "../../components";
import { Download, Save } from "../../shared/icons";
import { FormBuilderContext } from "../../shared/types";
import ToolboxList from "./ToolboxList";

const Toolbox: FC = () => {
  const { schema, setSchema, onSave } = useContext(FormBuilderContext);

  const downloadTemplate = () => {
    const element = document.createElement("a");
    const textFile = new Blob([JSON.stringify(schema)], { type: "text/json" });
    element.href = URL.createObjectURL(textFile);
    element.download = "formTemplates.json";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
      <Row className="justify-content-between mb-3">
        <Col xs={schema.length ? 4 : 12} lg={schema.length ? 6 : 12}>
          <h1>Edit</h1>
        </Col>
        {!!schema.length && (
          <>
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
          </>
        )}
      </Row>
      <ToolboxList schema={schema} editSchema={setSchema} />
    </>
  );
};

export default Toolbox;
