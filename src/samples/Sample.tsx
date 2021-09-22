import FormBuilder from "containers/FormBuilder";
import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { ControlType, FormControlType, InputFieldType } from "shared/types/FormControlType";
import FormGeneratorSample from "samples/FormGeneratorSample";

const Sample = () => {
  const [isFormBuilder, toggleShowFormBuilder] = useState(true);

  const data: FormControlType[] = [
    {
      controlType: ControlType.Input,
      defaultValue: "",
      disabled: false,
      label: "Input Field",
      placeholder: "Placeholder",
      id: "d9d4e1b9-8760-4aaa-81be-041333cbf0e3"
    },
    {
      controlType: ControlType.Section,
      children: [
        {
          controlType: ControlType.Checkbox,
          defaultValue: "",
          disabled: false,
          label: "Checkbox Field",
          placeholder: "",
          id: "166836d1-14f2-4a9e-99e4-2acb16bc10aa",
          values: ["One", "Two", "Three"]
        },
        {
          controlType: ControlType.Radio,
          values: ["One", "Two", "Three"],
          disabled: false,
          label: "Radio Field",
          id: "38771b38-86b8-474a-8251-b94268df81e6"
        },
        {
          controlType: ControlType.TextArea,
          value: "",
          values: [],
          disabled: false,
          label: "Area Field",
          id: "4e6ad7ab-d286-4504-890f-e4ca56ec6c39",
          defaultValue: "Hello world!"
        },
        {
          controlType: ControlType.Select,
          values: ["One", "Two", "Three"],
          disabled: false,
          label: "Select Field",
          id: "b5027731-e808-47c2-a7d1-871cac6c9fc4"
        }
      ],
      label: "Section",
      bordered: false,
      id: "9d13cfe5-e145-4d74-b73f-993004fbc8e4",
      columns: 2
    },
    {
      controlType: ControlType.Section,
      children: [
        {
          controlType: ControlType.Input,
          defaultValue: "",
          disabled: false,
          label: "Datetime",
          placeholder: "",
          id: "e306440b-2864-4561-b514-3b02173b2dbf",
          type: InputFieldType.datetime
        },
        {
          controlType: ControlType.Input,
          defaultValue: "",
          disabled: false,
          label: "Date",
          placeholder: "",
          id: "40e9107e-b0ea-4193-aef9-952e9def8f1b",
          type: InputFieldType.date
        },
        {
          controlType: ControlType.Input,
          defaultValue: "",
          disabled: false,
          label: "Time",
          placeholder: "",
          id: "fafeb28f-a1f0-4cc7-acdf-a7ad798477af",
          type: InputFieldType.time
        },
        {
          controlType: ControlType.Input,
          defaultValue: "dongntuyen",
          disabled: false,
          label: "Secure",
          placeholder: "Password",
          id: "e9befa72-bb25-4920-8f73-1868a9c9752b",
          type: InputFieldType.password
        },
        {
          controlType: ControlType.Input,
          defaultValue: "111",
          disabled: true,
          label: "Number",
          placeholder: "",
          id: "baf7756f-a9e2-4fa3-9635-66fae54634cd",
          type: InputFieldType.number
        }
      ],
      label: "Section with Border",
      bordered: true,
      id: "726b4e49-d176-4297-83ca-0be026a66980"
    }
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center my-3"> Demo Form Machine </h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <Button size="lg" onClick={() => toggleShowFormBuilder(!isFormBuilder)} className="w-100 my-3">
            Show {isFormBuilder ? "Form Generator" : "Form Builder"}
          </Button>
        </Col>
      </Row>
      {isFormBuilder ? (
        <FormBuilder
          schema={data}
          onSave={(template: object) => {
            alert("Templates was saved! Check console!");
            console.log(template);
          }}
        />
      ) : (
        <FormGeneratorSample />
      )}
    </Container>
  );
};

export default Sample;
