// import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
// import "./CurrencyConvertor.jsx"
// import CurrencyConvertor from "./CurrencyConvertor.jsx";
import NavBar from "./component/NavBar.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  
  return (
    <div className="root">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
