import React from "react";
import Image from "mui-image";
import Container from "@mui/material/Container";
import Footer from "../base/footer";

const CommonView = (param) => {
    React.useEffect(() => {
        document.title = param.title + " • Gochiusa Fans Hub";
    }, [param.title])

    return (
        <>
            <main>
                {param.image !== undefined && <Image src={param.image} width={"100%"} height={400} duration={1000} fit={"cover"} />}
                <article>
                    <Container sx={{ my: 2 }}>{param.children}</Container>
                </article>
            </main>
            <Footer />
        </>
    )
}

export default CommonView;
