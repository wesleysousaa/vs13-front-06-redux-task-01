import { Alert, Box, Divider, TextField } from "@mui/material";
import style from "./Auth.module.css";
import { Controller, useForm } from "react-hook-form";
import { AuthValidation } from "../../types/User";
import { AuthSchema } from "../../schemas/AuthSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { LoadingButton } from "@mui/lab";

export default function Login() {
  const { isLoadingLogin, isErrorLogin, loginUser } = useAuth();
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

  const onSubmit = (data: AuthValidation) => {
    loginUser(data);
  };

  return (
    <Box className={style["auth-container"]}>
      <Box
        className={style["auth-form"]}
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Login</h1>
        {isErrorLogin && (
          <Alert severity="error">
            Você só pode entrar com usuário permitidos pelo reqres.in
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
          loading={isLoadingLogin}
          type="submit"
          variant="contained"
        >
          Entrar
        </LoadingButton>
        <Divider />
        <p>
          Ainda não possui conta?
          <Link to="/register"> Clique aqui </Link>
        </p>
      </Box>
    </Box>
  );
}
