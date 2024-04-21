import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/profile" element={<PrivateRoute />}>
        <Route path="/profile" element ={<Profile/>} /></Route>
        <Route path="/signUp" element ={<SignUp/>} />
        <Route path="/signIn" element ={<SignIn/>} />
        <Route path="/forgotPassword" element ={<ForgotPassword/>} />
        <Route path="/offers" element ={<Offers/>} />
        <Route path ="create-listing" element ={<PrivateRoute/>}>
        <Route path="/create-listing" element ={<CreateListing/>} /></Route>
        <Route path ="edit-listing" element ={<PrivateRoute/>}>
        <Route path="/edit-listing/:listingId" element ={<EditListing/>} /></Route>
      </Routes>
    </Router>
    <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
  );
}

export default App;
