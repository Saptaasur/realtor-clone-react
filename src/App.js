import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Header from "./components/Header";
function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/profile" element ={<Profile/>} />
        <Route path="/sign-Up" element ={<SignUp/>} />
        <Route path="/sign-In" element ={<SignIn/>} />
        <Route path="/forgot-Password" element ={<ForgotPassword/>} />
        <Route path="/offers" element ={<Offers/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
