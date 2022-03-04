import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  Footer: {
    paddingBottom: theme.spacing(2),
  },
  colorText: {
    color: "#bdbdbd",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h6" align="center" className={classes.Footer}>
        <b> Footer</b>
      </Typography>
      <Typography align="center" className={classes.colorText}>
        Something here to give the footer a purpose!
      </Typography>
      <Typography align="center" className={classes.colorText}>
        Copyright © <Link color="inherit">Your Website</Link> 2022.
      </Typography>
    </Box>
  );
}
