import * as yup from "yup";

import { errors, fields } from "./constants";

export const validationSchema = yup.object().shape({
  [fields.boardName]: yup.string().required(errors[fields.boardName].required),
});
