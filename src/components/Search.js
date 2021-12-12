import {useState} from "react"
import triviaService from "../services/trivia-service";

function Search() {
    const [searchQuestion, setSearchQuestion] = useState('');

    const search = () => {
        triviaService.findByQuestion(searchQuestion)
    }

    return (
        <div>
            <input type="text" onChange={(event) => setSearchQuestion(event.target.value)} value={searchQuestion} />
            <button>search</button>
        </div>
    )

}