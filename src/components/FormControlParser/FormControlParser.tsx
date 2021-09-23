import { FC, useMemo } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { ControlType, FormControlType } from "../../shared/types/FormControlType";
import Checkboxs from "./Checboxs";

const FormControlParser: FC<{ formControlItem: FormControlType }> = ({ formControlItem }) => {
  const { label = "", ...rest } = formControlItem;

  const component: JSX.Element = useMemo(() => {
    const {
      controlType,
      defaultValue,
      placeholder,
      type,
      // value,
      disabled,
      values = [],
      id,
      children = [],
      columns = 1,
      bordered = false
    } = rest;
    switch (controlType) {
      case ControlType.Checkbox:
        return (
          <Checkboxs id={id} defaultValue={(defaultValue || []) as string[]} disabled={disabled} values={values} />
        );
      case ControlType.Radio:
        return (
          <>
            {values.map((val: string, index: number) => (
              <Form.Check
                id={`radio-${id}-${val}`}
                defaultChecked={val === defaultValue}
                type="radio"
                key={`${id}-${val}-${index}`}
                value={val}
                inline
                name={id}
                label={val}
                disabled={disabled}
              />
            ))}
          </>
        );
      case ControlType.TextArea:
        return (
          <Form.Control
            as="textarea"
            rows={4}
            placeholder={placeholder}
            defaultValue={(defaultValue || "").toString()}
            name={id}
            disabled={disabled}
          />
        );
      case ControlType.Select:
        return (
          <Form.Select defaultValue={(defaultValue || "").toString()} name={id} disabled={disabled}>
            {values.map((opt: string, index: number) => (
              <option key={`${id}-${opt}-${index}`} value={opt}>
                {opt}
              </option>
            ))}
          </Form.Select>
        );
      case ControlType.Input:
        return (
          <Form.Control
            disabled={disabled}
            type={type?.toString()}
            defaultValue={(defaultValue || "").toString()}
            placeholder={placeholder}
            name={id}
          />
        );
      default:
        return bordered ? (
          <Card className="mb-3">
            {label && <Card.Header>{label}</Card.Header>}
            <Card.Body>
              <Row>
                {children.map((item: FormControlType) => (
                  <Col key={`${id}-${item.id}`} xs={12 / columns}>
                    <FormControlParser formControlItem={item} />
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        ) : (
          <>
            <Row>
              <Col>
                <h2>{label}</h2>
              </Col>
            </Row>
            <Row>
              {children.map((item: FormControlType) => (
                <Col key={`${id}-${item.id}`} xs={12 / columns}>
                  <FormControlParser formControlItem={item} />
                </Col>
              ))}
            </Row>
          </>
        );
    }
  }, [rest, label]);

  return formControlItem.controlType === ControlType.Section ? (
    component
  ) : (
    <Form.Group as={Col} className="mb-4">
      {label && <Form.Label>{formControlItem.label}</Form.Label>}
      <div> {component} </div>
    </Form.Group>
  );
};
export default FormControlParser;
