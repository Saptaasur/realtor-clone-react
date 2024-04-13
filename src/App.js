import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/Profile" element ={<Profile/>} />
        <Route path="/SignUp" element ={<SignUp/>} />
        <Route path="/SignIn" element ={<SignIn/>} />
        <Route path="/ForgotPassword" element ={<ForgotPassword/>} />
        <Route path="/Offers" element ={<Offers/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
