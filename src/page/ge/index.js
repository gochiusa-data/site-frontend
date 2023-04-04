import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import CommonView from "../../components/view/common";

export const Component = () => {
    return (
        <CommonView title={"点兔展会"} image={"https://panda995.top:500/img/2023/04/IMG_0987_20230403-002004_.webp"}>
            <Stack spacing={2}>
                <Typography variant={"h4"}>点兔展会</Typography>
                <Alert severity={"info"}>目前还在建设中，敬请期待</Alert>
            </Stack>
        </CommonView>
    )
}
