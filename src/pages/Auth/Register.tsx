import { Box, TextField, Divider, Alert } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import style from "./Auth.module.css";
import { AuthValidation } from "../../types/User";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthSchema } from "../../schemas/AuthSchema";
import LoadingButton from "@mui/lab/LoadingButton";
import useAuth from "../../hooks/useAuth";

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthValidation>({
    resolver: yupResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isLoadingRegister, isErrorRegister, registerUser } = useAuth();

  const onSubmit = async (data: AuthValidation) => {
    registerUser(data);
  };

  return (
    <Box className={style["auth-container"]}>
      <Box
        className={style["auth-form"]}
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Cadastro</h1>
        {isErrorRegister && (
          <Alert severity="error">
            Você só pode cadastrar usuário permitidos pelo reqres.in
          </Alert>
        )}
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              variant="filled"
              placeholder="Email"
              error={!!errors.email}
              helperText={errors.email?.message}
              className={style["input"]}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              variant="filled"
              placeholder="Password"
              error={!!errors.password}
              helperText={errors.password?.message}
              className={style["input"]}
            />
          )}
        />
        <LoadingButton
          loading={isLoadingRegister}
          type="submit"
          variant="contained"
        >
          Cadastrar
        </LoadingButton>

        <Divider />
        <p>
          Já possui conta?
          <Link to="/login"> Clique aqui </Link>
        </p>
      </Box>
    </Box>
  );
}
