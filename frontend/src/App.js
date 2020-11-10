import React from "react"
import Routes from './Routes/Routes'
import './App.css';
// import RestaurentMenuItem from './Components/RestaurentMenuItem/RestaurentMenuItem'
// import Filter from './Components/RestaurantsListingPage/Filter'
import CheckoutPage from './Components/CheckoutPage/CheckoutPage'

function App() {
  return (
        <div className="App">
          {/* <Routes/> */}
          {/* <RestaurentMenuItem/> */}
          {/* <Filter/> */}
          <CheckoutPage/>
        </div>
  );
}
export default App;
