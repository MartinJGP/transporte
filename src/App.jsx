import Header from "./components/landing/Header.jsx";
import Services from "./components/landing/Services.jsx";
import Comentarios from "./components/landing/Comentarios.jsx";
import Footer from "./components/landing/Footer.jsx";
import Carrusel from "./components/landing/Carrusel.jsx";
import { Link } from "react-scroll";
import { Button } from "@mui/material";
import {Chat} from "@mui/icons-material";

function App() {

  return (
    <div>
      <Header />

      <Carrusel />
        <Services />
        <Comentarios />
        <Footer />


    </div>
  )
}

export default App
