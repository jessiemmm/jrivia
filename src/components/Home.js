import service from "../services/trivia-service"
import {useState, useEffect} from "react";
import { render } from "@testing-library/react";
import CreateTrivia from "./CreateTrivia";

function Home(props) {
    
    const [trivia, setTrivia] = useState([]);

    useEffect(() => {
        service.findAllTrivia()
        .then(trivia => setTrivia(trivia))
    });
    
    return (
        <div>
    <CreateTrivia/>
        <div className="home">
            {trivia.map(element => {
                return(<p>{element.question}</p>) 
            })}
        </div>
        </div>
    );
    
}

export default Home;