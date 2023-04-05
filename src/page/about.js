import Typography from "@mui/material/Typography";
import CommonView from "../components/view/common";
import Stack from "@mui/material/Stack";
import { useLoaderData } from "react-router-dom";
import { ajax } from "../lib/http";
import ListItems from "../components/base/list";
import UserCard from "../components/card/user";

export const loader = async () => {
    return ajax("/provider")
}

export const Component = () => {
    const data = useLoaderData();
    return (
        <CommonView title={"关于"}>
            <Stack spacing={2}>
                <Typography variant={"h4"}>关于</Typography>
                <Typography>我们的宗旨是建设一个站点，尽可能在合规的情况下收集与点兔的数据并整理出来公布给大家。</Typography>
                <Typography>当然站点建设并非一人之力，还是要感谢相关人士提供相关资料！</Typography>
                <Typography variant={"h5"}>贡献者</Typography>
            </Stack>
            <ListItems>
                {data.items.map((item, index) => {
                    return (
                        <UserCard name={item.name} avatar={item.avatar} description={item.description} url={item.url} />
                    )
                })}
            </ListItems>
            <Stack spacing={2}>
                <Typography variant={"h5"}>加入我们</Typography>
                <Typography>现在我们这边有点缺人手，主负责人因为要备考高考也没时间打理网站，如果你愿意的话，可以寻找主负责人说一下。</Typography>
                <Typography variant={"h5"}>声明</Typography>
                <Typography>所有展示的页面版权归 Koi・芳文社／ご注文は製作委員会ですか 所有！因项目特殊性随时会关闭，敬请谅解！</Typography>
            </Stack>
        </CommonView>
    )
};
