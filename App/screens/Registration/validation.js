import * as yup from "yup"
import YupPassword from 'yup-password'
YupPassword(yup)

export const validationSchema = yup.object().shape({
    firstName: yup.string().max(60).required('Informe seu nome'),
    email: yup.string().email().required('Informe um email válido.'),
    birthDate: yup.date().default(function () { return new Date()}),
    university: yup.string().max(100).required('Informe sua universidade.'),
    password: yup.string()
    .min(6, "Sua senha deve conter, no mínimo, 6 caracteres.")
    .max(30)
    .minUppercase(1, "Sua senha deve conter, no mínimo, uma letra maiúscula.")
    .minLowercase(1, "Sua senha deve conter, no mínimo, uma letra minúscula.")
    .minSymbols(1, "Sua senha deve conter, no mínimo, um caractere especial.")
    .minNumbers(1, "Sua senha deve conter, no mínimo, um número.")
    .required('Crie uma senha segura.'),
    confirmPassword: yup.string().min(6).max(16).required('Senhas não conferem.'),
})

