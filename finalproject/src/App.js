// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Title from "./components/title/Title";
function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
