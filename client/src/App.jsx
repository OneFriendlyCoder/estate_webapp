import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import SignIn from "./pages/Signin.jsx";
import SignUp from "./pages/Signup.jsx";
import Profile from "./pages/Profile.jsx";
import About from "./pages/About.jsx";
import Header from "./components/Header.jsx";
import PrivateRoute from './components/PrivateRoute.jsx';
import CreateListing from './pages/CreateListing.jsx';
import UpdateListing from './pages/UpdateListing.jsx';
import Listing from './pages/Listing.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route element={<PrivateRoute/>} >
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/create-listing" element={<CreateListing />}></Route>
          <Route path="/update-listing/:listingId" element={<UpdateListing />}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path='/listing/:listingId' element={<Listing />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
