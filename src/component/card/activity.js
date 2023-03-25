import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom';

const ActivityCard = (param) => {
    const id = param.id;
    const name = param.name;
    const image = param.image;
    const description = param.description;

    return (
        <Card>
            <CardActionArea component={Link} to={`/af/${id}`}>
                <CardMedia image={image} title={name} sx={{height: 180}}/>
                <CardContent>
                    <Typography variant={"h5"} sx={{overflow: "hidden", whiteSpace: "nowrap"}}>{name}</Typography>
                    <Typography variant={"body2"} color={"text.secondary"}>{description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ActivityCard;
