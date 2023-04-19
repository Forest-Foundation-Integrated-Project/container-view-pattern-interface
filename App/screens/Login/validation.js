import * as yup from "yup"

export const validationSchema = yup.object().shape({
    completeName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(16).required(),
    confirmPassword: yup.string().min(6).max(16).required(),
})