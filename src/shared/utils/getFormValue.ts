import { FormControlType } from "../types/FormControlType";

export const getFormLabel = (id: string, list: FormControlType[]): string => {
  let res: string | undefined;

  for (const item of list) {
    if (item.id === id) {
      res = item.label;
      break;
    } else if (item.children?.length) {
      res = getFormLabel(id, item.children);
      if (res) break;
    }
  }

  return res || "";
};

export const getFormValue = (formValue: object, schema: FormControlType[]) => {
  return Object.entries(formValue).map((entries: string[]) => ({
    question: getFormLabel(entries[0], schema),
    answer: entries[1]
  }));
};
