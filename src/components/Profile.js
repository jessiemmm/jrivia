import {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import Signin from "./Signin";
import userService from "../services/user-service"

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
        <>
        <h1>profile page</h1>
        <p>{u.username}</p>
        <p>{u.password}</p>
        <p>Correct: {u.correct_tally}</p>
        <p>Incorrect: {u.incorrect_tally}</p>
        </>
        
    )

}

export default Profile;