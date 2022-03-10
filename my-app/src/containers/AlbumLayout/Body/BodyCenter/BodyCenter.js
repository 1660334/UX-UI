import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import DialogCinfirmDeleteCard from "./Dialog/DialogConfirmDeleteCard";
import DataCard from "../../../../datacard/data.json";
import DataImage from "../../../../dataimage/dataImage.json";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import DialogEditCard from "./Dialog/DialogAddCard";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    height: 250,
    width: "100%",
  },
  text: {
    height: 50,
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
export default function BodyTop(props) {
  const classes = useStyles();
  const { arr, setArr, setArrImage } = props;
  const [openDialogConfirmDelete, setOpenDialogConfirmDelete] = useState(false);
  const [getIdDelete, setGetIdDelete] = useState();
  const [getDataEdit, setGetDataEdit] = useState({});
  const [open, setOpen] = useState();

  useEffect(() => {
    // setArr(DataCard.map((item) => ({ ...item, isEdit: false })));
    //truyền data từ file .json cho hàm setArr để thay đổi giá trị biến arr ban đầu khi reload
    setArrImage(DataImage);
    setArr(DataCard);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const handleGetDataDelete = (data) => {
    console.log("data", data);
    const newCard = arr.filter((item) => item.id !== data);
    console.log("newCard", newCard);
    setArr(newCard);
  };

  const newDataEditCard = {
    img: getDataEdit.img,
    title: getDataEdit.title,
    text: getDataEdit.text,
    id: getDataEdit.id,
  };
  const handleClickEditCard = (data) => {
    setOpen(true);
    setGetDataEdit(data);
    console.log("data", data);
    //cách 2 edit
    // setGetImage(data.img);
    //clone data;
    // const arrData = [...arr];
    // console.log(data);
    // arrData[index] = { ...data, isEdit: true };
    // setArr(arrData);
  };
  const handleSaveDataEditCard = () => {
    return arr.filter((item) => {
      if (item.id === getDataEdit.id) {
        console.log("đã vào đây nè bà con");
        item.img = newDataEditCard.img;
        item.title = newDataEditCard.title;
        item.text = newDataEditCard.text;
        console.log("arr", arr);
        setArr(arr);
        setOpen(false);
      }
      return setArr(arr);
    });
  };
  //sau khi click button xoá thì id dc truyền vào hàm setGetIdDelete để thay đổi giá trị biến getIdDelete
  //sau đó mở dialog xác nhận xoá lên
  const handleClickButtonDelete = (data) => {
    setGetIdDelete(data);
    setOpenDialogConfirmDelete(true);
  };
  return (
    <Grid container spacing={2}>
      {arr.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia title="Contemplative Reptile">
                <img
                  src={item.img}
                  className={classes.media}
                  alt="some value"
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography
                  className={classes.text}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {item.text}
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <IconButton
                aria-label="edit"
                color="primary"
                onClick={() => {
                  handleClickEditCard(item);
                  console.log("item", item);
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                color="secondary"
                onClick={() => handleClickButtonDelete(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
      {openDialogConfirmDelete && (
        <DialogCinfirmDeleteCard
          openDialogConfirmDelete={openDialogConfirmDelete}
          setOpenDialogConfirmDelete={setOpenDialogConfirmDelete}
          handleGetDataDelete={handleGetDataDelete}
          getIdDelete={getIdDelete}
        />
      )}
      {open && (
        <DialogEditCard
          open={open}
          setOpen={setOpen}
          getDataEdit={getDataEdit}
          newDataEditCard={newDataEditCard}
          handleSaveDataEditCard={handleSaveDataEditCard}
          isCheckClickButton="Edit"
        />
      )}
    </Grid>
  );
}
