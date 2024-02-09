import { Box, Divider } from "@mui/material";
import ListProducts from "../../components/ListProducts/ListProducts";
import { useAppSelector } from "../../hooks/hooks";

export default function Cart() {
  const cart = useAppSelector((state) => state.cart.cart);

  return (
    <Box>
      <h1>Carrinho</h1>
      <Divider />
      {cart.length === 0 && <h2>Carrinho vazio</h2>}
      <ListProducts data={cart} showAddCart={false} />
    </Box>
  );
}
