import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import FoodMenu from "./components/FoodMenu";
import { Provider } from "react-redux";
import store from "./redux/store";
import CartHome from "./components/CartHome";
import Order from "./components/Order";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route exact path="/menu" element={<FoodMenu />} />
        <Route exact path="/cart" element={<CartHome />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </Provider>
  );
}

export default App;
