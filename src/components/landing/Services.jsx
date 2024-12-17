
import { Container, Grid, Typography, Card, CardContent, CardMedia, TextField, MenuItem, Button, Box } from '@mui/material';
import { useState } from 'react';
import nacional from '/src/assets/landing/servicionacional.jpeg';
import logistica from '/src/assets/landing/serviciologistica.webp';
import internacional from '/src/assets/landing/serviciointernacional.jpeg';

const services = [
    {
        title: 'Transporte Nacional',
        description: 'Cobertura en todas las principales ciudades del país.',
        image: nacional,
    },
    {
        title: 'Carga Internacional',
        description: 'Conexiones globales con los principales puertos y aeropuertos.',
        image: internacional,
    },
    {
        title: 'Logística',
        description: 'Logística Integral: Almacenaje, distribución y gestión de inventario.',
        image: logistica,
    },
];

const cities = [
    'Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza',
    'Málaga', 'Murcia', 'Palma', 'Las Palmas', 'Bilbao'
];

const Services = () => {
    const [serviceType, setServiceType] = useState('Transporte Nacional');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [cargoType, setCargoType] = useState('Carga General');

    const handleSubmit = () => {
        const message = `Solicitud de Cotización:\n\nTipo de Servicio: ${serviceType}\nOrigen: ${origin}\nDestino: ${destination}\nTipo de Carga: ${cargoType}`;
        const whatsappUrl = `https://wa.me/34689285854?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
};

return (
    <Container maxWidth="lg" sx={{ py: 5 }} id="servicios">
        <Typography variant="h4" align="center" gutterBottom>
            Nuestros Servicios
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
            Soluciones logísticas integrales para satisfacer todas tus necesidades de transporte y carga.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card sx={{ textAlign: 'center', height: '100%', borderRadius: '20%' }}>
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
                            <Typography variant="body2" color="textSecondary">
                                {service.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>

        <Box sx={{ mt: 5 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Cobertura Nacional
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
                Presencia en todo el pais.
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {cities.map((city, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <Button
                            variant="outlined"
                            color="primary"
                            fullWidth
                            sx={{ borderRadius: '20px', fontSize: '0.875rem', padding: '8px 10px',color:'black' }}
                        >
                            {city}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>

        <Box sx={{ mt: 5, textAlign: 'center', py: 4, borderRadius: 2,}}>
            <Typography variant="h4" gutterBottom>
                Solicite su Cotización
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
                Complete el siguiente formulario para solicitar una cotización.
            </Typography>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    maxWidth: 600,
                    margin: '0 auto',

                }}
            >
                <TextField
                    select
                    label="Tipo de Servicio"
                    fullWidth
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                >
                    <MenuItem value="Transporte Nacional">Transporte Nacional</MenuItem>
                    <MenuItem value="Carga Internacional">Carga Internacional</MenuItem>
                    <MenuItem value="Logística">Logística</MenuItem>
                </TextField>
                <TextField
                    label="Origen"
                    fullWidth
                    placeholder="Ciudad de origen"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                />
                <TextField
                    label="Destino"
                    fullWidth
                    placeholder="Ciudad de destino"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
                <TextField
                    select
                    label="Tipo de Carga"
                    fullWidth
                    value={cargoType}
                    onChange={(e) => setCargoType(e.target.value)}
                >
                    <MenuItem value="Carga General">Carga General</MenuItem>
                    <MenuItem value="Carga Peligrosa">Carga Peligrosa</MenuItem>
                    <MenuItem value="Carga Refrigerada">Carga Refrigerada</MenuItem>
                </TextField>
                <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
                    Solicitar Cotización
                </Button>
            </Box>
        </Box>
    </Container>
);
};

export default Services;
