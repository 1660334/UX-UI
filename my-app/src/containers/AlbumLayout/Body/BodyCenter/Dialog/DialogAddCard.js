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
  const {
    open,
    setOpen,
    newData,
    handleAddCard,
    isCheckClickButton,
    getDataEdit,
    newDataEditCard,
  } = props;
  const [images, setImages] = useState(null);

  const classes = useStyles();
  const [imageEdit, setImageEdit] = useState();
  const hanldeDataUrlImg = (url) => {
    if (isCheckClickButton === "Add") {
      var data = URL.createObjectURL(url.target.files[0]);
      setImages(data);
      handleDataAddCard(data, "img");
      console.log("data", data);
    } else {
      var dataEdit = URL.createObjectURL(url.target.files[0]);
      setImageEdit(dataEdit);
      handleDataAddCard(dataEdit, "img");
      console.log("data", dataEdit);
    }
  };
  const handleDataAddCard = (data, type) => {
    if (isCheckClickButton === "Add") {
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
    } else {
      if (data !== "" && type === "img") {
        console.log("data", data);
        newDataEditCard.img = data;
      }
      if (data !== "" && type === "title") {
        console.log("data", data);
        newDataEditCard.title = data;
      }
      if (data !== "" && type === "text") {
        console.log("data", data);
        newDataEditCard.text = data;
      }

      console.log("newDataEditCard", newDataEditCard);
    }
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="form-dialog-title"
      >
        {isCheckClickButton === "Add" ? (
          <>
            <DialogTitle id="form-dialog-title">Add to Card</DialogTitle>
            <DialogContent>
              <Card>
                <CardActionArea className={classes.area}>
                  <CardMedia
                    className={classes.media}
                    image={images}
                    title="Add link Image"
                  >
                    <input
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
          </>
        ) : (
          <>
            <DialogTitle id="form-dialog-title">Edit to Card</DialogTitle>
            <DialogContent>
              <Card>
                <CardActionArea className={classes.area}>
                  <CardMedia
                    className={classes.media}
                    image={getDataEdit.img}
                    title="Edit link Image"
                  >
                    <input
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
                    defaultValue={getDataEdit.title}
                    fullWidth
                    className={classes.field}
                    onChange={(event, data) => {
                      handleDataAddCard(event.target.value, "title");
                    }}
                  />
                  <TextField
                    label="Nội dung"
                    type="text"
                    defaultValue={getDataEdit.text}
                    fullWidth
                    onChange={(event, data) => {
                      handleDataAddCard(event.target.value, "text");
                    }}
                  />
                </CardContent>
              </Card>
            </DialogContent>
          </>
        )}

        <DialogActions>
          <Button
            onClick={() => {
              if (isCheckClickButton === "Add") {
                handleAddCard();
              } else {
              }
            }}
            color="primary"
          >
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
