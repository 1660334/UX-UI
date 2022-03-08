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
import { Box } from "@material-ui/core";
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
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
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
    backgroundColor: "#eceff1",
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },

    color: "#f5f5f5",
  },
  iconsSize: {
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  },
  button: {
    position: "absolute",
    zIndex: 2,
    left: "0%",
    top: "1%",
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  },
  imgBackdrop: {
    width: "100%",
    height: 600,
    zIndex: 1,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  boxgrid: { position: "absolute", top: "45%" },
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
    <Grid container spacing={2}>
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
          <Box>
            <Grid
              container
              justifyContent="space-between"
              className={classes.boxgrid}
            >
              <Grid item>
                {getId > 1 ? (
                  <IconButton
                    color="default"
                    aria-label="add"
                    onClick={() => setGetId(getId - 1)}
                    className={classes.icons}
                  >
                    <KeyboardArrowLeftIcon
                      color="primary"
                      className={classes.iconSize}
                    />
                  </IconButton>
                ) : (
                  <IconButton className={classes.icons}>
                    <KeyboardArrowLeftIcon
                      disabled
                      color="disabled"
                      className={classes.iconSize}
                    />
                  </IconButton>
                )}
              </Grid>
              <Grid item>
                {arrImage.length > getId ? (
                  <IconButton
                    color="default"
                    aria-label="add"
                    onClick={() => setGetId(getId + 1)}
                    className={classes.icons}
                  >
                    <KeyboardArrowRightIcon
                      color="primary"
                      className={classes.iconSize}
                    />
                  </IconButton>
                ) : (
                  <IconButton className={classes.icons}>
                    <KeyboardArrowRightIcon
                      color="disabled"
                      disabled
                      className={classes.iconSize}
                    />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          </Box>

          <Box>
            <img
              src={getImg}
              alt="some value"
              className={classes.imgBackdrop}
            />
          </Box>
        </div>
      </Backdrop>
    </Grid>
  );
}
