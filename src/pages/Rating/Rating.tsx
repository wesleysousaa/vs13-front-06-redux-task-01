import { Box, Divider } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import style from "./Rating.module.css";
import { rate } from "../../slices/rateSlice";
export default function Rating() {
  const rateData = useAppSelector((state) => state.rate.rating);
  const dispach = useAppDispatch();
  return (
    <Box>
      <h1>Avalie</h1>
      <p>Clique nas suas obras favoritas para votar qual o melhor</p>
      <Divider />
      <Box className={style["rate-container"]}>
        {rateData.map((item) => (
          <Box
            key={item.product.id}
            className={style["card-rate"]}
            onClick={() => dispach(rate(item.product))}
          >
            <h3>{item.product.name}</h3>
            <p>{item.product.description}</p>
            <p>Nota: {item.rate}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
