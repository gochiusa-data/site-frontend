import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";

const URLCard = (param) => {
    const url = param.url;
    const avatar = param.avatar;
    const title = param.title;
    const description = param.description;

    return (
        <Card sx={{maxWidth: 380}}>
            <CardActionArea component={"a"} href={url}>
                <CardHeader
                    title={title}
                    avatar={<Avatar src={avatar}/>}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">{description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default URLCard;
