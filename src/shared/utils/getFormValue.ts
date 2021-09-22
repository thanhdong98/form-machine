import { FormControlType } from "shared/types/FormControlType";

export const getFormLabel = (id: string, list: FormControlType[]): string => {
  let res: string | undefined;

  for (const item of list) {
    if (item.id === id) {
      res = item.label + " " + item.id;
      break;
    } else if (item.children?.length) {
      res = getFormLabel(id, item.children);
      if (res) break;
    }
  }

  return res || "";
};

export const getFormValue = (formValue: object, schema: FormControlType[]) => {
  let result: object = {};
  Object.entries(formValue).forEach((entries: string[]) => {
    result = {
      ...result,
      [getFormLabel(entries[0], schema)]: entries[1]
    };
  });

  return result;
};
