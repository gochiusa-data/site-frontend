import React from "react";
import Image from "mui-image";
import useSWR from 'swr';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';
import {FallbackPageWrapper} from "react-current-page-fallback";
import ActivityCard from "../../component/card/activity";
import URLCard from "../../component/card/url";
import Footer from "../../common/footer";
import Navbar from "../../common/navbar";

const Activities = () => {
    const {data} = useSWR('/af');
    return (
        <Grid container spacing={2} sx={{my: 2}}>
            {data.items.map((i) => {
                return (
                    <Grid item xs={12} sm={6} md={4} key={i.id}>
                        <ActivityCard year={i.year} name={i.name} image={i.image}/>
                    </Grid>
                );
            })}
        </Grid>
    )
};
const Loading = () => {
    return (
        <Stack spacing={1} sx={{my: 2}}>
            <Skeleton variant="rounded" height={200}/>
            <Skeleton variant="text"/>
        </Stack>
    )
};
const AfIndex = () => {
    return (
        <FallbackPageWrapper>
            <Navbar/>
            <Toolbar/>
            <article>
                <Image src={"https://panda995.top:500/img/2023/02/057%20(%E5%A4%A7).png"} width={"100%"} height={400} duration={1000} fit={"cover"}/>
                <Container sx={{my: 2}}>
                    <Stack spacing={2}>
                        <Typography variant={"h4"}>历年点兔愚人节活动镜像</Typography>
                        <Typography>我们只是想构建一个页面，来记录历年的点兔愚人节活动的细节，尽最大努力还原当时的样子！</Typography>
                    </Stack>
                    <React.Suspense fallback={<Loading/>} fallbackMinDurationMs={5000}>
                        <Activities/>
                    </React.Suspense>
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
