import React from "react";
import Image from "mui-image";
import useSWR from 'swr';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';
import {FallbackPageWrapper} from "react-current-page-fallback";
import ActivityCard from "../../component/card/activity";
import URLCard from "../../component/card/url";
import Footer from "../../common/footer";
import Navbar from "../../common/navbar";

const AfIndex = () => {
    const {data} = useSWR('/af');
    return (
        <FallbackPageWrapper>
            <Navbar/>
            <Toolbar/>
            <article>
                <Image src={"https://panda995.top:500/img/2023/02/057%20(%E5%A4%A7).png"} width={"100%"} height={400} duration={1000} fit={"cover"}/>
                <Container sx={{my: 2}}>
                    <Stack spacing={2}>
                        <Typography variant={"h4"}>历年点兔愚人节活动镜像</Typography>
                        <Typography>该活动于2014年首次举行，但因当时点兔拥有的粉丝较少，目前仅有2015年之后的网页镜像，欢迎有意者提供相关资料！</Typography>
                        <Typography>历年的愚人节活动对原作的影响重大，例如2015年的Magical Girl Chino，已有众多相关衍生物：香风智乃 魔法少女使Ver. 手办、Kirara Fantasia里的香风智乃的原型。</Typography>
                        <Typography>因此我想保留下来，供大家查看。</Typography>
                    </Stack>
                    <Grid container spacing={2} sx={{my: 2}}>
                        {data.items.map((i) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={i.id}>
                                    <ActivityCard year={i.year} name={i.name} image={i.image} id={i.id}/>
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Stack spacing={2}>
                        <Typography variant={"h5"}>鸣谢</Typography>
                        <Typography>Staticfile CDN提供静态文件加速访问，以解决因国内用户无法使用Google AJAX Library而导致卡在Loading的问题。</Typography>
                        <URLCard
                            url={"https://www.staticfile.org/"}
                            title={"Staticfile CDN"}
                            avatar={"https://staticfile.org/assets/images/logo.png"}
                            description={"提供优质的开源库CDN加速，技术支持由七牛云™提供，技术社区支持来自掘金™"}
                        />
                    </Stack>
                </Container>
            </article>
            <Footer/>
        </FallbackPageWrapper>
    );
};

export default AfIndex;
