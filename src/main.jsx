import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import customer from './components/customer'
import CustomerDBoard from "./pages/CustomerDboard";
import JewelleryAdmin from "./pages/JewelleryAdmin";
import BankAdmin from "./pages/BankAdmin";
import Payment from "./pages/Payment";
import Withdraw from "./pages/Withdraw";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path={"/"} exact element={<App />} />
        <Route path={"/CustomerDboard"} exact element={<CustomerDBoard />} />
        <Route path={"/JewelleryAdmin"} exact element={<JewelleryAdmin />} />
        <Route path={"/BankAdmin"} exact element={<BankAdmin />} />
        <Route path={"/Payment"} exact element={<Payment />} />
        <Route path={"/Withdraw"} exact element={<Withdraw />} />
        <Route path={"/Register"} exact element={<Register />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


