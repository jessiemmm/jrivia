import { useState } from 'react';
import './App.css';
import Home from "./components/Home"
import Login from "./components/Login"
import Signin from "./components/Signin"
import CreateTrivia from "./components/CreateTrivia";

function App() {
  const [signIn, setSignIn] = useState(false);
  const [username, setUsername] = useState('');

    return (
        <>
        <Home/>
    </>
    )

 /* if (signIn) {
    return (
      <div className="App">
        <Home />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Login />
        <Signin />
      </div>
    );
  }*/
}

export default App;
