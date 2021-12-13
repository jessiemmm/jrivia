import {useState} from "react"
import {Link} from "react-router-dom"
import userService from "../services/user-service"
import NavBar from "./NavBar";

function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [modSelected, setModSelected] = useState(false)
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const register = () => {
        let user_type;
        if(modSelected) {
            user_type = "moderator"
        } else {
            user_type = "general"
        }
        const u = 
        userService.createUser({
            user_type: user_type,
            username: username,
            password: password
        }).then(res => {
            if(res.msg === "user already exists") {
                setError("user already exists")
            } else {
                setSuccess("Success!")
                localStorage.setItem("user", JSON.stringify(res));
            }
        })
        
        console.log(username, password, modSelected);
    }



    return (
        <div>
            <NavBar/>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                {error}
            </div>
            
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            
            <div>
                <input type="checkbox" onChange={() => {
                    setModSelected(!modSelected)
                }} /> Moderator
            </div>

            <div>
                <button onClick={register}>
                    Register
                </button>
                {success}
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div> 
            

        </div>
        
    )



}
export default Register;