import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import BinanceForm from "./container/BinanceForm";

function App() {
  return (
    <div className="app">
      <BinanceForm />
      <ToastContainer />
    </div>
  );
}

export default App;
