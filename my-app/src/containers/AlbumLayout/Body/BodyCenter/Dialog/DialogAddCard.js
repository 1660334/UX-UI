import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 345,
  },

  media: {
    height: 200,
  },
  icon: {
    color: "#2196f3",
  },
  field: {
    marginBottom: theme.spacing(2),
  },
  input: {
    display: "none",
  },
  label: {
    height: "100%",
    width: "100%",
    padding: theme.spacing(5),
  },
}));

export default function ImgMediaCard(props) {
  const { open, setOpen, newData, handleAddCard } = props;
  const [images, setImages] = useState();

  const classes = useStyles();

  const hanldeDataUrlImg = (url) => {
    var data = URL.createObjectURL(url.target.files[0]);
    setImages(data);
    handleDataAddCard(data, "img");
    console.log("data", data);
  };
  const handleDataAddCard = (data, type) => {
    if (data !== "" && type === "img") {
      console.log("data", data);
      newData.img = data;
    }
    if (data !== "" && type === "title") {
      console.log("data", data);
      newData.title = data;
    }
    if (data !== "" && type === "text") {
      console.log("data", data);
      newData.text = data;
    }

    console.log("newData", newData);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add to Card</DialogTitle>
        <DialogContent>
          <Card className={classes.root}>
            <CardActionArea className={classes.area}>
              <CardMedia
                className={classes.media}
                image={images}
                title="Add link Image"
              >
                <input
                  accept="/Users/huynhluan/Downloads/home"
                  className={classes.input}
                  id="icon-button-file"
                  type="file"
                  onChange={(url) => hanldeDataUrlImg(url)}
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    component="span"
                    aria-label="upload picture"
                  >
                    <PhotoCamera className={classes.icon} />
                  </IconButton>
                </label>
              </CardMedia>
            </CardActionArea>
            <CardContent>
              <TextField
                label="Tiêu đề"
                type="text"
                fullWidth
                className={classes.field}
                onChange={(event, data) => {
                  handleDataAddCard(event.target.value, "title");
                }}
              />
              <TextField
                label="Nội dung"
                type="text"
                fullWidth
                onChange={(event, data) => {
                  handleDataAddCard(event.target.value, "text");
                }}
              />
            </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleAddCard()} color="primary">
            Lưu
          </Button>
          <Button onClick={() => setOpen(!open)} color="primary">
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
