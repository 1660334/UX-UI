import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 200,
    position: "relative",
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
  buttonimage: {
    padding: "80px",
    display: "flex",
    textTransform: "none",
  },
  cardContent: {
    paddingTop: theme.spacing(2),
  },
  typography: {
    margin: theme.spacing(1),
  },
  editIcon: {
    marginRight: theme.spacing(1),
  },

  fab: {
    position: "absolute",
    right: 0,
    height: 40,
    textTransform: "none",
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
    handleSaveDataEditCard,
  } = props;
  const [images, setImages] = useState(null);

  const classes = useStyles();
  const [imageEdit, setImageEdit] = useState(null);
  const [hover, setHover] = useState(false);

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

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
                <CardMedia
                  className={classes.media}
                  image={images}
                  onMouseOver={handleMouseIn}
                  onMouseLeave={handleMouseOut}
                >
                  <input
                    className={classes.input}
                    id="icon-button-file"
                    type="file"
                    onChange={(url) => hanldeDataUrlImg(url)}
                  />
                  <label htmlFor="icon-button-file">
                    {images === null ? (
                      <Button component="div" className={classes.buttonimage}>
                        <Box
                          display="flex"
                          alignItems="center"
                          flexDirection="column"
                        >
                          <AddAPhotoIcon />
                          <Typography className={classes.typography}>
                            Thêm ảnh
                          </Typography>
                        </Box>
                      </Button>
                    ) : (
                      <div className={classes.div}>
                        {hover && (
                          <Fab
                            variant="extended"
                            component="span"
                            className={classes.fab}
                          >
                            <EditIcon
                              fontSize="small"
                              className={classes.editIcon}
                            />
                            Chỉnh sửa
                            {console.log("hover", hover)}
                          </Fab>
                        )}
                      </div>
                    )}
                  </label>
                </CardMedia>

                <CardContent className={classes.cardContent}>
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
                    onMouseOver={handleMouseIn}
                    onMouseLeave={handleMouseOut}
                    image={imageEdit === null ? getDataEdit.img : imageEdit}
                    title="Edit link Image"
                  >
                    <input
                      className={classes.input}
                      id="icon-button-file"
                      type="file"
                      onChange={(url) => hanldeDataUrlImg(url)}
                    />
                    <label htmlFor="icon-button-file">
                      {hover && (
                        <Fab
                          variant="extended"
                          component="span"
                          className={classes.fab}
                        >
                          <EditIcon
                            fontSize="small"
                            className={classes.editIcon}
                          />
                          Chỉnh sửa
                          {console.log("hover", hover)}
                        </Fab>
                      )}
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
                console.log("đã vào đây");
                handleSaveDataEditCard(getDataEdit.id);
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
