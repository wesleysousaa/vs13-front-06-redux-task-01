import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import ListProducts from "../../components/ListProducts/ListProducts";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { filter as filterData } from "../../slices/productsSlice";
import { useState } from "react";
import { categories } from "../../db/fakeDb";

export default function Products() {
  const products = useAppSelector((state) => state.products.products);
  const filterValue = useAppSelector((state) => state.products.filter);
  const dispach = useAppDispatch();

  const [filter, setFilter] = useState(filterValue);

  const handleChangeFilter = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
    dispach(filterData(event.target.value as string));
  };

  return (
    <Box>
      <h1>Produtos</h1>
      <Divider />
      <Box component={"form"}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            label="Age"
            onChange={handleChangeFilter}
          >
            <MenuItem value={"Todos"}>Todos</MenuItem>

            {categories.map((category, key) => (
              <MenuItem key={key} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <ListProducts data={products} showAddCart />
    </Box>
  );
}
