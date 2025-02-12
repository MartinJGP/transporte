import Slider from "react-slick";
import {Box, Button, Typography} from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import carrusel1 from "/src/assets/landing/carrusel1.png";
import carrusel2 from "/src/assets/landing/carrusel2.png";
import carrusel3 from "/src/assets/landing/carrusel3.png";
import carrusel4 from "/src/assets/landing/carrusel4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    {
        src: carrusel1,
        alt: "Imagen 1",

    },
    {
        src: carrusel2,
        alt: "Imagen 2",

    },
    {
        src: carrusel3,
        alt: "Imagen 3",

    },
    {
        src: carrusel4,
        alt: "Imagen 4",

    },
];

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <ArrowForward
            onClick={onClick}
            style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "50%",
                color: "#fff",
                padding: "10px",
                zIndex: 2,
                cursor: "pointer",
            }}
        />
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <ArrowBack
            onClick={onClick}
            style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "50%",
                color: "#fff",
                padding: "10px",
                zIndex: 2,
                cursor: "pointer",
            }}
        />
    );
};

const Carrusel = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <Box
            sx={{
                position: "relative",
                height: "650px",
                width: "100%", // Cambiado a 100% para ocupar todo el ancho
                margin: "0", // Eliminado el margen
                overflow: "hidden",
                borderRadius: "10px",
                marginTop: '80px',
            }} id={"home"}
        >
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} style={{ position: "relative" }}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            style={{
                                width: "100%",
                                height: "650px",
                                objectFit: "cover",
                                borderRadius: "10px",
                            }}
                        />
                    </div>
                ))}
            </Slider>
            <Box
                sx={{
                    position: "absolute",
                    bottom: { xs: "10px", sm: "20px" },
                    left: { xs: "10px", sm: "20px" },
                    color: "#fffbfb",
                    backgroundColor: "rgba(24,24,24,0.3)",
                    padding: { xs: "5px", sm: "10px" },
                    borderRadius: { xs: "5px", sm: "10px" },
                }}
            >
                <Typography variant="h4" sx={{ fontSize: { xs: "1.25rem", sm: "1.8rem" } }}>ARTLIMP</Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}>Soluciones Integrales de Limpieza </Typography>
            </Box>
        </Box>
    );
};

export default Carrusel;