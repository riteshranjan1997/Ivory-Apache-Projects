import React, { useState } from "react";
import SideBar from "./SideBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import {} from "../../redux/Auth/action";
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
  nameField: {
    padding: "5px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    color: "grey",
  },
  dividerFullWidth: {
    margin: `20px 0 0 ${theme.spacing(2)}px`,
  },
  faceBook: {
    display: "flex",
    alignItems: "center",
    color: "#3B5998",
  },
  buttons: {
    display: "flex",
    flexDirection: "flex-start",
    padding: "20px",
    fontWeight: "bolder",
  },
  floatLeft: {
    float: "left",
    color: "grey",
  },
}));

function Profile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isEditName, setIsEditName] = useState(false);
  const [isEditEmail, setIsEditEmail] = useState(false);
  const [isEditPassword, setIsEditPassword] = useState(false);

  const userData = useSelector((state) => state.auth.user_data);

  const [firstName, setfirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [conformEmail, setConformEmail] = useState("");
  const [currentPassword, setcurrentPassword] = useState("")
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("")

  const handleNameUpdate = () => {
    console.log(firstName, LastName);
    setfirstName("");
    setLastName("");
  };

  const handleEmailUpdate = () => {
    console.log(email, conformEmail, password);
    if(email === conformEmail){
        console.log(true)
    }
    setEmail("");
    setConformEmail("");
    setPassword("");
  };

  const handlePasswordChange = () => {
    console.log(currentPassword,password,conformPassword)
    setcurrentPassword("")
    setPassword("")
    setConformPassword("")

  }

  return (
    <div className={classes.root}>
      <SideBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title}>Your Account</Typography>

            <div>
              {!isEditName ? (
                <div>
                  <Typography
                    style={{
                      textAlign: "left",
                      padding: "5px",
                      fontSize: "13px",
                    }}
                  >
                    Name
                  </Typography>
                  <div className={classes.nameField}>
                    <div>{userData.first_name}</div>
                    <div
                      onClick={(isEditName) => setIsEditName(true)}
                      style={{ color: "#3B5998" }}
                    >
                      Edit
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ textAlign: "left", fontWeight: "bold" }}>
                    Edit Name
                  </div>
                  <form>
                    <div className="form-row">
                      <div className="form-group col-12  col-md-6 col-lg-4">
                        <label
                          htmlFor="firstName"
                          className={classes.floatLeft}
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          onChange={(e) => setfirstName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-12  col-md-6 col-lg-4">
                        <label htmlFor="lastName" className={classes.floatLeft}>
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className={classes.buttons}>
                      <Button
                        onClick={handleNameUpdate}
                        style={{
                          backgroundColor: "#2B8282",
                          color: "white",
                          width: "233px",
                          marginRight: "5px",
                        }}
                      >
                        Update Name
                      </Button>
                      <Button
                        onClick={(isEditName) => setIsEditName(false)}
                        style={{
                          border: "1px solid #2B8282",
                          color: "#2B8282",
                          width: "233px",
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
            <hr style={{ width: "110%", marginLeft: "-7%" }} />
            {!isEditEmail ? (
              <div>
                <Typography
                  style={{
                    textAlign: "left",
                    padding: "5px",
                    fontSize: "13px",
                  }}
                >
                  Email
                </Typography>
                <div className={classes.nameField}>
                  <div>{userData.email}</div>
                  <div
                    style={{ color: "#3B5998" }}
                    onClick={(isEditEmail) => setIsEditEmail(true)}
                  >
                    Edit
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ textAlign: "left", fontWeight: "bold" }}>
                  Edit Name
                </div>
                <form>
                  <div className="form-row">
                    <div className="form-group col-12  col-md-6 col-lg-4">
                      <label htmlFor="newEmail" className={classes.floatLeft}>
                        New Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-12  col-md-6 col-lg-4">
                      <label
                        htmlFor="conformEmail"
                        className={classes.floatLeft}
                      >
                        Conform New Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        onChange={(e) => setConformEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-12  col-md-6 col-lg-4">
                      <label htmlFor="password" className={classes.floatLeft}>
                        current Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder=""
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={classes.buttons}>
                    <Button
                      onClick={handleEmailUpdate}
                      style={{
                        backgroundColor: "#2B8282",
                        color: "white",
                        width: "233px",
                        marginRight: "5px",
                      }}
                    >
                      Update Email
                    </Button>
                    <Button
                      onClick={(isEditName) => setIsEditEmail(false)}
                      style={{
                        border: "1px solid #2B8282",
                        color: "#2B8282",
                        width: "233px",
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}
            <hr style={{ width: "110%", marginLeft: "-7%" }} />
            <div>
              {!isEditPassword ? (
                <div>
                  <Typography
                    style={{
                      textAlign: "left",
                      padding: "5px",
                      fontSize: "13px",
                    }}
                  >
                    Password
                  </Typography>
                  <div className={classes.nameField}>
                    <div>{/* password */}</div>
                    <div
                      onClick={(isEditPassword) => setIsEditPassword(true)}
                      style={{ color: "#3B5998" }}
                    >
                      Edit
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ textAlign: "left", fontWeight: "bold" }}>
                    Edit Name
                  </div>
                  <form>
                    <div className="form-row">
                      <div className="form-group col-12  col-md-6 col-lg-4">
                        <label
                          htmlFor="currentPassword"
                          className={classes.floatLeft}
                        >
                          Current password
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          onChange={(e) => setcurrentPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-12  col-md-6 col-lg-4">
                        <label
                          htmlFor="newPassword"
                          className={classes.floatLeft}
                        >
                          New password
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-12  col-md-6 col-lg-4">
                        <label
                          htmlFor="confirmpassword"
                          className={classes.floatLeft}
                        >
                          Confirm Password
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          onChange={(e) => setConformPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className={classes.buttons}>
                      <Button
                      onClick={handlePasswordChange}
                        style={{
                          backgroundColor: "#2B8282",
                          color: "white",
                          width: "233px",
                          marginRight: "5px",
                        }}
                      >
                        Update Password
                      </Button>
                      <Button
                        onClick={(isEditPassword) => setIsEditPassword(false)}
                        style={{
                          border: "1px solid #2B8282",
                          color: "#2B8282",
                          width: "233px",
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
            <hr style={{ width: "110%", marginLeft: "-7%" }} />
            <div className={classes.faceBook}>
              <div>
                <i
                  className="fab fa-facebook-square"
                  style={{ fontSize: "30px", marginRight: "10px" }}
                ></i>
              </div>
              <div>continue with facebook</div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default Profile;
