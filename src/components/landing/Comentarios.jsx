import { Box, Card, CardMedia, CardContent, Typography,Container,AccordionSummary } from '@mui/material';
import Slider from 'react-slick';
import { Accordion, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import user1 from '/src/assets/landing/user1.png';
import user2 from '/src/assets/landing/user2.png';
import user3 from '/src/assets/landing/user3.png';


function UserExperienceCard() {
    const faqs = [
        {
            question: '¿Cómo puedo solicitar una cotización?',
            answer: 'Puedes solicitar una cotización completando el formulario en nuestra página de servicios o contactándonos directamente por teléfono o correo electrónico.',
        },
        {
            question: '¿Qué tipos de transporte ofrecen?',
            answer: 'Ofrecemos transporte nacional, carga internacional y servicios de logística integral.',
        },
        {
            question: '¿Cómo garantizan la seguridad de la carga?',
            answer: 'Monitoreamos todas las cargas 24/7 y utilizamos sistemas de seguridad avanzados para garantizar la protección de tu carga.',
        },
        {
            question: '¿Cuáles son sus horarios de atención?',
            answer: 'Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00. También ofrecemos soporte 24/7 para emergencias.',
        },
    ];
    const experiences = [
        {
            name: 'Juan Pérez',
            img: user1,
            comment: '"La experiencia fue increíble, el equipo fue muy profesional y los resultados superaron mis expectativas."'
        },
        {
            name: 'María López',
            img: user2,
            comment: '" Estoy muy satisfecha con el servicio, el equipo fue muy atento y el resultado final fue excelente."'
        },
        {
            name: 'Carlos García',
            img: user3,
            comment: '"El servicio fue excelente, muy atentos a los detalles y cumplieron con los plazos establecidos."'
        },
        {
            name: 'Ana Torres',
            img: user2,
            comment: '"El equipo fue muy profesional y el resultado final fue exactamente lo que esperaba."'
        },
        {
            name: 'Luis Fernández',
            img: user1,
            comment: '"Estoy muy satisfecho con el servicio, el equipo fue muy atento y el resultado final fue excelente."'
        },
        {
            name: 'Sofía Martínez',
            img: user2,
            comment: '"El servicio fue excelente, cumplieron con todos los plazos y el resultado fue increíble."'
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
                    <Typography variant="h4" align="center" gutterBottom>
                        Preguntas Frecuentes
                    </Typography>
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