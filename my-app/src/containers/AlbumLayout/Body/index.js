import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import BodyTop from "./BodyTop/BodyTop";
import DialogAddCard from "./BodyCenter/Dialog/DialogAddCard";
import BodyCenter from "./BodyCenter/BodyCenter";
import DataCard from "../../../datacard/data.json";
const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  button: {
    position: "sticky",
    top: "60%",
    bottom: theme.spacing(2),
    left: "85%",
    zIndex: 5,
    transform: "translate(-50, -50%)",
  },
}));
export default function BodyAlbum() {
  const classes = useStyles();

  const [arr, setArr] = useState([]);
  const [filterArr, setFilterArr] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickAddCard = () => {
    console.log("đã vào đây");
    setOpen(true);
  };

  const newData = {
    img: "",
    title: "",
    text: "",
    id: DataCard.length + 1,
  };

  const handleAddCard = () => {
    console.log("data", newData);
    if (newData.img !== "" && newData.title !== "" && newData.text !== "") {
      setArr([...arr, newData]);
      setFilterArr([...arr, newData]);
      setOpen(false);
    }
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="sm">
          <Box pt={8} pb={4}>
            <BodyTop />
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Button
          color="secondary"
          variant="contained"
          className={classes.button}
          onClick={handleClickAddCard}
        >
          <AddIcon className={classes.extendedIcon} />
          Add to Card
        </Button>
        <Container maxWidth="md">
          <Box py={8}>
            <BodyCenter
              arr={arr}
              setArr={setArr}
              filterArr={filterArr}
              setFilterArr={setFilterArr}
            />
          </Box>
        </Container>
      </Grid>
      {open && (
        <DialogAddCard
          open={open}
          setOpen={setOpen}
          handleClickAddCard={handleClickAddCard}
          newData={newData}
          handleAddCard={handleAddCard}
        />
      )}
    </Grid>
  );
}
