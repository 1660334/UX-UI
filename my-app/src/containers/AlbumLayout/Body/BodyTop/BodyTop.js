import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Box, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  colorText: {
    color: "#9e9e9e",
    paddingBottom: theme.spacing(4),
  },
  PhotoCameraIcon: {
    marginRight: theme.spacing(1),
  },
  distanceTypo: {
    paddingBottom: theme.spacing(3),
  },
}));
export default function BodyTop(props) {
  const classes = useStyles();
  const { handleClickButtonCard, handleClickButtonImage, isCheckClick } = props;

  return (
    <Box>
      <Typography align="center" variant="h2" className={classes.distanceTypo}>
        Album layout
      </Typography>
      <Typography align="center" variant="h5" className={classes.colorText}>
        Something short and leading about the collection below—its contents, the
        creator, etc. Make it short and sweet, but not too short so folks don't
        simply skip over it entirely.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {isCheckClick === false ? (
          <Grid item>
            <Button
              disabled
              variant="contained"
              color="primary"
              onClick={() => handleClickButtonCard()}
            >
              ALBUM CARD
            </Button>
          </Grid>
        ) : (
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleClickButtonCard()}
            >
              ALBUM CARD
            </Button>
          </Grid>
        )}
        {isCheckClick === true ? (
          <Grid item>
            <Button
              disabled
              variant="contained"
              color="primary"
              onClick={() => handleClickButtonImage()}
            >
              ALBUM IMAGES
            </Button>
          </Grid>
        ) : (
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleClickButtonImage()}
            >
              ALBUM IMAGES
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
