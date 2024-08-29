import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './locales/i18n'
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
