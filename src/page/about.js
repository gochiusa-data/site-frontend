import Typography from "@mui/material/Typography";
import CommonView from "../components/view/common";

export const Component = () => {
    return (
        <CommonView title={"关于"}>
            <Typography variant={"h4"}>关于</Typography>
            <Typography>我们的宗旨是建设一个站点，尽可能在合规的情况下收集与点兔的数据并整理出来公布给大家。</Typography>
            <Typography>当然站点建设并非一人之力，还是要感谢相关人士提供相关资料！</Typography>
        </CommonView>
    )
};
