import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { BrowserRouter } from "react-router-dom";
// import Routingconfig from "./Components/RoutingConfig/Routingconfig";
// import Menu from "./Components/Menu/Menu";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import IndexPage from "./Components/IndexPage/IndexPage";
// import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer";
import Register from "./Components/Register/Register";
// import Forget_Password from "./Components/Forget_Password/Forget_Password";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header></Header>

      <Routes>
        <Route exact path="/" element={<IndexPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      
      <Footer></Footer>
      {/* <Forget_Password></Forget_Password> */}

    </Router>

    {/* <IndexPage></IndexPage> */}

    {/* <Header></Header> */}
    {/* <IndexPage></IndexPage> */}
    {/* <Login></Login> */}
    {/* <BrowserRouter>
      <Header></Header>
      <Routingconfig></Routingconfig>
    </BrowserRouter>

    <IndexPage></IndexPage>
    <Footer></Footer> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
