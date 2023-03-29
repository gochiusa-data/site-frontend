import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
    const theme = useTheme();
    const big = useMediaQuery(theme.breakpoints.not("xs"))

    return (
        <footer>
            <Box sx={{ color: "#955e4b", backgroundColor: "#fae2a4" }}>
                <Container sx={{ py: 2 }}>
                    <Grid container>
                        <Grid item sm={8} xs={12}>
                            <Stack spacing={1}>
                                <Typography>©250king</Typography>
                                <Link href={"https://icp.gov.moe/?keyword=20230388"} underline={"hover"} color={"inherit"}>萌ICP备20230388号</Link>
                                <Typography>此站非点兔官方，只是个粉丝网站！</Typography>
                                <Typography>Built with love❤</Typography>
                            </Stack>
                        </Grid>
                        <Grid item sm={4} xs={12} sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: big ? "flex-end" : "flex-start",
                            py: big ? 0 : 2
                        }}>
                            <Link href={"https://www.gochiusa.com/"}>
                                <img src={"https://s1.250king.top/image/www.gochiusa.fun/logo.svg"} alt={"Gochiusa Logo"} style={{ width: 250 }} />
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer;
