import {useEffect, useLayoutEffect, useState} from "react"
import { useParams } from "react-router-dom";
import userService, {findUserByName} from "../../services/user-service"
import "./index.css";
import NavBar from "../NavBar";
import service from "../../services/trivia-service";
import Question from "../Question/Question";

function Profile() {
    const user = JSON.parse(localStorage.getItem("user"));
    const { username } = useParams();
    const [u, setU] = useState({});
    const [editPassword, setEditPassword] = useState(false);
    const [newPassword, setNewPassword] = useState("");

    const [trivias, setTrivias] = useState([]);
    const [favoriteQs, setFavs] = useState([]);


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
                            Password: <span> &#183;&#183;&#183;&#183;&#183;&#183;&#183;</span>
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
    }, [getUser, u]);

    let favIDs = [];
    const getQs = ()  => {
        for (let i = 0; i < user.favorite_trivia_ids.length; i++) {
            console.log(user.favorite_trivia_ids.length);
            if (favIDs.includes(user.favorite_trivia_ids[i])) {
                break;
            } else {
                favIDs.push(user.favorite_trivia_ids[i])
                service.findTriviaById(favIDs[i])
                    .then(trivia => setTrivias(trivia))

            }
        }

        console.log(trivias)
        console.log(favIDs)
        //renderQuestion()
    }

    const renderQuestion = () => {
        if(trivias.length !== 0) {
            {trivias.forEach((trivia) => {
                return (<Question trivia={trivia} />)
            })}
        }
    }

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
                            <div>
                                <button type="button" className="btn btn-outline-secondary"
                                onClick={getQs}>See A Random Favorite</button>
                                {trivias.map(trivia => {
                                    return(<Question key={trivia._id} trivia={trivia} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
        
    )

}

export default Profile;