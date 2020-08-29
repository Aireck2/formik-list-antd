import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  table: Yup.array()
    .of(
      Yup.object().shape({
        key: Yup.string().min(4, "Minimum 4 characters").required("Required"), // these constraints take precedence
        value: Yup.string().min(3, "Minimum 3 characters").required("Required"), // these constraints take precedence
      })
    )
    .required("Must have items") // these constraints are shown if and only if inner constraints are satisfied
    .min(3, "Minimum of 3 items"),
});
