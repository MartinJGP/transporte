import Header from "./components/landing/Header.jsx";
import Services from "./components/landing/Services.jsx";
import Comentarios from "./components/landing/Comentarios.jsx";
import Footer from "./components/landing/Footer.jsx";
import Carrusel from "./components/landing/Carrusel.jsx";
import { Link } from "react-scroll";
import { Button } from "@mui/material";

function App() {

  return (
    <div>
      <Header />

      <Carrusel />
        <Services />
        <Comentarios />
        <Footer />
        <Link to="contactar" smooth={true} duration={500} offset={-100}>
            <Button
                variant="contained"
                color="secondary"
                sx={{
                    position: "fixed",
                    bottom: 16,
                    right: 16,
                    zIndex: 1000,
                    backgroundColor: "#4074fa",
                    color: "#fff",
                    '&:hover': {
                        backgroundColor: "#00d8f5",
                    },
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                    borderRadius: "50px",
                    padding: "10px 20px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                }}
            >
                Contactar
            </Button>
        </Link>
        <Button
            variant="contained"
            color="primary"
            sx={{
                position: "fixed",
                bottom: 80,
                right: 16, // Same position as "Contactar" button
                zIndex: 1001, // Higher zIndex to ensure it appears above the "Contactar" button
                backgroundColor: "#2c5edc",
                color: "#fff",
                '&:hover': {
                    backgroundColor: "#218838",
                },
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                borderRadius: "50px",
                padding: "10px 20px",
                fontSize: "1rem",
                fontWeight: "bold",
            }}
        >
            Chatbot
        </Button>
    </div>
  )
}

export default App
