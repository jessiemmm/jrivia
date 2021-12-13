import {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import userService from "../../services/user-service"
import "./index.css";
import NavBar from "../NavBar";

function Profile() {
    const user = JSON.parse(localStorage.getItem("user"));
    const { username } = useParams();
    const [u, setU] = useState({});
    const [editPassword, setEditPassword] = useState(false);
    const [newPassword, setNewPassword] = useState("");

    const [favoriteQs, setFavorites] = useState([]);

    const getUser = () => {
        userService.findUserByName(username).then(res => setU(res[0]))
    }

    const updatePassword = () => {
        user.password = newPassword
        userService.updateUser(user).then(res => console.log(res));
        localStorage.setItem("user", JSON.stringify(user));
    }

    const showEditPassword = () => {
        if(editPassword){
            return (
                <div>
                    <input type="text" onChange={event => setNewPassword(event.target.value)}/>
                    <button onClick={updatePassword}>CHANGE PASSWORD</button>
                </div>
                
            )
        }
    }

    const showPassword = () => {
        if(localStorage.getItem("user")) {
            if(user.username === username) {
                return (
                    <div className="row">
                        <div className="col-4">
                            Password: <span> {user.password}&#183;&#183;&#183;&#183;&#183;&#183;&#183;</span>
                        </div>
                        <div className="col-2">
                            <i class="fas fa-pencil-alt" onClick={() => setEditPassword(true)}></i>
                        </div>
                    </div>
                )
            }
        }
    }
    useEffect(() => {
        getUser()
        console.log(u)
    }, []);

    return (
        <>
        <NavBar/>
        <div className="whole-page">
            <div className="top-section">
                <div className="row">
                    <div className="col-3">
                        <img src="/images/default-profile.jpg" id="profile-img"></img>
                    </div>
                    <div className="col-9">
                        <h2>{u.username}</h2>
                        <div className="card text-white bg-dark">
                            <div className="card-body">
                                <p className="card-text">
                                    {/*user info*/}
                                    <div className="row">
                                        <div className="col">
                                            <p>Correct: {u.correct_tally}</p>
                                        </div>
                                        <div className="col">
                                            <p>Incorrect: {u.incorrect_tally}</p>
                                        </div>
                                    </div>
                                    <p>User type: {u.user_type}</p>
                                    {showPassword()}
                                    {showEditPassword()}
                                </p>
                            </div>
                        </div>
                        <div className = "favorite-questions mt-5">
                            <h2>Favorite Questions</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
        
    )

}

export default Profile;