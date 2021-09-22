import FormControlParser from "components/FormControlParser";
import { FC, useCallback } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { FormControlType } from "shared/types/FormControlType";
import { getFormValue } from "shared/utils/getFormValue";

const FormGenerator: FC<{ schema: FormControlType[]; onSubmit?: (data: object) => void; className?: string }> = ({
  schema = [],
  onSubmit,
  className
}) => {
  const onSubmitForm = useCallback(
    (e: any) => {
      e.preventDefault();
      const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries());

      const formResult = getFormValue(formDataObj, schema);
      onSubmit && onSubmit(formResult);
    },
    [onSubmit, schema]
  );

  return schema.length ? (
    <Card body className={className}>
      <Form onSubmit={onSubmitForm}>
        {schema.map((item: FormControlType) => (
          <FormControlParser formControlItem={item} key={`parser-${item.id}`} />
        ))}
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  ) : (
    <h3 className="text-center">This form is empty</h3>
  );
};

export default FormGenerator;
