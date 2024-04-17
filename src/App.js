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
        <Route path="/signUp" element ={<SignUp/>} />
        <Route path="/signIn" element ={<SignIn/>} />
        <Route path="/forgotPassword" element ={<ForgotPassword/>} />
        <Route path="/offers" element ={<Offers/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
