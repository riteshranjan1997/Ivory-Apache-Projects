import React from "react";
import GoogleLogin from "react-google-login";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = React.useState("");
  const responseGoogle = (response) => {
    console.log(response);
    const fullName = response.profileObj.name;
    setName(fullName);
    axios({
      method: "POST",
      url: "http://ec2-13-127-156-161.ap-south-1.compute.amazonaws.com:5001/api/user/googleLogin",
      data: { tokenId: response.tokenId },
    }).then((response) => {
      console.log("Response from backend", response);
    });
  };
  return (
    <div className="App">
      <GoogleLogin
        clientId="1069087639484-chisqt1vcpiq2rqcbk2dvr8u3lr2k9hk.apps.googleusercontent.com"
        buttonText="L O G I N"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      ></GoogleLogin>
      <h1>{name}</h1>
    </div>
  );
}

export default App;
