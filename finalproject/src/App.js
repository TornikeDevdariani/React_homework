// import logo from "./logo.svg";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
