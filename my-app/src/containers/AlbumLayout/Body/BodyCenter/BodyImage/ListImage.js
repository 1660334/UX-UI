import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Backdrop from "@material-ui/core/Backdrop";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import CloseIcon from "@material-ui/icons/Close";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",

    backgroundColor: "#212121",
  },

  icons: {
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(9),
      height: theme.spacing(9),
    },

    color: "#f5f5f5",
  },
  iconsDisabled: {
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(9),
      height: theme.spacing(9),
    },

    color: "#9e9e9e",
  },
  button: {
    position: "absolute",
    left: "1%",
    top: "1%",
  },
  imgBackdrop: { width: "100%", height: 500 },
  div: {
    position: "relative",
  },
}));
export default function ListImage(props) {
  const classes = useStyles();
  const { arrImage } = props;
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [getImg, setGetImg] = useState();
  const [getId, setGetId] = useState();

  const handleClose = () => {
    setOpenBackdrop(false);
  };
  const handleToggle = (data) => {
    setGetId(data.id);
    setGetImg(data.img);
    setOpenBackdrop(!openBackdrop);
  };
  useEffect(() => {
    console.log("getId sau khi click", getId);
    arrImage.filter((item) => {
      if (item.id === getId) {
        setGetImg(item.img);
      }
      return false;
    });
  }, [getId]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Grid container spacing={3}>
      {arrImage.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card className={classes.root} onClick={() => handleToggle(item)}>
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

      <Backdrop className={classes.backdrop} open={openBackdrop}>
        <Fab
          color="default"
          aria-label="add"
          className={classes.button}
          onClick={handleClose}
        >
          <CloseIcon />
        </Fab>
        <div className={classes.div}>
          {getId > 1 ? (
            <IconButton
              onClick={() => setGetId(getId - 1)}
              className={classes.iconsbutton}
            >
              <KeyboardArrowLeftIcon className={classes.icons} />
            </IconButton>
          ) : (
            <IconButton disabled>
              <KeyboardArrowLeftIcon
                color="disabled"
                // className={classes.iconsDisabled}
              />
            </IconButton>
          )}

          <img src={getImg} alt="some value" className={classes.imgBackdrop} />
          {arrImage.length > getId ? (
            <IconButton onClick={() => setGetId(getId + 1)}>
              <KeyboardArrowRightIcon
                color="primary"
                className={classes.iconsbutton}
              />
            </IconButton>
          ) : (
            <IconButton disabled>
              <KeyboardArrowRightIcon
                color="disabled"
                // className={classes.iconsDisabled}
              />
            </IconButton>
          )}
        </div>
      </Backdrop>
    </Grid>
  );
}
