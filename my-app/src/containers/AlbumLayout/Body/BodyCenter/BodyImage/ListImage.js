import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    height: 300,
    width: "100%",
  },
  card: {
    height: 300,
  },
}));
export default function ListImage(props) {
  const classes = useStyles();
  const { arrImage } = props;
  return (
    <Grid container spacing={3}>
      {arrImage.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card className={classes.root}>
            <CardActionArea className={classes.card}>
              <CardMedia title="Contemplative Reptile">
                <img
                  src={item.img}
                  className={classes.media}
                  alt="some value"
                />
              </CardMedia>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
