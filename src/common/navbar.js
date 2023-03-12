import AppBar from '@mui/material/AppBar';
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
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </nav>
    )
}

export default Navbar;
