import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App font-markazi">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
