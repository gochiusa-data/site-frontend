import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { zhCN } from '@mui/x-data-grid';
import { zhCN as coreZhCN } from '@mui/material/locale';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
    const isDark = useMediaQuery('(prefers-color-scheme: dark)');
    const common = createTheme({ palette: { mode: isDark ? 'dark' : 'light' } }, zhCN, coreZhCN);
    const router = createBrowserRouter([
        {
            lazy: () => import("./components/base/progress"),
            children: [
                { path: "/", index: true, lazy: () => import("./page/index") },
                {
                    lazy: () => import("./components/base/navbar"),
                    children: [
                        { path: "about", lazy: () => import("./page/about") },
                        { path: "af", lazy: () => import("./page/af/index") },
                        { path: "af/:id", lazy: () => import("./page/af/detail") },
                        { path: "ge", lazy: () => import("./page/ge/index") }
                    ]
                },
                {
                    path: "*",
                    lazy: () => import("./page/error/404")
                }
            ]
        }
    ]);

    return (
        <ThemeProvider theme={common}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
