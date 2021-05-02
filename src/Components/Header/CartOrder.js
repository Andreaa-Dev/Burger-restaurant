import React from "react";
import { useSelector } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import grey from "@material-ui/core/colors/grey";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CartOrder() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const MenuItems = useSelector((state) => {
    return state.orderReducer;
  });

  let total = 0;

  const items = MenuItems.filter((item) => {
    return item.amount > 0;
  }).map((item) => {
    const itemPrice = item.amount * item.price;
    total += itemPrice;
    return (
      <Typography gutterBottom>
        <div> {item.name}</div>
        <div>
          {item.price} x {item.amount} = {itemPrice} $
        </div>
      </Typography>
    );
  });

  return (
    <div>
      <Button color="grey[50]" onClick={handleClickOpen}>
        Your cart
      </Button>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Your order
        </DialogTitle>
        <DialogContent dividers>{items}</DialogContent>
        <p>Total: {total}$</p>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Go to pay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
