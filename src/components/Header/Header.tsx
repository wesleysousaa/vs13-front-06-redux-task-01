import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import useAuth from "../../hooks/useAuth";
export default function Header() {
  const { logout } = useAuth();
  return (
    <Box component={"header"} className={style["custom-header"]}>
      <Box component={"nav"}>
        <NavLink to={"/"}>Produtos</NavLink>
        <NavLink to={"users"}>Usuários</NavLink>
        <NavLink to={"cart"}>Carrinho</NavLink>
        <NavLink to={"rating"}>Avaliar</NavLink>
        <Button
          onClick={logout}
          endIcon={<ExitToAppIcon />}
          color="inherit"
          variant="text"
        >
          Sair
        </Button>
      </Box>
      <h2>Loja de Mangás</h2>
    </Box>
  );
}
