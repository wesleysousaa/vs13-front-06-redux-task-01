import { useNavigate } from "react-router-dom";
import { AuthResponse, AuthValidation } from "../types/User";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useLoginMutation, useRegisterMutation } from "../services/auth";
import { enqueueSnackbar } from "notistack";
import { setUser } from "../slices/userSlice";
import { useEffect } from "react";
import { stat } from "fs";

export default function useAuth() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.user);
  const [register, { isLoading: isLoadingRegister, isError: isErrorRegister }] =
    useRegisterMutation();

  const [login, { isLoading: isLoadingLogin, isError: isErrorLogin }] =
    useLoginMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") && !state.user) {
      dispatch(
        setUser({ token: localStorage.getItem("token") } as AuthResponse)
      );
    }
  }, [state.user]);

  const registerUser = async (data: AuthValidation) => {
    await register(data).then((res) => {
      const data = (res as { data: AuthResponse }).data;
      if (data?.token) {
        navigate("/login");
        enqueueSnackbar(
          "Usuário cadastrado com sucesso, faça login para prosseguir",
          {
            variant: "success",
          }
        );
      } else {
        enqueueSnackbar(
          "Você só pode cadastrar usuário permitidos pelo reqres.in",
          { variant: "error" }
        );
      }
    });
  };

  const loginUser = async (data: AuthValidation) => {
    await login(data).then((res) => {
      const data = (res as { data: AuthResponse }).data;
      if (data?.token) {
        dispatch(setUser(data));
        enqueueSnackbar("Login efetuado com sucesso!", { variant: "success" });
      } else {
        enqueueSnackbar("Usuário ou senha inválidos!", { variant: "error" });
      }
    });
  };

  const logout = () => {
    dispatch(setUser(null));
    navigate("/login");
  };

  return {
    user: state.user,
    isLoadingRegister,
    registerUser,
    isErrorRegister,
    isErrorLogin,
    isLoadingLogin,
    loginUser,
    logout,
  };
}
