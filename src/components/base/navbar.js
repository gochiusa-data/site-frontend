import React from 'react';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, Outlet } from 'react-router-dom';

export const Component = () => {
    const custom = createTheme({ palette: { primary: { main: "#955e4b" } } });
    const [open, setOpen] = React.useState(false);
    const list = [
        { name: "愚人节活动", path: "/af" },
        { name: "点兔展会", path: "/ge" },
        { name: "关于", path: "/about" }
    ];

    return (
        <>
            <nav>
                <ThemeProvider theme={custom}>
                    <AppBar position={"fixed"}>
                        <Toolbar>
                            <IconButton color={"inherit"} sx={{ mr: 2 }} onClick={() => {
                                setOpen(!open);
                            }}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant={"h6"}>Gochiusa Fans Hub</Typography>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
                <Drawer
                    anchor={"left"}
                    open={open}
                    ModalProps={{ keepMounted: true }}
                    onClose={() => {
                        setOpen(!open);
                    }}
                    sx={{
                        width: 240,
                        '& .MuiDrawer-paper': {
                            width: 240,
                        }
                    }}
                >
                    <Toolbar />
                    <Divider />
                    <List>
                        {
                            list.map((item, index) => {
                                return (
                                    <ListItem disablePadding>
                                        <ListItemButton component={Link} to={item.path} onClick={() => {
                                            setOpen(!open);
                                        }}>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })
                        }
                    </List>
                </Drawer>
            </nav>
            <Toolbar />
            <Outlet />
        </>
    );
};
