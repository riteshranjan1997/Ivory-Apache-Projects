import React from "react";
import Card from "@material-ui/core/Card";
import SideBar from "./SideBar"
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin:"10px"
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
    marginLeft:"10px"
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
  cardNumber: {
    display:"flex",
    border:"1px solid lightgrey",
    borderRadius:"5px",
    alignItems:"center",
    padding:"5px"
  },
  floatLeft: {
    float: "left",
    color: "grey",
    marginLeft: "20px"
  },
  buttons:{
    display:"flex",
    flexDirection:"flex-start",
    padding:"20px",
    fontWeight:"bolder",
  },
}));

function Payments() {
  const classes = useStyles();
  const [AddCreditCardDetails, setAddCreditCardDetails] = React.useState(false);
  const [AddPaypalAccount,setAddPaypalAccount] = React.useState(false)
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
    <div className={classes.root}>
      <SideBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Card className={classes.root}>
          <Typography className={classes.title}>CreditCards</Typography>
          <CardContent>
            {!AddCreditCardDetails ? (
              <div>
                <Typography
                  style={{
                    textAlign: "left",
                    padding: "5px",
                    fontSize: "13px",
                    color: "#3B5998",
                  }}
                  onClick={(AddCreditCardDetails) =>
                    setAddCreditCardDetails(true)
                  }
                >
                  + Add New CreditCard
                </Typography>
              </div>
            ) : (
              <div>
                <form>
                  <div className="form-row">
                    <div className="form-group col-4" >
                      <div className="row">
                        <div className="col-12"  className={classes.floatLeft}>
                            <label for="cardNumber" >
                            Card Number
                          </label></div>
                        </div>
                        
                      <div className={classes.cardNumber}>
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9ZNXfc4_B0l22XpjnRKVB7ZRQ3F48RtiYlA&usqp=CAU" 
                             height="30px"
                             width="30px" 
                             alt="Image"/></div>
                        <div><input
                          type="text"              
                          id="cardNumber"
                          style={{outline:"none",border:"1px solid white",width:"170px",marginLeft:"5px"}}
                        /></div>
                      </div>
                    </div>
                    <div className="form-group col-3" >
                      <div className="row">
                        <div className="col-12"  className={classes.floatLeft}>
                            <label for="cardNumber" >
                            Card Number
                          </label></div>
                        </div>
                        
                      <div className={classes.cardNumber}>
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9ZNXfc4_B0l22XpjnRKVB7ZRQ3F48RtiYlA&usqp=CAU" 
                             height="30px"
                             width="0px" 
                             alt="Image"/></div>
                        <div><input
                          type="text"              
                          style={{outline:"none",border:"1px solid white",width:"170px",marginLeft:"5px"}}
                        /></div>
                      </div>
                    </div>
                    <div className="form-group col-3" >
                      <div className="row">
                        <div className="col-12"  className={classes.floatLeft}>
                            <label for="cardNumber" >
                              Security Code
                          </label></div>
                        </div>
                        
                      <div className={classes.cardNumber}>
                        <div><img src="https://icons-for-free.com/iconfiles/png/512/card+credit+card+debit+card+master+card+icon-1320184902079563557.png" 
                             height="30px"
                             width="30px" 
                             alt="Image"/></div>
                        <div><input
                          type="text"           
                          style={{outline:"none",border:"1px solid white",width:"170px",marginLeft:"5px"}}
                        /></div>
                      </div>
                    </div>
                    <div className="form-group col-2" >
                      <div className="row">
                        <div className="col-12"  className={classes.floatLeft}>
                            <label for="cardNumber" >
                            Postal Code
                          </label></div>
                        </div>
                        
                      <div className={classes.cardNumber}>
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9ZNXfc4_B0l22XpjnRKVB7ZRQ3F48RtiYlA&usqp=CAU" 
                             height="30px"
                             width="0px" 
                             alt="Image"/></div>
                        <div><input
                          type="text"              
                          style={{outline:"none",border:"1px solid white",width:"100px",marginLeft:"5px"}}
                        /></div>
                      </div>
                    </div>
                    <div className={classes.buttons}>
                          <Button    style={{backgroundColor:"#2B8282",color:"white",width:"233px",marginRight:"5px"}}>
                             Save
                          </Button>
                          <Button  onClick= {(AddCreditCardDetails)=>setAddCreditCardDetails(false)} style={{border:"1px solid #2B8282",color:"#2B8282",width:"233px"}}>
                                Cancel
                          </Button>
                      </div>
                  </div>
                </form>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <Typography className={classes.title}>Paypal Accounts</Typography>
          <CardContent>
            {!AddPaypalAccount ? (
              <div>
                <Typography
                  style={{
                    textAlign: "left",
                    padding: "5px",
                    fontSize: "13px",
                    color: "#3B5998",
                  }}
                  onClick={(AddPaypalAccount) =>
                    setAddPaypalAccount(true)
                  }
                >
                  + Add New PaypalAccount
                </Typography>
              </div>
            ) : (
              <div>
                
              </div>
            )}
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <Typography className={classes.title}>Expense your Business Meals</Typography>
          <CardContent>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div className="text-muted">
                  Link your expense provider and we'll send receipts within 24 hours of order confirmation.
                </div>
                <div>
                  <Typography
                    style={{
                      textAlign: "left",
                      padding: "5px",
                      fontSize: "13px",
                      color: "#3B5998",
                    }}
                    onClick={handleClickOpen} 
                  >
                    Link Provider
                  </Typography>
                  </div>
              </div>
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
                <h4 className={classes.modelHeading}>Choose Your provider</h4>

                <DialogContentText>
                  <div className={classes.design}></div>
                  <form>
                    <div className="form-row">
                      <div className="form-group col-6">
                        <label htmlFor="street">Expense Provider</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                        <small>Don't see yours?<span style={{color:"#2B8282"}}>let us know</span></small>
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group col-6">
                        <label htmlFor="city">Business Email</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email address"
                        />
                      </div>
                      </div>
                  </form>
                  
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
                  Link Provider
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
  );
}

export default Payments;
