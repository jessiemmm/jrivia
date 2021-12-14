import {useState} from "react";
import triviaService from "../../services/trivia-service";

function Admin () {
    const [questions, setQuestions] = useState({})

    const createQuestions = () => {
        fetch('https://opentdb.com/api.php?amount=20')
        .then(response => response.json())
        .then(res => setQuestions(res.results));
        //console.log(questions)
        triviaService.createTrivia(questions);
    }

    return (
        <button onClick={() => createQuestions()}>Add 10</button>
    )
}

export default Admin;