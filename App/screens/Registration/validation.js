import * as yup from "yup"
import YupPassword from 'yup-password'
YupPassword(yup)

export const validationSchema = yup.object().shape({
    name: yup.string().max(60).required('Informe seu nome'),
    email: yup.string().email('E-mail inválido.').required('Informe um e-mail válido.'),
    gender: yup.string().required('Informe um gênero'),
    birthDate: yup.date().default(function () { return new Date()}).required('Informe sua data de Nascimento'),
    university: yup.string().min(4, 'Informe, pelo menos, a sigla de sua universidade').max(100).required('Informe sua universidade.'),
    password: yup.string()
    .min(6, "Sua senha deve conter, no mínimo, 6 caracteres.")
    .max(30)
    .minUppercase(1, "Sua senha deve conter, no mínimo, uma letra maiúscula.")
    .minLowercase(1, "Sua senha deve conter, no mínimo, uma letra minúscula.")
    .minSymbols(1, "Sua senha deve conter, no mínimo, um caractere especial.")
    .minNumbers(1, "Sua senha deve conter, no mínimo, um número.")
    .required('Crie uma senha segura.'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Senhas não conferem.')
})

