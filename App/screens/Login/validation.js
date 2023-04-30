import * as yup from "yup"

export const validationSchema = yup.object().shape({
    email: yup.string().email('E-mail inválido.').required('Informe um e-mail'),
    password: yup.string().required('Senha inválida.')
})