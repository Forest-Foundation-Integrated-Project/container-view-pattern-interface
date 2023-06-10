import * as yup from "yup"

export const validationSchema = yup.object().shape({
    newPassword: yup.string()
        .min(6, "Sua senha deve conter, no mínimo, 6 caracteres.")
        .max(30)
        .minUppercase(1, "Sua senha deve conter, no mínimo, uma letra maiúscula.")
        .minLowercase(1, "Sua senha deve conter, no mínimo, uma letra minúscula.")
        .minSymbols(1, "Sua senha deve conter, um caractere especial.")
        .minNumbers(1, "Sua senha deve conter, no mínimo, um número.")
        .required('Crie uma senha segura.'),
    confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Senhas não conferem.')
})
