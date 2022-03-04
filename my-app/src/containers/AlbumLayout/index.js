import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import HeaderAlbum from "./Header/Header";
import BodyAlbum from "./Body";
import Footer from "./Footer/Footer";

export default function AlbumLayout() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <HeaderAlbum />
        </Grid>
        <Grid item xs={12}>
          <BodyAlbum />
        </Grid>
        <Grid item xs={12}>
          <Box p={8}>
            <Footer />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
