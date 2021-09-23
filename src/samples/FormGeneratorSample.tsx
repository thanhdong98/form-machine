import FormGenerator from "containers/FormGenerator";
import { FC, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { FormControlType } from "shared/types/FormControlType";
import { parseTemplate } from "shared/utils/parseTemplate";

const FormGeneratorSample: FC = () => {
  const [schema, setSchema] = useState<FormControlType[]>([]);

  const onUpload = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.style.display = "none";
    fileInput.onchange = (e: any) => {
      const file = e.target.files[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();

      reader.onload = (event: any) => {
        var contents = event.target.result;
        const formSchema = parseTemplate(contents);
        formSchema?.length ? setSchema(formSchema) : alert("Please choose correct template!");
        document.body.removeChild(fileInput);
      };
      reader.readAsText(file);
    };
    document.body.appendChild(fileInput);
    fileInput.click();
  };

  return (
    <>
      <Row className="mb-4">
        <Col md={10}>
          <h2>Form Generator</h2>
        </Col>
        <Col md={2}>
          <Button variant="outline-success" onClick={onUpload} className="w-100">
            Upload Template
          </Button>
        </Col>

        <Col md={12} className="text-center">
          <hr />
          <i> (Download form template from Form Builder and upload to test) </i>
          <hr />
        </Col>
      </Row>
      <FormGenerator
        schema={schema}
        className="my-4"
        onSubmit={(result: object) =>
          alert("Thank for your submission! The result is:\n" + (result as any[]).map((r) => r.question + ": " + r.answer).join("\n"))
        }
      />
    </>
  );
};

export default FormGeneratorSample;
