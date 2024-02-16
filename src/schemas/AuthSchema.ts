import * as yup from "yup";

export const AuthSchema = yup.object().shape({
  email: yup
    .string()
    .email("Formato de email inválido")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha é Obrigatória")
    .min(6, "A senha deve ter pelomenos 6 digitos"),
});
