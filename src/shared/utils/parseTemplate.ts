import { FormControlType } from "../types/FormControlType";

export const parseTemplate = (templateStr = ""): FormControlType[] => {
  try {
    const formSchema = JSON.parse(templateStr) as FormControlType[];
    return formSchema;
  } catch (err: any) {
    console.log("Cannot convert template with error: ", err);
  }

  return [];
};
