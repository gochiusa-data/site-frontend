import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from "@mui/material/styles";

const Navbar = () => {
    const custom = createTheme({palette: {primary: {main: "#955e4b"}}});

    return (
        <nav>
            <ThemeProvider theme={custom}>
                <AppBar position={"fixed"}>
                    <Toolbar>
                        <Typography variant={"h6"}>GochiUsa Fans Hub</Typography>
                    <Box sx={{marginLeft: 2}}>
                        <Button sx={{color: "white"}} variant={"text"}>愚人节活动</Button>
                        <Button sx={{color: "white"}} variant={"text"}>点兔展</Button>
                        <Button sx={{color: "white"}} variant={"text"}>关于</Button>
                    </Box>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </nav>
    )
}

export default Navbar;
