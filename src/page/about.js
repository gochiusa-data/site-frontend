import Typography from "@mui/material/Typography";
import CommonView from "../components/view/common";
import Stack from "@mui/material/Stack";

import ListItems from "../components/base/list";
import UserCard from "../components/card/user";

export const Component = () => {
    return (
        <CommonView title={"关于"}>
            <Stack spacing={2}>
                <Typography variant={"h4"}>关于</Typography>
                <Typography>我们的宗旨是建设一个站点，尽可能在合规的情况下收集与点兔的数据并整理出来公布给大家。</Typography>
                <Typography>当然站点建设并非一人之力，还是要感谢相关人士提供相关资料！</Typography>
                <Typography variant={"h5"}>贡献者</Typography>
            </Stack>
            <ListItems>
                <UserCard name={"250king"} url={"https://www.250king.top/"} avatar={"https://cravatar.cn/avatar/5b656ea9666a4326d4d9b5e109370cdf?s=128"} description={"主负责人"} />
                <UserCard name={"gochi_AI"} url={"https://gochiai.web.app/"} avatar={"https://panda995.top:500/img/2023/04/qOEwWX.webp"} description={"提供点兔展活动页面"} />
                <UserCard name={"Fatcat"} url={"https://gochiai.web.app/"} avatar={"https://pic.fatcattech.cn/imgs/2023/01/ce87029080075e41.png"} description={"提供国内服务器"} />
                <UserCard name={"fanbao"} url={"https://twitter.com/hsnyuia"} avatar={"https://pic.fatcattech.cn/imgs/2023/01/ce87029080075e41.png"} description={"协助资料翻译"} />
                <UserCard name={"香风奇诺"} url={"https://space.bilibili.com/16458408"} avatar={"https://panda995.top:500/img/2023/04/e5c8d1d90bdc5c0352794709bc70d18131668f9b.webp"} description={"协助资料翻译"} />
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
