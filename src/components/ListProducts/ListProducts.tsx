import { Product } from "../../types/Product";
import { Box, Button } from "@mui/material";
import style from "./ListProducts.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addToCart, removeToCart } from "../../slices/cartSlice";
interface Props {
  data: Product[];
  showAddCart: boolean;
}

export default function ListProducts({ data, showAddCart }: Props) {
  const dispach = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

  const handleAddCart = (product: Product) => {
    dispach(addToCart(product));
  };

  const handleRemoveCart = (product: Product) => {
    dispach(removeToCart(product));
  };

  return (
    <Box className={style["products-container"]}>
      {data.map((product) => (
        <Box key={product.id} className={style["card"]}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <span className={style["category"]}>{product.categoria}</span>
          <p>R$: {product.price}</p>
          {showAddCart && !cart.find((item) => item.id === product.id) && (
            <Button variant="contained" onClick={() => handleAddCart(product)}>
              Adicionar ao carrinho
            </Button>
          )}

          {cart.find((item) => item.id === product.id) && (
            <Button
              variant="contained"
              color="error"
              onClick={() => handleRemoveCart(product)}
            >
              Revomer do carrinho
            </Button>
          )}
        </Box>
      ))}
    </Box>
  );
}
