import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-scroll';
import icon from '/src/assets/icon.png';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const menuItems = [
        { text: 'Inicio', href: 'home' },
        { text: 'Servicios', href: 'servicios' },
        { text: 'Nosotros', href: 'about' },
    ];

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#fdfdfd', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', height: 120 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%', padding: '0 20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <img src={icon} alt="icon" style={{ width: 180, height: 110, marginRight: 15, marginTop: 10 }} />
                    {/*<Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#5882e7', marginTop: 2 }}>*/}
                    {/*    {isMobile ? 'ARTLIMP' : 'ARNET LIMPIEZA INTEGRAL'}*/}
                    {/*</Typography>*/}
                </Box>
                {isMobile ? (
                    <>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} sx={{ transition: 'transform 0.3s ease-in-out' }}>
                            <Box sx={{ width: 180 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                                <List>
                                    {menuItems.map((item, index) => (
                                        <ListItem button key={index}>
                                            <Link to={item.href} smooth={true} duration={500} offset={-70} onClick={toggleDrawer(false)} style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold', fontSize: '1rem' }}>
                                                {item.text}
                                            </Link>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </>
                ) : (
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {menuItems.map((item, index) => (
                            <Button key={index} color="inherit" sx={{ fontWeight: 'bold', color: '#3f75fc', '&:hover': { color: '#ffeb3b' }, marginTop: 2 }}>
                                <Link to={item.href} smooth={true} duration={500} offset={-70} style={{ textDecoration: 'none', color: 'inherit', fontSize: '1rem' }}>
                                    {item.text}
                                </Link>
                            </Button>
                        ))}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;