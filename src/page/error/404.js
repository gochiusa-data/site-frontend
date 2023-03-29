import ErrorView from "../../components/view/error";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

export const Component = () => {
    return (
        <ErrorView title={"什么都木有（"}>
            <Typography>不如去首页逛一下吧！或者退回到上一页</Typography>
            <Stack direction={"row"} spacing={2}>
                <Button variant={"contained"} component={Link} to={"/"} replace={true}>首页</Button>
                <Button variant={"outlined"} component={Link} to={-1} replace={true}>返回</Button>
            </Stack>
        </ErrorView>
    )
}
