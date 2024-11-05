import { useState ,useEffect} from "react";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";

import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {

  const showNavBar = location.pathname !== "/Login" && location.pathname !== "/Signup";
  useEffect(() => {
    if (window.location.pathname === '/') {
        window.location.replace('/Home');
    }
}, []);

  
  return (
    <>
  {
    showNavBar && <NavBar/>
  }
      <Router>
        <Routes>
          <Route path ="/Home" element={<Home/>}/>
        </Routes>
      </Router>

      <Footer/>

     
    </>
  );
}

export default App;
