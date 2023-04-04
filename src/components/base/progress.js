import LinearProgress from "@mui/material/LinearProgress";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigation, Outlet } from "react-router-dom";

export const Component = () => {
    const custom = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: "#ffd578"
            }
        }
    });
    const navigation = useNavigation();
    return (
        <>
            <ThemeProvider theme={custom}>
                {navigation.state !== "idle" && <LinearProgress sx={{ position: "fixed", top: 0, zIndex: 9000, width: "100%" }} />}
            </ThemeProvider>
            <Outlet />
        </>
    )
};