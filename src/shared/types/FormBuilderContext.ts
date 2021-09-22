import { createContext } from "react";
import { FormControlType } from "./FormControlType";

export type FormBuilderContextType = {
  schema: FormControlType[];
  setSchema: (schema: FormControlType[]) => void;
  onSave?: () => void;
};

export const FormBuilderContext = createContext<FormBuilderContextType>({
  schema: [],
  setSchema: (schema: FormControlType[]) => {},
  onSave: () => {}
});

export default FormBuilderContext;
