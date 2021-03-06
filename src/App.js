import {BrowserRouter,Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import Register from "./components/Register"
import Signin from "./components/Signin"
import Profile from "./components/Profile/index"
import Search from "./components/Search"
import './vendors/bootstrap/vapor-bootstrap.min.css'
import Privacy from "./components/Privacy";
import About from "./components/About";
import Admin from "./components/Admin";
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
