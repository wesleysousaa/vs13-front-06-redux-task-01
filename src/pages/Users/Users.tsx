import style from "./Users.module.css";
import { useGetUsersQuery } from "../../services/auth";
import { Box, Button, CircularProgress, Divider } from "@mui/material";
import { useState } from "react";

export default function Users() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetUsersQuery(page);

  const changePage = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <Box component={"main"} gap={2} display={"flex"} flexDirection={"column"}>
      <h1>Usuários do ReqRes</h1>
      <Divider />
      {isLoading && <CircularProgress />}
      <Box>
        <Button onClick={() => changePage(page - 1)} disabled={page === 1}>
          Anterior
        </Button>
        <span>
          {page} - {data?.total_pages}
        </span>

        <Button
          onClick={() => changePage(page + 1)}
          disabled={page === data?.total_pages}
        >
          Próximo
        </Button>
      </Box>
      <Box className={style["users-container"]}>
        {data?.data.map((user) => (
          <Box key={user.id} className={style["user"]}>
            <img
              src="wallpaper-user.jpg"
              alt={`papel de parede do usuário ${user.first_name}`}
              className={style["user-walpaper"]}
            />
            <Box className={style["user-body"]}>
              <img
                src={user.avatar}
                alt={user.first_name}
                className={style["user-avatar"]}
              />
              <Box>
                <h2>
                  {user.first_name} {user.last_name}
                </h2>
                <p>{user.email}</p>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
