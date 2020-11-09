import React from "react"
// import LandingPage from './Components/LandingPage/LandingPage'
// import TestLocation from './Components/TestLocation'
// import {BrowserRouter} from 'react-router-dom'
import RestaurentMenuItem from './Components/RestaurentMenuItem/RestaurentMenuItem'
// import SideBar from './Components/Account/SideBar'
// import Routes from './Routes/Routes'
import './App.css';

function App() {
  return (
    
        <div className="App">
          {/* <LandingPage/> */}
          <RestaurentMenuItem/>
          {/* <SideBar/>
          <Routes/> */}
          {/* <TestLocation/> */}
        </div>
   
    // <div className="App">
    //   <Routes/>
    // </div>
  );
}
export default App;
