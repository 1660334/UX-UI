import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DataCard from "../../../../datacard/data.json";
import DataImage from "../../../../dataimage/dataImage.json";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    height: 250,
    width: "100%",
  },
  text: {
    height: 50,
  },
}));
export default function BodyTop(props) {
  const classes = useStyles();
  const { arr, setArr, setArrImage } = props;
  useEffect(() => {
    setArr(DataCard); //truyền data từ file .json cho hàm setArr để thay đổi giá trị biến arr ban đầu khi reload
    setArrImage(DataImage);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Grid container spacing={3}>
      {arr.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia title="Contemplative Reptile">
                <img
                  src={item.img}
                  className={classes.media}
                  alt="some value"
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography
                  className={classes.text}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {item.text}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
