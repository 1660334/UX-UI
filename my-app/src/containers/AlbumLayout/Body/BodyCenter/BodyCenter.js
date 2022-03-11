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
import { Backdrop, Box } from "@material-ui/core";

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

  cardactions: {
    justifyContent: "flex-end",
  },
  cardcontent: {
    padding: theme.spacing(1),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  imgbackdrop: {
    width: "100%",
    height: "400px",
  },
  boxBackdrop: {
    position: "relative",
  },
  typobackdrop: {
    backgroundColor: "#212121",
    position: "absolute",
    width: "100%",

    opacity: 0.9,
    bottom: 0,
  },
}));
export default function BodyTop(props) {
  const classes = useStyles();
  //Lấy dữ liệu từ các props của cpmponent Cha
  const { arr, setArr, setArrImage } = props;
  //State Hook để mở dialog xác nhận trước khi xoá
  const [openDialogConfirmDelete, setOpenDialogConfirmDelete] = useState(false);
  //Khai báo biến getIdDelete useState để lưu Id khi click và hàm setGetIdDelete để thay đổi biến id
  const [getIdDelete, setGetIdDelete] = useState();
  //useState với nhiêm vụ lưu data của card đang click vào biến
  const [getDataEdit, setGetDataEdit] = useState({});
  //useSate với nhoeemj vụ mở dialog change card
  const [open, setOpen] = useState();
  //useState với nhiệm vụ mở và đống backdrop
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [getDataCardBackdrop, setGetDataCardBackdrop] = useState([]);

  console.log("getDataCardBackdrop", getDataCardBackdrop);
  const handleClose = () => {
    setOpenBackdrop(false);
  };
  const handleToggle = (data) => {
    setGetDataCardBackdrop(data);

    setOpenBackdrop(!open);
  };

  useEffect(() => {
    //truyền data từ file .json cho hàm setArr để thay đổi giá trị biến arr ban đầu khi reload
    setArrImage(DataImage);
    setArr(DataCard);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //function thực hiện nhiệm lụ xoá khi đã được gọi với data là id ta truyền vào
  const handleGetDataDelete = (data) => {
    console.log("data", data);
    const newCard = arr.filter((item) => item.id !== data);
    console.log("newCard", newCard);
    setArr(newCard);
  };

  //object lưu data sửa đổi khi thoả điều kiện
  const newDataEditCard = {
    img: getDataEdit.img,
    title: getDataEdit.title,
    text: getDataEdit.text,
    id: getDataEdit.id,
  };

  //function mở dialog Edit và truyền data card vừa chọn để edit vào biến getDâtEdit
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

  //function xử lý Lưu data vừa sửa dổi khi đã ấn button lưu
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
            <CardActionArea onClick={() => handleToggle(item)}>
              <CardMedia title="Contemplative Reptile">
                <img
                  src={item.img}
                  className={classes.media}
                  alt="some value"
                />
              </CardMedia>
              <CardContent className={classes.cardcontent}>
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

            <CardActions className={classes.cardactions}>
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
      <Backdrop
        className={classes.backdrop}
        open={openBackdrop}
        onClick={handleClose}
      >
        <div className={classes.boxBackdrop}>
          <img
            src={getDataCardBackdrop.img}
            alt="aloalo"
            className={classes.imgbackdrop}
          />
          <Box className={classes.typobackdrop}>
            <Typography
              fullWidth
              variant="h5"
              color="inherit"
              component={"div"}
              gutterBottom
              style={{ color: "#fafafa" }}
            >
              <b>{getDataCardBackdrop.title}</b>
            </Typography>
            <Typography variant="h6" component={"div"} fullWidth gutterBottom>
              {getDataCardBackdrop.text}
            </Typography>
          </Box>
        </div>
      </Backdrop>
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
