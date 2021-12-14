import {useEffect, useState} from "react"
import { useParams, Link } from "react-router-dom";
import userService from "../../services/user-service"
import "./index.css";
import NavBar from "../NavBar";

function Profile() {
    const user = localStorage.getItem("user");
    const { username } = useParams();
    const [u, setU] = useState({_id:0});
    const [editPassword, setEditPassword] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [passwordMsg, setPasswordMsg] = useState("");
    

    const getUser = () => {
        userService.findUserByName(username).then(res => setU(res[0]))
    }

    const updatePassword = () => {
        
        if(newPassword.length > 5) {
            let q = JSON.parse(user)
            q.password = newPassword
            userService.updateUser(q).then(res => console.log(res));
            localStorage.setItem("user", JSON.stringify(q));
            setPasswordMsg("Success!");
        } else {
            setPasswordMsg("Password too short!");
        }
        
    }

    const showEditPassword = () => {
        if(editPassword){
            return (
                <div>
                    <input type="text" onChange={event => setNewPassword(event.target.value)}/>
                    <button onClick={updatePassword}>CHANGE PASSWORD</button>
                    {passwordMsg}
                </div>
                
            )
        }
    }

    const showPassword = () => {
        if(user) {
            if(JSON.parse(user).username === username) {
                return (
                    <div className="row">
                        <div className="col-4">
                            Password: <span>&#183;&#183;&#183;&#183;&#183;&#183;&#183;</span>
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
        getUser();
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
                        <div>
                            {(u._id !== 0)? u.favorite_trivia_ids.map((id) => {
                                return <Link to={`/details/${id}`}><p>Question_{id}</p></Link>
                            }): <></>}
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
        
    )

}

export default Profile;