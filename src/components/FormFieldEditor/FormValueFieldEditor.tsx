import { FC } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { Trash } from "../../shared/icons";

const FormValueFields: FC<{ values?: string[]; onChange: (value: string[]) => void }> = ({ values = [], onChange }) => {
  const onChangeField = (e: any, i: number) => {
    values[i] = e.target.value;
    onChange([...values]);
  };

  const onAddField = () => {
    onChange([...values, ""]);
  };

  const onDeleteField = (index: number) => {
    values.splice(index, 1);
    onChange([...values]);
  };

  return (
    <>
      {values.map((val: string, index: number) => (
        <Row className="mb-2" key={`val-${index}`}>
          <Col xs={9} md={8} lg={9}>
            <Form.Control type="text" value={val} onChange={(e) => onChangeField(e, index)} name="defaultValue" />
          </Col>
          <Col xs={3} md={4} lg={3}>
            <Button className="w-100 h-100" variant="danger" onClick={() => onDeleteField(index)} size="sm">
              <Trash height={20} />
            </Button>
          </Col>
        </Row>
      ))}
      <Row>
        <Col xs={12} onClick={onAddField}>
          <Button variant="success" className="w-100" size="lg">
            Add Value
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default FormValueFields;
