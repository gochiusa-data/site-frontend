import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useLoaderData } from "react-router-dom";
import { ajax } from "../../lib/http";
import ActivityCard from "../../components/card/activity";
import CommonView from "../../components/view/common";
import ListItems from "../../components/base/list";

export const loader = async () => {
    return await ajax("/ge");
};

export const Component = () => {
    const data = useLoaderData();
    return (
        <CommonView title={"点兔展会"} image={"https://panda995.top:500/img/2023/04/IMG_0987_20230403-002004_.webp"}>
            <Stack spacing={2}>
                <Typography variant={"h4"}>点兔展会</Typography>
                <Typography>借助点兔十周年，官方开启了点兔展会。其中在展会上贩卖有大量周边，再现了心爱和智乃的房间摆布，展览了等身手办与服装，并且在该展会中还放出了漫画第10卷封面、有关原作者的部分情报、各位角色的血型、生日与最新身高、未公开原画等各种重要资料。</Typography>
                <Typography>而在2023年2月23日2023年至3月12日东京场次期间，即点兔展会的最后一站，还给游客们提供了类似于奖章收集的页面，其中有类似于AR拍照功能，你可以跟你喜欢的角色一起拍照！</Typography>
            </Stack>
            <ListItems>
                {data.items.map((item, index) => {
                    return (
                        <ActivityCard year={item.year} name={item.name} image={item.image} url={`/ge/${item.id}`} key={index} />
                    );
                })}
            </ListItems>
        </CommonView>
    );
};
