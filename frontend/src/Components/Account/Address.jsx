import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SideBar from './SideBar'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  content: {
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(3),
    },
    paddingLeft: theme.spacing(45),
    paddingTop: theme.spacing(10),
    paddingRight: theme.spacing(5),
  },
  toolbar: {
    toolbar: theme.mixins.toolbar,
  },
  title: {
    fontSize: 16,
    fontWeight: "bolder",
    textAlign: "left",
    padding: "5px",
  },
  pos: {
    marginBottom: 12,
  },
  closeMark: {
    color: "#2B8282",
    fontWeight: "bolder",
  },
  modelHeading: {
    color: "black",
    fontSize: "18px",
    fontWeight: "bolder",
  },
  design: {
    height: "10px",
    width: "108%",
    marginLeft: "-20px",
    borderRadius: "3px",
    background: " #f7f7f7",
    boxShadow: "34px 34px 68px #f5f5f5,-34px -34px 68px #f9f9f9",
  },
  buttons: {
    display: "flex",
    flexDirection: "flex-start",
    padding: "20px",
    fontWeight: "bolder",
  },
}));

function Address() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <SideBar/>
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title}>Addresses</Typography>
            <Typography
              style={{ textAlign: "left", padding: "5px", fontSize: "13px" }}
            >
              You don't have any saved address
            </Typography>
            <hr style={{ width: "110%", marginLeft: "-7%" }} />
            <Typography
              onClick={handleClickOpen}
              style={{
                textAlign: "left",
                padding: "5px",
                fontSize: "13px",
                color: "#3B5998",
              }}
            >
              + Add New Address
            </Typography>
            <Dialog
              fullScreen={fullScreen}
              open={open}
              fullWidth="fullwidth"
              maxWidth="sm"
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                <h4 className={classes.closeMark} onClick={handleClose}>
                  {"X"}
                </h4>
              </DialogTitle>

              <DialogContent>
                <h4 className={classes.modelHeading}>Add New Address</h4>

                <DialogContentText>
                  <div className={classes.design}></div>
                  <form>
                    <div className="form-row">
                      <div className="form-group col-4">
                        <label htmlFor="street">Street</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. 555,main St."
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-12">
                        <label htmlFor="apt">Apt,suite,floor</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. 15F"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-6">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="state">State</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-6">
                        <label htmlFor="zip">Zip Code</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. 10018"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-6">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. (555) 555-1212"
                        />
                      </div>
                    </div>
                    <small id="emailHelp" className="form-text text-dark">
                      By providing your phone number, you consent to receive
                      text messages from Grubhub related to your order. Standard
                      message rates may apply. See our Terms of Use for more
                      information.
                    </small>
                    <div className="form-row">
                      <div className="form-group col-6">
                        <label htmlFor="crossStreet">Cross Street</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. Main Street and Second Avenue"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-12">
                        <label htmlFor="delivary">Delivary instructions</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. checkin with the doorman"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-12">
                        <label for="address">Address Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. home"
                        />
                      </div>
                    </div>
                  </form>
                  <div className={classes.design}></div>
                </DialogContentText>
              </DialogContent>

              <div className={classes.buttons}>
                <Button
                  onClick={handleClose}
                  style={{
                    backgroundColor: "#2B8282",
                    color: "white",
                    width: "233px",
                    marginRight: "5px",
                  }}
                >
                  Submit
                </Button>
                <Button
                  onClick={handleClose}
                  style={{
                    border: "1px solid #2B8282",
                    color: "#2B8282",
                    width: "233px",
                  }}
                >
                  Cancel
                </Button>
              </div>
            </Dialog>
          </CardContent>
        </Card>
      </main>
    </div>
    </div>
  );
}

export default Address;
