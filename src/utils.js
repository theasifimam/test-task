import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Name field can't be left blank."),
  dobAge: Yup.string().required("Age or DOB can't be left blank."),
  sex: Yup.string().required("Please select your gender."),
});
