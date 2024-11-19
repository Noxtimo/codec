import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Checkout = () => {
  const [open, setOpen] = React.useState(false);

  // Check if the dialog has already been shown
  React.useEffect(() => {
    const hasShownDialog = localStorage.getItem("checkoutDialogShown");

    if (!hasShownDialog) {
      setOpen(true); // Show dialog if it hasn't been shown before
    }
  }, []);

  const handleStripe = () => {
    // Mark the dialog as shown
    localStorage.setItem("checkoutDialogShown", "true");
    window.open(process.env.REACT_APP_NEW_PAGE_URL, "_blank");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to donate to help keep this website running?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No thanks</Button>
          <Button onClick={handleStripe} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Checkout;
