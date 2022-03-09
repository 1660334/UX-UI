import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import BodyTop from "./BodyTop/BodyTop";
import DialogAddCard from "./BodyCenter/Dialog/DialogAddCard";
import BodyCenter from "./BodyCenter/BodyCenter";
import ListImage from "./BodyCenter/BodyImage/ListImage";
const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
  },

  div: {
    position: "sticky",
    top: "60%",
    bottom: theme.spacing(2),
    right: "85%",
    zIndex: 5,
    transform: "translate(-50, -50%)",
  },
  input: {
    display: "none",
  },
}));
export default function BodyAlbum() {
  const classes = useStyles();

  const [arr, setArr] = useState([]);
  const [arrImage, setArrImage] = useState([]);

  const [open, setOpen] = useState(false);
  const [isClick, setIsClick] = useState(true);
  console.log("isClick", isClick);
  const handleClickButtonCard = () => {
    setIsClick(true);
  };
  const handleClickButtonImage = () => {
    setIsClick(false);
  };
  const handleClickAddCard = () => {
    console.log("đã vào đây");
    setOpen(true);
  };
  // const newImage = {
  //   img: "",

  //   id: arrImage.length + 1,
  // };

  // const handleAddImages = (url) => {
  //   var data = URL.createObjectURL(url.target.files[0]);
  //   newImage.img = data;
  //   console.log("url", url);
  //   setArrImage([...arrImage, newImage]);
  // };
  const handleAddImages = (url) => {
    if (url.target.files) {
      setArrImage([
        ...arrImage,
        ...[...url.target.files].map((item, index) => {
          return {
            img: URL.createObjectURL(item),
            id: arrImage.length + index + 1,
          };
        }),
      ]);
    }

    console.log(arrImage);
  };

  console.log("arrImage", arrImage);
  const newData = {
    img: "",
    title: "",
    text: "",
    id: arr.length + 1,
  };

  const handleAddCard = () => {
    console.log("data", newData);
    if (newData.img !== "" && newData.title !== "" && newData.text !== "") {
      setArr([...arr, newData]);

      setOpen(false);
    }
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="sm">
          <Box pt={8} pb={4}>
            <BodyTop
              handleClickButtonCard={handleClickButtonCard}
              handleClickButtonImage={handleClickButtonImage}
            />
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12}>
        {isClick === true ? (
          <Typography align="right" component="span" className={classes.div}>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => handleClickAddCard()}
            >
              <AddIcon className={classes.extendedIcon} />
              Add Card
            </Button>
          </Typography>
        ) : (
          <Typography align="right" component="div" className={classes.div}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={(url) => handleAddImages(url)}
            />
            <label htmlFor="contained-button-file">
              <Button color="secondary" variant="contained" component="span">
                <AddIcon className={classes.extendedIcon} />
                Upload
              </Button>
            </label>
          </Typography>
        )}

        <Container maxWidth="md">
          <Box py={8}>
            {isClick === true ? (
              <BodyCenter arr={arr} setArr={setArr} setArrImage={setArrImage} />
            ) : (
              <ListImage arrImage={arrImage} />
            )}
          </Box>
        </Container>
      </Grid>
      {open && (
        <DialogAddCard
          open={open}
          setOpen={setOpen}
          newData={newData}
          handleAddCard={handleAddCard}
          isCheckClickButton="Add"
        />
      )}
    </Grid>
  );
}
