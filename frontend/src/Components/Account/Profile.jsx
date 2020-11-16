import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bar from "../common/AppBar";
import SideBar from "./SideBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { userUpdateRequest } from "../../redux/Auth/action";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "20px",
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
  const accessToken = useSelector((state) => state.auth.access_token);

  const [first_name, setfirstName] = useState("");
  const [Last_name, setLastName] = useState("");
  const [password_for_editing_name, setPasswordForEditingName] = useState("");
  const [email, setEmail] = useState("");
  const [conformEmail, setConformEmail] = useState("");
  const [password_for_editing_email, setPasswordForEditingEmail] = useState("");
  const [current_password, setCurrentPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [conform_new_password, setConformNewPassword] = useState("");

  const handleNameUpdate = () => {
    const payload = {
       first_name:first_name, 
       last_name:Last_name, 
       password:password_for_editing_name}
    dispatch(
      userUpdateRequest(
        payload,
        accessToken
      )
    );
    setfirstName("");
    setLastName("");
    setPasswordForEditingName("");
  };

  const handleEmailUpdate = () => {
    console.log(email, conformEmail, password_for_editing_email);
    if (email === conformEmail) {
      const payload = {
        new_email:email, 
        confirm_email:conformEmail, 
        password:password_for_editing_email
      }
     dispatch(
       userUpdateRequest(
         payload,
         accessToken
       )
     );
     setEmail("");
    setConformEmail("");
    setPasswordForEditingEmail("");
    }
  };

  const handlePasswordChange = () => {
    console.log(current_password, new_password, conform_new_password);
    if(new_password === conform_new_password){
    const payload = {
      new_password:new_password, 
      confrim_password:conform_new_password, 
      password:current_password
    }
   dispatch(
     userUpdateRequest(
       payload,
       accessToken
     )
   );
    setCurrentPassword("");
    setNewPassword("");
    setConformNewPassword("");
     }
  };

  return (
    <>
      <Bar />
      <Grid container>
        <SideBar />

        <Grid item xs={9} style={{ marginTop: "60px" }}>
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
                              value={first_name}
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-12  col-md-6 col-lg-4">
                            <label
                              htmlFor="lastName"
                              className={classes.floatLeft}
                            >
                              Last Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                              value={Last_name}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-12  col-md-6 col-lg-4">
                            <label
                              htmlFor="password"
                              className={classes.floatLeft}
                            >
                              Current password
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                              value={password_for_editing_name}
                              onChange={(e) =>
                                setPasswordForEditingName(e.target.value)
                              }
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
                      Edit Email
                    </div>
                    <form>
                      <div className="form-row">
                        <div className="form-group col-12  col-md-6 col-lg-4">
                          <label
                            htmlFor="newEmail"
                            className={classes.floatLeft}
                          >
                            New Email
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            value={email}
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
                            value={conformEmail}
                            onChange={(e) => setConformEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-12  col-md-6 col-lg-4">
                          <label
                            htmlFor="password"
                            className={classes.floatLeft}
                          >
                            current Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder=""
                            value={password_for_editing_email}
                            onChange={(e) =>
                              setPasswordForEditingEmail(e.target.value)
                            }
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
                        Edit Password
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
                              value={current_password}
                              placeholder=""
                              onChange={(e) =>
                                setCurrentPassword(e.target.value)
                              }
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
                              value={new_password}
                              placeholder=""
                              onChange={(e) => setNewPassword(e.target.value)}
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
                              value={conform_new_password}
                              onChange={(e) =>
                                setConformNewPassword(e.target.value)
                              }
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
                            onClick={(isEditPassword) =>
                              setIsEditPassword(false)
                            }
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
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
