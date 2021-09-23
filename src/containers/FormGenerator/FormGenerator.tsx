import { FC, useCallback } from "react";
import { Button, Form } from "react-bootstrap";
import FormControlParser from "../../components/FormControlParser";
import { FormControlType } from "../../shared/types/FormControlType";
import { getFormValue } from "../../shared/utils/getFormValue";

const FormGenerator: FC<{ schema: FormControlType[]; onSubmit?: (data: object) => void; className?: string }> = ({
  schema = [],
  onSubmit,
  className = ""
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
    <Form onSubmit={onSubmitForm} className={`${className} text-left`}>
      {schema.map((item: FormControlType) => (
        <FormControlParser formControlItem={item} key={`parser-${item.id}`} />
      ))}
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  ) : (
    <h3 className="text-center">This form is empty</h3>
  );
};

export default FormGenerator;
