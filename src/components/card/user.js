import Avatar from "@mui/material/Avatar";
import Card from '@mui/material/Card';
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography";

const UserCard = (param) => {
    const url = param.url;
    const avatar = param.avatar;
    const name = param.name;
    const description = param.description;

    return (
        <Card>
            <CardActionArea component={"a"} href={url}>
                <CardContent>
                    <Grid spacing={2} container>
                        <Grid sx={4} item>
                            <Avatar src={avatar} sx={{ width: 56, height: 56 }} />
                        </Grid>
                        <Grid sx={8} item>
                            <Typography variant={"h5"}>{name}</Typography>
                            <Typography>{description}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default UserCard;
