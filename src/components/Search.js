import {useEffect, useState} from "react"
import triviaService from "../services/trivia-service";
import NavBar from "./NavBar";
import Question from "./Question/Question";
import "./index.css"

const Search = () => {
    const [searchQuestion, setSearchQuestion] = useState('');
    const [trivia, setTrivia] = useState([]);

    

    const findAll = () => {
        triviaService.findAllTrivia()
        .then(trivia => setTrivia(trivia))
    }

    useEffect(() => {
        const search = () => {
            if(searchQuestion===""){
                findAll();
            } else {
                triviaService.findTriviaByQuestion(searchQuestion)
                .then(res => setTrivia(res))
            }
            
        }

        search()
    }, [searchQuestion]);
    

    return (
        <div>
            <div style={{position:"sticky", top:"0", zIndex:"100"}} >
                <NavBar />
            </div>
            <br />
            {/*THIS IS THE SEARCH COMPONENT ITSELF*/} 
            <div className="container">
                <div className="row">

                    <div className="col-11">
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fas fa-search"></i></span>
                            <input type="text" className="form-control" onChange={(event) => setSearchQuestion(event.target.value)} value={searchQuestion}/>
                        </div>
                    </div>
                
                    <div className="col-1">
                        <i className="fas fa-times fa-2x" onClick={() => {
                            setSearchQuestion("");
                            findAll();
                        }}></i>
                    </div>
                </div>
            </div>

            <div className="home">
                {trivia.map(trivia => {
                    return(<Question key={trivia._id} trivia={trivia} />) 
                })}
            </div>
        </div>
    );
}

export default Search;