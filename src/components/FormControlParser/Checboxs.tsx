import { FC, useState } from "react";
import { Form } from "react-bootstrap";

const Checkboxs: FC<{ id?: string; defaultValue: string[]; disabled?: boolean; values: string[] }> = ({
  id = "",
  defaultValue,
  disabled = false,
  values = []
}) => {
  const [value, setValue] = useState<string[]>(defaultValue);

  const onChecke = (checked: boolean, val: string) => {
    if (checked) {
      setValue([...value, val]);
    } else {
      setValue(value.filter((x) => x !== val));
    }
  };
  return (
    <>
      <Form.Control type="hidden" name={id} value={value} />
      {values.map((val: string, index: number) => (
        <Form.Check
          id={`checkbox-${id}-${val}`}
          type="checkbox"
          key={`${id}-${val}-${index}`}
          value={val}
          inline
          disabled={disabled}
          defaultChecked={defaultValue.includes(val)}
          label={val}
          onChange={(e: any) => onChecke(e.target.checked, val)}
        />
      ))}
    </>
  );
};

export default Checkboxs;
