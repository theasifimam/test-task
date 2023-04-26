import * as Yup from "yup";

const phoneRegExp = /^[6-9]\d{9}$/gi;

const panRegex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;

export const userSchema = Yup.object({
  name: Yup.string().required("Name field can't be left blank."),
  age: Yup.string().required("Age or DOB can't be left blank."),
  sex: Yup.string().required("Please select your gender."),
  mobileNo: Yup.string()
    .min(10, "Mobile number is not valid")
    .max(12, "Mobile number is not valid")
    .matches(phoneRegExp, "Mobile number is not valid"),
  emergencyNo: Yup.string()
    .min(10, "Emergency number is not valid")
    .max(12, "Emergency number is not valid")
    .matches(phoneRegExp, "Emergency number is not valid"),
  aadhaarNo: Yup.string()
    .min(12, "Please enter valid aadhaar number.")
    .max(12, "Please enter valid aadhaar number."),
  panNo: Yup.string().matches(panRegex, "Please enter valid PAN number."),
});
