import { useState } from 'react';
import {BrowserRouter,Route, Link, Routes} from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import Register from "./components/Register"
import Signin from "./components/Signin"
import Profile from "./components/Profile/index"
import './vendors/bootstrap/vapor-bootstrap.min.css'
import CreateTrivia from "./components/CreateTrivia";

function App() {
  const [signIn, setSignIn] = useState(false);
  const [username, setUsername] = useState('');


  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
