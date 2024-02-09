import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import style from "./DefaultLayout.module.css";

export default function DefaultLayout() {
  return (
    <Box className={style["container"]}>
      <Header />
      <Box component={"main"}>
        <Outlet />
      </Box>
    </Box>
  );
}
