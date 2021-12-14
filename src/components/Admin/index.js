import {useState} from "react";
import triviaService from "../../services/trivia-service";

function Admin () {

    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }

    const [questions, setQuestions] = useState({})

    const createQuestions = () => {
        fetch('https://opentdb.com/api.php?amount=10')
        .then(response => response.json())
        .then(res => setQuestions(res.results));
        //console.log(questions)
        sleep(10000)
        triviaService.createTrivia(questions);
    }

    return (
        <button className="btn btn-primary" onClick={() => createQuestions()}>Add 10 Random Questions</button>
    )
}

export default Admin;