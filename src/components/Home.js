import service from "../services/trivia-service"
import {useState, useEffect} from "react";
import { render } from "@testing-library/react";
import CreateTrivia from "./CreateTrivia";
import Logout from "./Logout";
import Question from "./Question/Question";

function Home(props) {
    
    const [trivia, setTrivia] = useState([]);

    useEffect(() => {
        service.findAllTrivia()
        .then(trivia => setTrivia(trivia))
    });
    
    return (
        <div>
            <p>
                {localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).username : <></>}
            </p>
            
            <Logout />
            <CreateTrivia/>
            <div className="home">
                {trivia.map(trivia => {
                    return(<Question trivia={trivia} />
                        ) 
                })}
            </div>
        </div>
    );
    
}

export default Home;