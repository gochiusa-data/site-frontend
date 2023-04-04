import CircularProgress from "@mui/material/CircularProgress";
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
                {navigation.state !== "idle" &&
                    <CircularProgress
                        sx={{
                            zIndex: 9000,
                            position: "fixed",
                            top: 15,
                            right: 15
                        }}
                        thickness={5}
                        size={30}
                    />
                }
            </ThemeProvider>
            <Outlet />
        </>
    )
};