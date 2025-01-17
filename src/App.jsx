import "./App.css";
import ProductList from "./components/ProductList";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import OrderConfirmation from "./components/OrderConfirmation";
import PaymentGateway from "./components/PaymentGateway";
import NotFound_404 from "./components/NotFound_404";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/product/buy" element={<OrderConfirmation />} />
        <Route
          path="/product/buy/payment-gateway"
          element={<PaymentGateway />}
        />
        <Route path="/*" element={<NotFound_404 />} />
      </Routes>
    </>
  );
};

export default App;
