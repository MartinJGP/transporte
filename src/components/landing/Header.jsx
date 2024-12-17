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
        <AppBar position="fixed" sx={{ backgroundColor: '#1e90ff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={icon} alt="icon" style={{ width: 45, height: 45, marginRight: 15 }} />
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#fff' }}>
                        United String
                    </Typography>
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
                                            <Link to={item.href} smooth={true} duration={500} offset={-70} onClick={toggleDrawer(false)} style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>
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
                            <Button key={index} color="inherit" sx={{ fontWeight: 'bold', color: '#fff', '&:hover': { color: '#ffeb3b' } }}>
                                <Link to={item.href} smooth={true} duration={500} offset={-70} style={{ textDecoration: 'none', color: 'inherit' }}>
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