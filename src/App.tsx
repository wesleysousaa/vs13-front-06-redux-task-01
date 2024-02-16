import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import Products from "./pages/Products/Products";
import Rating from "./pages/Rating/Rating";
import Cart from "./pages/Cart/Cart";
import PrivateRoutes from "./layouts/PrivateRoutes";
import PublicRoutes from "./layouts/PublicRoutes";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Users from "./pages/Users/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route element={<DefaultLayout />}>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/rating" element={<Rating />} />
              <Route path="/users" element={<Users />} />
            </Route>
            <Route path="/*" element={<h1>Página não encontada</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
