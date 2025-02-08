
import { Container, Grid, Typography, Card, CardContent, CardMedia, TextField, MenuItem, Button, Box } from '@mui/material';
import { useState } from 'react';
import limpieza from '/src/assets/landing/servicioLimpieza.png';
import desinfeccion from '/src/assets/landing/servicioDesinfeccion.jpeg';
import tecnologia from '/src/assets/landing/servicioTecnologia.jpg';

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
        <Typography variant="h3" align="center" gutterBottom>
            Nuestros Servicios
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
            Soluciones logísticas integrales para satisfacer todas tus necesidades de transporte y carga.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card sx={{ textAlign: 'center', height: '100%', borderRadius: '15%' }}>
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
                            <Typography variant="body1" color="textSecondary">
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
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <Button
                            variant="outlined"
                            color="primary"
                            fullWidth
                            sx={{ borderRadius: '20px', fontSize: '1rem', padding: '8px 10px',color:'black' }}
                        >
                            {city}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>

        <Box sx={{ mt: 5, textAlign: 'center', py: 4, borderRadius: 2 }} id="contactar">

            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={4}>
                    <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                       Solicita tu presupuesto
                    </Typography>

                    <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                        ¿Tienes alguna duda?
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary">
                        Complete el formulario para obtener una cotización personalizada.
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
                        <Button variant="contained" color="primary" size="large" onClick={handleSubmit} sx={{ width: '50%', borderRadius: 10 ,fontSize: '1.1rem'}}>
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
