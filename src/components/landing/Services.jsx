
import { Container, Grid, Typography, Card, CardContent, CardMedia, TextField, MenuItem, Button, Box } from '@mui/material';
import { useState } from 'react';
import limpieza from '/src/assets/landing/servicioLimpieza.png';
import desinfeccion from '/src/assets/landing/servicioDesinfeccion.jpeg';
import tecnologia from '/src/assets/landing/servicioTecnologia.jpg';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import HomeIcon from '@mui/icons-material/Home';
const services = [
    {
        title: 'Limpieza',
        description: 'Cobertura en todas las principales ciudades del país.',
        image: limpieza,
    },
    {
        title: 'Desinfección',
        description: 'Conexiones globales con los principales puertos y aeropuertos.',
        image: desinfeccion,
    },
    {
        title: 'Tecnologia',
        description: 'Logística Integral: Almacenaje, distribución y gestión de inventario.',
        image: tecnologia,
    },
];

const cities = [
    'Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza',
    'Málaga', 'Murcia', 'Palma', 'Las Palmas', 'Bilbao'
];

const Services = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [consulta, setConsulta] = useState('');
    const [clientType, setClientType] = useState('');

    const handleSubmit = () => {
        const message = `nombre: ${nombre}\n\nemail: ${email}\n\ntelefono: ${telefono}\n\nTipo de Cliente: ${clientType}\n\nConsulta: ${consulta}`;
        const whatsappUrl = `https://wa.me/34689285854?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
};

return (
    <Container maxWidth="lg" sx={{ py: 5 }} id="servicios">

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, alignItems: 'center', mb: 4, backgroundColor: '#e6e8e8', padding: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon />
                <Typography variant="body1">correo@example.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon />
                <Typography variant="body1">+34 123 456 789</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon  />
                <Typography variant="body1">Calle Ejemplo, 123, Madrid</Typography>
            </Box>
        </Box>

        <Container maxWidth="lg" sx={{ mt: 4,marginBottom: 5 }}>
            {/* Título principal */}
            <Typography variant="h4" gutterBottom>
                <span style={{ color: "#000" }}>Servicios de limpieza </span>
                <span style={{ color: "#5f88ec", fontWeight: "bold" }}>doméstica</span>
                <span style={{ color: "#87a5f3" }}> en Barcelona</span>
            </Typography>

            <Typography variant="body1" color="textSecondary" paragraph>
                Arnet Limpieza Integral como empresa de limpieza en Barcelona ofrece una gran variedad
                de servicios de limpieza y mantenimiento del <strong>hogar</strong>.
            </Typography>

            <Grid container spacing={3} mt={2}>
                <Grid item xs={12} sm={6} md={6}>
                    <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
                        <CleaningServicesIcon sx={{ fontSize: 40, mr: 2, color: "#6daff8" }} />
                        <CardContent>
                            <Typography variant="h6" fontWeight="bold">
                                Hogar por horas
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Limpieza especializada en alguna estancia del hogar, que necesite
                                horas de limpieza, ya sea por retraso o por causas concretas.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
                        <HomeIcon sx={{ fontSize: 40, mr: 2, color: "#6daff8" }} />
                        <CardContent>
                            <Typography variant="h6" fontWeight="bold">
                                Pisos y/o apartamentos
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                ¿Necesitas contratar un servicio de limpieza para tu hogar? Nosotros
                                tenemos la solución. Llámanos y te haremos una oferta sin compromiso.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>

        <Typography variant="h3" align="center" gutterBottom>
            Nuestros Servicios
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
            Soluciones logísticas integrales para satisfacer todas tus necesidades de transporte y carga.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card sx={{ textAlign: 'center', height: '100%', borderRadius: '0' }}>
                        <CardMedia
                            component="img"
                            image={service.image}
                            alt={service.title}
                            sx={{ height: 160 }}
                        />
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                {service.title}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" >
                                {service.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>

        <Box sx={{ mt: 5 }}>
            <Typography variant="h3" align="center" gutterBottom>
                Cobertura Nacional
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
                Presencia en todo el pais.
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {cities.map((city, index) => (
                    <Grid item xs={6} sm={4} md={2} key={index}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{
                                borderRadius: '30px',
                                fontSize: '1.1rem',
                                padding: '12px 20px',
                                marginTop: 2,
                                color: '#85c3f6',
                                backgroundColor: '#efeded',
                                '&:hover': {
                                    backgroundColor: '#89b6ee',
                                    color: '#fff',
                                },
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {city}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>

        <Box sx={{ mt: 5, textAlign: 'center', py: 4, borderRadius: 2 }} id="contactar">

            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={8}>
                    <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                        ¿Necesitas un servicio de limpieza en Barcelona a medida? Te preparamos una propuesta sin compromiso.
                    </Typography>

                    <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                        ¿Tienes alguna duda?
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary">
                        Tanto para particulares como para profesionales, nosotros nos adaptamos a tus necesidades.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 2,
                            maxWidth: 600,
                            margin: '0 auto',
                            backgroundColor: '#f5f4f4',
                            padding: 5,
                            borderRadius: 10,
                        }}
                    >
                        <TextField
                            label="Nombre "
                            fullWidth
                            placeholder="Ingrese su nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        >
                        </TextField>
                        <TextField
                            label="Email"
                            fullWidth
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            label="Telefono"
                            fullWidth
                            placeholder={'Ingrese numero de telefono'}
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                        <TextField
                            select
                            label="Tipo de Cliente"
                            fullWidth
                            value={clientType}
                            onChange={(e) => setClientType(e.target.value)}
                        >
                            <MenuItem value="empresa">Empresa</MenuItem>
                            <MenuItem value="particular">Particular</MenuItem>
                        </TextField>
                        <TextField
                            multiline
                            rows={4}
                            placeholder="ingrese su consulta"
                            label="Consulta"
                            fullWidth
                            value={consulta}
                            onChange={(e) => setConsulta(e.target.value)}
                        >
                        </TextField>
                        <Button variant="contained" color="primary" size="large" onClick={handleSubmit} sx={{ width: '50%', borderRadius: 10 ,fontSize: '1.1rem', backgroundColor: '#f1f1f1', color: '#5eb6d9', '&:hover': { backgroundColor: '#75aee0' , color:"#fff"} }}>
                            Solicitar Cotización
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Container>
);
};

export default Services;
