# Form Machine - Build Form Quickly and Effectively
- Building Form quickly and saving the Form template as json schema.
- Rendering Form by the json schema (support converting string to schema object). Get form submitted result.
- [Demo page](https://thanhdong98.github.io/form-machine/)

```javascript
import { FormBuilder, FormGenerator } from "form-machine";

const App = () => {
  const data = [/* schema */];

  return (
    <div>
      <FormBuilder />
      <FormGenerator schema={data}/>
    </div>
  );
}
```
## Installation
With `yarn`
```bash
$ yarn add form-machine
```
or with `npm`
```bash
$ npm install form-machine
```

## FormBuilder
### With existing template (to update/clone template).
```javascript
import { FormBuilder } from "form-machine";

const App = () => {
  return (
    <FormBuilder
      schema={[
        {
          controlType: "Input",
          defaultValue: "",
          disabled: false,
          label: "Input Field",
          placeholder: "Placeholder",
          id: "d9d4e1b9-8760-4aaa-81be-041333cbf0e3"
        },
        {
          controlType: "Section",
          children: [
            {
              controlType: "Checkbox",
              defaultValue: "",
              disabled: false,
              label: "Checkbox Field",
              placeholder: "",
              id: "166836d1-14f2-4a9e-99e4-2acb16bc10aa",
              values: ["One", "Two", "Three"]
            },
            {
              controlType: "Radio",
              values: ["One", "Two", "Three"],
              disabled: false,
              label: "Radio Field",
              id: "38771b38-86b8-474a-8251-b94268df81e6"
            },
            {
              controlType: "TextArea",
              value: "",
              values: [],
              disabled: false,
              label: "Area Field",
              id: "4e6ad7ab-d286-4504-890f-e4ca56ec6c39",
              defaultValue: "Hello world!"
            },
            {
              controlType: "Select",
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
          controlType: "Section",
          children: [
            {
              controlType: "Input",
              defaultValue: "",
              disabled: false,
              label: "Datetime",
              placeholder: "",
              id: "e306440b-2864-4561-b514-3b02173b2dbf",
              type: "datetime-local"
            },
            {
              controlType: "Input",
              defaultValue: "",
              disabled: false,
              label: "Date",
              placeholder: "",
              id: "40e9107e-b0ea-4193-aef9-952e9def8f1b",
              type: "date"
            },
            {
              controlType: "Input",
              defaultValue: "",
              disabled: false,
              label: "Time",
              placeholder: "",
              id: "fafeb28f-a1f0-4cc7-acdf-a7ad798477af",
              type: "time"
            },
            {
              controlType: "Input",
              defaultValue: "dongntuyen",
              disabled: false,
              label: "Secure",
              placeholder: "Password",
              id: "e9befa72-bb25-4920-8f73-1868a9c9752b",
              type: "password"
            },
            {
              controlType: "Input",
              defaultValue: "111",
              disabled: true,
              label: "Number",
              placeholder: "",
              id: "baf7756f-a9e2-4fa3-9635-66fae54634cd",
              type: "number"
            }
          ],
          label: "Section with Border",
          bordered: true,
          id: "726b4e49-d176-4297-83ca-0be026a66980"
        }
      ]}
    />
  );
}
```


### Without existing template (to create new template).
```javascript
import { FC } from 'react';
import { FormBuilder } from "form-machine";

const App: FC = () => (
  <FormBuilder />
);
```


### Saving template.
```javascript
import { FormBuilder } from "form-machine";

const App = () => (
  <FormBuilder  
    onSave={template => console.log(template)}
  />
);
```


## Form Generator
### Examples
```javascript
import { FormGenerator } from "form-machine";

const App = () => (
  <FormGenerator
    schema={[
      {
        controlType: "Input",
        defaultValue: "",
        disabled: false,
        label: "Input Field",
        placeholder: "Placeholder",
        id: "d9d4e1b9-8760-4aaa-81be-041333cbf0e3"
      }
    ]}
    onSubmit={(result) => console.log(result)}
  />
);
```


## Template Schema
### Schema Type
```typescript
 type FormControlType = {
  id: string, // unique
  controlType: 'Input' | 'Checkbox' | 'Radio' | 'Select' | 'TextArea' |'Section',
  label: string,
  placeholder: string,
  defaultValue: string | number | string[],
  values: string[], // for Multi options (Select, Radio, Checkbox)
  disabled: boolean,
  type: 'number' | 'text' | 'password' | 'time' | 'date' | 'datetime', // for Input
  columns: 1 | 2 | 3 | 4 | 6, // for Section
  bordered: boolean // for Section
  children: FormControlType[], // for Section
 }
```


### Schema Sample
```javascript
 {
      controlType: "Input",
      defaultValue: "",
      disabled: false,
      label: "Input Field",
      placeholder: "Placeholder",
      id: "d9d4e1b9-8760-4aaa-81be-041333cbf0e3"
    },
    {
      controlType: "Section",
      children: [
        {
          controlType: "Checkbox",
          defaultValue: "",
          disabled: false,
          label: "Checkbox Field",
          placeholder: "",
          id: "166836d1-14f2-4a9e-99e4-2acb16bc10aa",
          values: ["One", "Two", "Three"]
        },
        {
          controlType: "Radio",
          values: ["One", "Two", "Three"],
          disabled: false,
          label: "Radio Field",
          id: "38771b38-86b8-474a-8251-b94268df81e6"
        },
        {
          controlType: "TextArea",
          value: "",
          values: [],
          disabled: false,
          label: "Area Field",
          id: "4e6ad7ab-d286-4504-890f-e4ca56ec6c39",
          defaultValue: "Hello world!"
        },
        {
          controlType: "Select",
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
      controlType: "Section",
      children: [
        {
          controlType: "Input",
          defaultValue: "",
          disabled: false,
          label: "Datetime",
          placeholder: "",
          id: "e306440b-2864-4561-b514-3b02173b2dbf",
          type: "datetime-local"
        },
        {
          controlType: "Input",
          defaultValue: "",
          disabled: false,
          label: "Date",
          placeholder: "",
          id: "40e9107e-b0ea-4193-aef9-952e9def8f1b",
          type: "date"
        },
        {
          controlType: "Input",
          defaultValue: "",
          disabled: false,
          label: "Time",
          placeholder: "",
          id: "fafeb28f-a1f0-4cc7-acdf-a7ad798477af",
          type: "time"
        },
        {
          controlType: "Input",
          defaultValue: "dongntuyen",
          disabled: false,
          label: "Secure",
          placeholder: "Password",
          id: "e9befa72-bb25-4920-8f73-1868a9c9752b",
          type: "password"
        },
        {
          controlType: "Input",
          defaultValue: "111",
          disabled: true,
          label: "Number",
          placeholder: "",
          id: "baf7756f-a9e2-4fa3-9635-66fae54634cd",
          type: "number"
        }
      ],
      label: "Section with Border",
      bordered: true,
      id: "726b4e49-d176-4297-83ca-0be026a66980"
    }
  ]
```

### Submitted result

- The submitted result is an array of items containing a question and an answer.
- Examples:
```javascript
  [
    { question: "What 's your name", answer: "NTDong" },
    { question: "Gender", answer: "Male"},
    { question: "Job", answer: "Fullstack Developer"},
    { question: "Major", answer: "C#, ReactJS"}
  ]
````


## Feature

- [x] [Demo Form Machine](https://thanhdong98.github.io/form-machine/)
- [x] Typescript Support
- [ ] Unit test (not implement yet)