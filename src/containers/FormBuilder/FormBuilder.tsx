import { FC, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import FormBuilderContext from "../../shared/types/FormBuilderContext";
import { FormControlType } from "../../shared/types/FormControlType";
import FormGenerator from "../FormGenerator";
import Toolbox from "../Toolbox";

const FormBuilder: FC<{ schema: FormControlType[]; onSave?: (schema: FormControlType[]) => void }> = ({
  schema = [],
  onSave
}) => {
  const [formSchema, setFormSchema] = useState<FormControlType[]>(schema);

  const onSaveTemplate = () => onSave && onSave(formSchema);

  return (
    <FormBuilderContext.Provider value={{ schema: formSchema, setSchema: setFormSchema, onSave: onSaveTemplate }}>
      <Row className="my-5 text-left">
        <Col md={4}>
          <Toolbox />
        </Col>
        <Col md={8}>
          <Card body>
            <FormGenerator schema={formSchema} />
          </Card>
        </Col>
      </Row>
    </FormBuilderContext.Provider>
  );
};

export default FormBuilder;
