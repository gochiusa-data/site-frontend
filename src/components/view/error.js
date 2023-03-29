import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const ErrorView = (param) => {
    React.useEffect(() => {
        document.title = param.title + " • Gochiusa Fans Hub";
    }, [param.title]);

    return (
        <Container sx={{ my: 2 }}>
            <Stack spacing={2}>
                <Typography variant={"h4"}>{param.title}</Typography>
                {param.children}
            </Stack>
        </Container>
    );
};

export default ErrorView;
