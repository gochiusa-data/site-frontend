import Grid from "@mui/material/Grid";

const ListItems = (param) => {
    return (
        <Grid spacing={2} container sx={{ my: 2 }}>
            {param.children.map((item, index) => {
                return (
                    <Grid item xs={12} sm={6} md={4} key={index}>{item}</Grid>
                )
            })}
        </Grid>
    )
}

export default ListItems;