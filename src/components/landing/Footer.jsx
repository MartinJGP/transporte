
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#2c3e50",
                color: "white",
                padding: "40px 0",
                marginTop: "auto",
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Cobertura
                        </Typography>
                        <Typography variant="body2" align="center">
                            Cobertura Nacional
                        </Typography>
                        <Typography variant="body2" align="center">
                            Presencia en todo el país
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Seguridad
                        </Typography>
                        <Typography variant="body2" align="center">
                            Seguridad Garantizada
                        </Typography>
                        <Typography variant="body2" align="center">
                            Monitoreo 24/7
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Soporte
                        </Typography>
                        <Typography variant="body2" align="center">
                            Soporte 24/7
                        </Typography>
                        <Typography variant="body2" align="center">
                            Atención personalizada
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Contáctenos
                        </Typography>
                        <Typography variant="body2" align="center">
                            Email: <Link href="mailto:info@empresa.com" color="inherit">info@empresa.com</Link>
                        </Typography>
                        <Typography variant="body2" align="center" >
                            Teléfono: (123) 456-7890
                        </Typography>
                        <Typography variant="body2" align="center" >
                            WhatsApp: +34 689 28 58 54
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                            <Link href="https://www.facebook.com" color="inherit" sx={{ margin: "0 10px" }}>
                                <Facebook />
                            </Link>
                            <Link href="https://www.linkedin.com" color="inherit" sx={{ margin: "0 10px" }}>
                                <LinkedIn />
                            </Link>
                            <Link href="https://www.instagram.com" color="inherit" sx={{ margin: "0 10px" }}>
                                <Instagram />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        textAlign: "center",
                        marginTop: 4,
                        paddingTop: 2,
                        borderTop: "1px solid #ccc",
                    }}
                >
                    <Typography variant="body2" >
                        © 2024 Todos los derechos reservados
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
