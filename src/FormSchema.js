import * as yup from "yup";


const FormSchema = yup.object().shape({
   name: yup
      .string()
      .required("name must be at least 2 characters")
      .min(2, "name must be at least 2 characters"),
   size: yup
      .string()
      .required()
      .oneOf(['small', 'medium', 'large'], "bruh")

})

export default FormSchema;