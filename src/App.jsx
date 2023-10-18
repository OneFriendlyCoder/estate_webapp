import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import SignIn from "./pages/Signin.jsx";
import SignUp from "./pages/Signup.jsx";
import Profile from "./pages/Profile.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
