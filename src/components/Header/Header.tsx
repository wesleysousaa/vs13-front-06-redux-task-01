import { Box } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import style from "./Header.module.css";

export default function Header() {
  return (
    <Box component={"header"} className={style["custom-header"]}>
      <Box component={"nav"}>
        <NavLink to={"/"}>Produtos</NavLink>
        <NavLink to={"cart"}>Carrinho</NavLink>
        <NavLink to={"rating"}>Avaliar</NavLink>
      </Box>
      <h2>Loja de Mangás</h2>
    </Box>
  );
}
