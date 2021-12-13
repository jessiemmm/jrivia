import {useEffect, useState} from "react"
import triviaService from "../services/trivia-service";
import NavBar from "./NavBar";
import Question from "./Question/Question";

function Search() {
    const [searchQuestion, setSearchQuestion] = useState('');
    const [trivia, setTrivia] = useState([]);

    const search = () => {
        triviaService.findTriviaByQuestion(searchQuestion)
        .then(res => setTrivia(res))
    }

    const findAll = () => {
        triviaService.findAllTrivia()
        .then(trivia => setTrivia(trivia))
    }

    useEffect(() => {
        triviaService.findAllTrivia()
        .then(trivia => setTrivia(trivia))
    }, [1]);
    
    return (
        <div>
            <div style={{position:"sticky", top:"0", zIndex:"100"}} >
                <NavBar />
            </div>
            
            <p>
                {localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).username : <></>}
            </p>
            {/*THIS IS THE SEARCH COMPONENT ITSELF*/} 
            <div>
                <input type="text" onChange={(event) => setSearchQuestion(event.target.value)} value={searchQuestion} />
                <button onClick={search}>search</button>
                <i class="fas fa-times fa-2x" onClick={() => {
                    setSearchQuestion("");
                    findAll();
                }}></i>
            </div>

            <div className="home">
                {trivia.map(trivia => {
                    return(<Question trivia={trivia} />
                        ) 
                })}
            </div>
        </div>
    );
    
}

export default Search;