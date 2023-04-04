import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useLoaderData } from 'react-router-dom';
import { ajax } from "../../lib/http";
import ActivityCard from "../../components/card/activity";
import ListItems from "../../components/base/list";
import CommonView from "../../components/view/common";

export const loader = async () => {
    return await ajax("/af");
};

export const Component = () => {
    const data = useLoaderData();
    return (
        <CommonView title="历年愚人节活动镜像" image={"https://panda995.top:500/img/2023/02/057%20(%E5%A4%A7).png"}>
            <Stack spacing={2}>
                <Typography variant={"h4"}>历年点兔愚人节活动镜像</Typography>
                <Typography>该活动于2014年首次举行，但因当时点兔拥有的粉丝较少，目前仅有2015年之后的网页镜像，欢迎有意者提供相关资料！</Typography>
                <Typography>历年的愚人节活动对原作的影响重大，例如2015年的Magical Girl Chino，已有众多相关衍生物：香风智乃 魔法少女使Ver. 手办、Kirara Fantasia里的香风智乃的原型。</Typography>
                <Typography>因此我想保留下来，供大家查看。</Typography>
            </Stack>
            <ListItems>
                {data.items.map((item, index) => {
                    return (
                        <ActivityCard year={item.year} name={item.name} image={item.image} url={`/af/${item.id}`} key={index} />
                    );
                })}
            </ListItems>
        </CommonView>
    );
};
