import {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import userService from "../../services/user-service"
import "./index.css";
import {Link} from "react-router-dom";

function Profile() {
    const user = JSON.parse(localStorage.getItem("user"));
    const { username } = useParams();
    const [u, setU] = useState({});

    const getUser = () => {
        userService.findUserByName(username).then(res => setU(res[0]))
    }
    useEffect(() => {
        getUser()
        console.log(u)
    }, []);

    return (
        <div className="whole-page">
            <div className="top-section">
                <div className="row">
                    <div className="col-4">
                        <i className="far fa-user"></i>
                    </div>
                    <div className="col-8">
                        <h2>{u.username}</h2>
                        <div className="row">
                            <div className="col">
                                <p>Correct: {u.correct_tally}</p>
                            </div>
                            <div className="col">
                                <p>Incorrect: {u.incorrect_tally}</p>
                            </div>
                        </div>
                        <p>User type: {u.user_type}</p>
                    </div>
                </div>
            </div>
            <div className = "favorite-questions">
                <h3>Favorite Questions</h3>
            </div>
        </div>
        
    )

}

export default Profile;