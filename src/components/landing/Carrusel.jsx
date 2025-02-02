import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import carrusel1 from "/src/assets/landing/slider1.jpg";
import carrusel2 from "/src/assets/landing/slider2.jpg";
import carrusel3 from "/src/assets/landing/slider3.jpg";
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
                width: "calc(100% - 40px)",
                margin: "0 auto",
                overflow: "hidden",
                borderRadius: "10px",
                marginTop: '70px'
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
                    color: "#fff",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    padding: { xs: "5px", sm: "10px" },
                    borderRadius: { xs: "5px", sm: "10px" },
                }}
            >
                <Typography variant="h5" sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}>United String</Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}>Soluciones Integrales de Transporte y Carga</Typography>
            </Box>
        </Box>
    );
};

export default Carrusel;