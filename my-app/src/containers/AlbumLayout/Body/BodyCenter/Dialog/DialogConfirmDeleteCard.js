import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogConfirmDelete(props) {
  const {
    openDialogConfirmDelete,
    setOpenDialogConfirmDelete,
    handleGetDataDelete,
    getIdDelete,
  } = props;
  return (
    <div>
      <Dialog
        open={openDialogConfirmDelete}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpenDialogConfirmDelete(!openDialogConfirmDelete)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Bạn có đồng ý xoá hay không?"}
        </DialogTitle>

        <DialogActions>
          <Button
            onClick={() => {
              handleGetDataDelete(getIdDelete);
              setOpenDialogConfirmDelete(!openDialogConfirmDelete);
            }}
            color="primary"
          >
            Có
          </Button>
          <Button
            onClick={() => setOpenDialogConfirmDelete(!openDialogConfirmDelete)}
            color="primary"
          >
            Không
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
