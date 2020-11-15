import React, {useState} from "react";
import Bar from "../common/AppBar"
import SideBar from "./SideBar"
import {} from "../../redux/Auth/action";
import { useDispatch, useSelector } from "react-redux";
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
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    padding:"20px"
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
  const theme = useTheme();
  const dispatch = useDispatch();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [newOpenStatus, setNewOpenStatus] = useState(false);
  const [newEditStatus, setEditOpenStatus] = useState(false);

  const userData = useSelector((state) => state.auth.user_data)
  
  const  [Street, setStreet] = useState("")
  const  [aptName, setAptName] = useState("")
  const  [city, setCity] = useState("")
  const [addstate, setAddState] = useState("")
  const  [zipCode, setzipCode] = useState("")
  const  [phone, setPhone] = useState("")
  const  [crossStreet, setcrossStreet] = useState("")
  const  [delivaryInstructions, setDelivaryInstructions] = useState("")
  const  [addressName, setAddressName] = useState("")
  
  const handleAddAddress = () => {

    console.log(Street,aptName,city,addstate,zipCode,phone,crossStreet,delivaryInstructions,addressName)

    setStreet("")
    setAptName("")
    setCity("")
    setAddState("")
    setzipCode("")
    setPhone("")
    setcrossStreet("")
    setDelivaryInstructions("")
    setAddressName("")
  }

  const handleEditClickOpen = () => {

  }

  const handleEditClose = () => {

  }


  const handleNewClickOpen = () => {
    setNewOpenStatus(true);
  };

  const handleNewClose = () => {
    setNewOpenStatus(false);
  };
  return (
    <>
      <Bar/>
      <Grid container>
      <SideBar/>
    <Grid xs={9} item style={{marginTop:"60px "}}>
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title}>Addresses</Typography>
            <Typography
              style={{ textAlign: "left", padding: "5px", fontSize: "13px" }}
            >
             {/* {userData.address === [] ? "You don't have any saved address" : userData.address.map((elem,i) => {
               <>
                <p>{i}</p>
               </>
             })}  */}
            </Typography>
            <hr style={{ width: "110%", marginLeft: "-7%" }} />
            <Typography
              onClick={handleNewClickOpen}
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
              open={newOpenStatus}
              fullWidth="fullwidth"
              maxWidth="sm"
              onClose={handleNewClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                <h4 className={classes.closeMark} onClick={handleNewClose}>
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
                          value={Street}
                          placeholder="e.g. 555,main St."
                          onChange = {((e) => setStreet(e.target.value))}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-12">
                        <label htmlFor="apt">Apt,suite,floor</label>
                        <input
                          type="text"
                          className="form-control"
                          value={aptName}
                          placeholder="e.g. 15F"
                          onChange = {((e) => setAptName(e.target.value))}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-6">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          className="form-control"
                          value={city}
                          placeholder=""
                          onChange = {((e) => setCity(e.target.value))}
                        />
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="state">State</label>
                        <input
                          type="text"
                          className="form-control"
                          value={addstate}
                          placeholder=""
                          onChange = {((e) => setAddState(e.target.value))}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-6">
                        <label htmlFor="zip">Zip Code</label>
                        <input
                          type="text"
                          className="form-control"
                          value={zipCode}
                          placeholder="e.g. 10018"
                          onChange = {((e) => setzipCode(e.target.value))}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-6">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          value={phone}
                          placeholder="e.g. (555) 555-1212"
                          onChange = {((e) => setPhone(e.target.value))}
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
                          value={crossStreet}
                          placeholder="e.g. Main Street and Second Avenue"
                          onChange = {((e) => setcrossStreet(e.target.value))}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-12">
                        <label htmlFor="delivary">Delivary instructions</label>
                        <input
                          type="text"
                          className="form-control"
                          value={delivaryInstructions}
                          placeholder="e.g. checkin with the doorman"
                          onChange = {((e) => setDelivaryInstructions(e.target.value))}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-12">
                        <label for="address">Address Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={addressName}
                          placeholder="e.g. home"
                          onChange = {((e) => setAddressName(e.target.value))}
                        />
                      </div>
                    </div>
                  </form>
                  <div className={classes.design}></div>
                </DialogContentText>
              </DialogContent>

              <div className={classes.buttons}>
                <Button
                  onClick={handleNewClose,handleAddAddress}
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
                  onClick={handleNewClose}
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
    </Grid>
      
    
    </Grid>
    </>
  );
}

export default Address;
