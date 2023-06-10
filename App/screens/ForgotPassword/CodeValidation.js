import * as yup from "yup"

export const CodeValidation = yup.object().shape({
    code: yup.string().min(6, "Código inválido.").max(6, "Código inválido").required('Código inválido.')
})