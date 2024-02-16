import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { Products } from "./Component/Products/Products";
import { Provider } from "react-redux";
import store from "./Features/store";
import CartSlice from "./Features/CartSlice";
import { Cart } from "./Component/Cart/cart";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="Products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Provider>
  );
}

export default App;
