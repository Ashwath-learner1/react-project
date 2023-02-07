import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import customer from './components/customer'
import CustomerDBoard from "./pages/CustomerDboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    
    <Router>
    
      <Routes>
      <Route path={"/"} exact element={<App/>} />
      <Route path={"/CustomerDboard"} exact element={<CustomerDBoard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// function App(){
//   <div>

//   </div>
// }
