import { Box, Card, CardMedia, CardContent, Typography,Container,AccordionSummary } from '@mui/material';
import Slider from 'react-slick';
import { Accordion, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import user1 from '/src/assets/landing/user1.png';
import user2 from '/src/assets/landing/user2.png';
import user3 from '/src/assets/landing/user3.png';
import pregunta from '/src/assets/landing/preguntas.png';



function UserExperienceCard() {
    const faqs = [
        // 3 Preguntas frecuentes
        {
            question: '¿Cuál es el tiempo de entrega de los servicios?',
            answer: 'El tiempo de entrega de los servicios varía dependiendo del tipo de servicio y la ubicación. Por favor, contáctanos para obtener más información.'
        },
        {
            question: '¿Cuál es el costo de los servicios?',
            answer: 'El costo de los servicios varía dependiendo del tipo de servicio y la ubicación. Por favor, contáctanos para obtener más información.'
        },
        {
            question: '¿Ofrecen servicios personalizados?',
            answer: 'Sí, ofrecemos servicios personalizados para satisfacer las necesidades específicas de cada cliente. Por favor, contáctanos para obtener más información.'
        }

    ];
    const experiences = [
        {
            name: 'Juan Pérez',
            img: user1,
            comment: '"La experiencia fue increíble, el equipo fue muy profesional y los resultados superaron mis expectativas."'
        },
        // 3 Experiencias de usuarios limpieza
        {
            name: 'María González',
            img: user2,
            comment: '"El servicio de limpieza fue excelente, el personal fue muy amable y eficiente. ¡Muy recomendado!"'
        },
        {
            name: 'Carlos Rodríguez',
            img: user3,
            comment: '"Estoy muy satisfecho con el servicio de limpieza, mi casa quedó impecable y el personal fue muy cuidadoso con mis pertenencias."'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Box sx={{ padding: 4, marginBottom: 5 }} id={"about"}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
                Lo que dicen nuestros clientes
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
                Conoce lo que nuestros clientes opinan sobre nuestros servicios.
            </Typography>
            <Slider {...settings}>
                {experiences.map((experience, index) => (
                    <Box key={index} sx={{ padding: 2 }}>
                        <Card sx={{ width: '70%', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, height: '250px' }}>
                            <CardMedia
                                component="img"
                                image={experience.img}
                                alt={experience.name}
                                sx={{ width: 120, height: 120, borderRadius: '50%' }}
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h6">{experience.name}</Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic' }}>{experience.comment}</Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Slider>
            <Box sx={{ padding: 4, marginBottom: 5 }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>

                        <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                            Preguntas Frecuentes
                        </Typography>
                        <CardMedia
                            component="img"
                            image={pregunta}
                            alt="Preguntas"
                            sx={{ width: 60, height: 60 }}
                        />
                    </Box>
                    {faqs.map((faq, index) => (
                        <Accordion key={index}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1">{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Container>
            </Box>
        </Box>

    );
}

export default UserExperienceCard;