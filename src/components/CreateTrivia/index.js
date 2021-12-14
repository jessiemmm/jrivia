import React, {useState} from "react";
import "./index.css";
import service from "../../services/trivia-service";
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Admin from "../Admin";

const CreateTrivia = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [triviaQuestion, setTrivia] = useState('');
    const [correctAnswer, setCorrect] = useState('');
    const [incorrectAnswer, setIncorrect] = useState('');
    const [incorrectAnswer2, setIncorrect2] = useState('');
    const [incorrectAnswer3, setIncorrect3] = useState('');
    const [incorrectAnswer4, setIncorrect4] = useState('');

    const [triviaCategory, setCategory] = useState("Science");

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }

    const createTrivia = () => {
        if(triviaQuestion === '' || correctAnswer === '' || incorrectAnswer === ''
            || incorrectAnswer2 === '' || incorrectAnswer3 === ''
            || incorrectAnswer4 === '') {
            alert('Make sure all fields are filled!')
        } else {
            service.createTrivia({
                category: triviaCategory,
                question: triviaQuestion,
                correct_answer: correctAnswer,
                incorrect_answers: [incorrectAnswer, incorrectAnswer2,
                    incorrectAnswer3, incorrectAnswer4],
                question_owner: user.username
            }).then(res => console.log(res))
        }
    };

    return(
        <div className="body">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {/*Question Box*/}
                <Form.Group className="mb-3" controlId="questionControl">
                    <h2>Question</h2>
                    <Form.Control required
                                  type="text"
                                  placeholder="What's your question?"
                                  onChange={(event) =>
                                      setTrivia(event.target.value)}/>
                </Form.Group>

                <h2>Answers</h2>
                <Row className="align-items-center">
                    <Col sm="8">
                        <Form.Group className="mb-3">
                            <Form.Label>Correct Answer</Form.Label>
                            <Form.Control as="textarea" rows={2}
                                          placeholder="A dog!"
                                          required
                                          onChange={(event) =>
                                              setCorrect(event.target.value)}
                            />
                        </Form.Group>
                    </Col>

                    <Col xs="auto">
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Select onChange={(event) => {
                                setCategory(event.target.value)
                            }}>
                                <option value="Science">Science</option>
                                <option value="Math">Math</option>
                                <option value="Art">Art</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>


                {/*Correct Answer code*/}
                {/* <div className="field">
                    <label htmlFor="correctAns">Correct Answer: </label>
                    <input type="text"
                           id="correctAns"
                           name="correctAns"
                           required={true} value={correctAnswer}
                           placeholder={"Correct Answer"}
                           onChange={(event) =>
                               setCorrect(event.target.value)}>
                    </input>
                </div>*/}

                <Form.Group className="mb-3" controlId="incorrect1Control">
                    <Form.Label>Incorrect Answer</Form.Label>
                    <Form.Control required
                                  type="text"
                                  placeholder="A cat"
                                  onChange={(event) =>
                                      setIncorrect(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="incorrect2Control">
                    <Form.Label>Incorrect Answer</Form.Label>
                    <Form.Control required
                                  type="text"
                                  placeholder="A cat"
                                  onChange={(event) =>
                                      setIncorrect2(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="incorrect3Control">
                    <Form.Label>Incorrect Answer</Form.Label>
                    <Form.Control required
                                  type="text"
                                  placeholder="A cat"
                                  onChange={(event) =>
                                      setIncorrect3(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="incorrect4Control">
                    <Form.Label>Incorrect Answer</Form.Label>
                    <Form.Control required
                                  type="text"
                                  placeholder="A cat"
                                  onChange={(event) =>
                                      setIncorrect4(event.target.value)}/>
                </Form.Group>
                
                <div className="row">
                    <div className="col-9">
                        <Button variant="primary" type="submit" onClick={createTrivia}>
                            Create
                        </Button>
                    </div>
                    <div style={{float:"right"}} className="col">
                        <Admin />
                    </div>
                </div>
                

                
            </Form>

            


        </div>
        /*<div className="body">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {/!*Question Box*!/}
                <Form.Group className="mb-3" controlId="questionControl">
                    <h2>Question</h2>
                    <Form.Control required
                                  type="text"
                                  placeholder="What's your question?"
                                  onChange={(event) =>
                                      setTrivia(event.target.value)}/>
                </Form.Group>

                <h2>Answers</h2>
                <Row className="align-items-center">
                    <Col sm="8">
                    <Form.Group className="mb-3">
                        <Form.Label>Correct Answer</Form.Label>
                        <Form.Control as="textarea" rows={2}
                                      placeholder="A dog!"
                                      required
                                      onChange={(event) =>
                                          setCorrect(event.target.value)}
                        />
                    </Form.Group>
                    </Col>

                    <Col xs="auto">
                        <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select onChange={(event) => {
                            setCategory(event.target.value)
                        }}>
                            <option value="Science">Science</option>
                            <option value="Math">Math</option>
                            <option value="Art">Art</option>
                        </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>


                {/!*Correct Answer code*!/}
               {/!* <div className="field">
                    <label htmlFor="correctAns">Correct Answer: </label>
                    <input type="text"
                           id="correctAns"
                           name="correctAns"
                           required={true} value={correctAnswer}
                           placeholder={"Correct Answer"}
                           onChange={(event) =>
                               setCorrect(event.target.value)}>
                    </input>
                </div>*!/}

                <Form.Group className="mb-3" controlId="incorrect1Control">
                    <Form.Label>Incorrect Answer</Form.Label>
                    <Form.Control required
                                  type="text"
                                  placeholder="A cat"
                                  onChange={(event) =>
                                      setIncorrect(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="incorrect2Control">
                    <Form.Label>Incorrect Answer</Form.Label>
                    <Form.Control required
                                  type="text"
                                  placeholder="A cat"
                                  onChange={(event) =>
                                      setIncorrect2(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="incorrect3Control">
                    <Form.Label>Incorrect Answer</Form.Label>
                    <Form.Control required
                                  type="text"
                                  placeholder="A cat"
                                  onChange={(event) =>
                                      setIncorrect3(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="incorrect4Control">
                    <Form.Label>Incorrect Answer</Form.Label>
                    <Form.Control required
                                  type="text"
                                  placeholder="A cat"
                                  onChange={(event) =>
                                      setIncorrect4(event.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={createTrivia}>
                    Create
                </Button>


            </Form>




        </div>*/

    );
}
export default CreateTrivia;
