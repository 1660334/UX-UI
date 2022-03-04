import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  PhotoCameraIcon: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function HeaderAlbum() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.PhotoCameraIcon}
            color="inherit"
            aria-label="menu"
          >
            <PhotoCameraIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
