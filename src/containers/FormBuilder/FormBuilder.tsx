import Toolbox from "containers/Toolbox";
import FormGenerator from "containers/FormGenerator";
import { FC, useState } from "react";
import { Row, Col } from "react-bootstrap";
import FormBuilderContext from "shared/types/FormBuilderContext";
import { FormControlType } from "shared/types/FormControlType";

const FormBuilder: FC<{ schema: FormControlType[], onSave?: (schema: FormControlType[]) => void }> = ({ schema = [], onSave }) => {
  const [formSchema, setFormSchema] = useState<FormControlType[]>(schema);

  const onSaveTemplate = () => onSave && onSave(formSchema);

  return (
    <FormBuilderContext.Provider value={{ schema: formSchema, setSchema: setFormSchema, onSave: onSaveTemplate }}>
      <Row className="my-5">
        <Col md={4}>
          <Toolbox />
        </Col>
        <Col md={8}>
          <FormGenerator schema={formSchema} />
        </Col>
      </Row>
    </FormBuilderContext.Provider>
  );
};

export default FormBuilder;
