import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import {SWRConfig} from "swr";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {zhCN} from '@mui/x-data-grid';
import {zhCN as coreZhCN} from '@mui/material/locale';
import {FallbackProvider} from "react-current-page-fallback";

const App = () => {
    const AfIndex = React.lazy(() => import("./page/af/index"));
    const AfDetail = React.lazy(() => import("./page/af/detail"));
    const Root = React.lazy(() => import("./page/index"))
    const isDark = useMediaQuery('(prefers-color-scheme: dark)');
    const common = createTheme({palette: {mode: isDark? 'dark': 'light'}}, zhCN, coreZhCN);
    const endpoint = "https://www.gochiusa.fun/api/v1";

    return (
        <BrowserRouter>
            <SWRConfig value={{
                suspense: true,
                revalidateIfStale: false,
                revalidateOnFocus: false,
                fetcher: (url, init) => fetch(`${endpoint}${url}`, init).then(r => r.json())
            }}>
                <ThemeProvider theme={common}>
                    <CssBaseline/>
                    <FallbackProvider>
                        <Routes>
                            <Route path={"/"} element={<Root/>}/>
                            <Route path={"/af"} element={<AfIndex/>}/>
                            <Route path={"/af/:year"} element={<AfDetail/>}/>
                        </Routes>
                    </FallbackProvider>
                </ThemeProvider>
            </SWRConfig>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
