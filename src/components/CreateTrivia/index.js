import React, {useState} from "react";
import "./index.css";
//import service from "../../services/twitterService"
import service from "../../services/trivia-service";
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const CreateTrivia = () => {
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
        if(triviaQuestion === '' || correctAnswer === '') {
            alert('make sure all fields are filled')
        } else {
            service.createTrivia({
                category: triviaCategory,
                question: triviaQuestion,
                correct_answer: correctAnswer,
                incorrect_answers: [incorrectAnswer, incorrectAnswer2,
                    incorrectAnswer3, incorrectAnswer4]
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

                {/*<h2>Question:</h2>
                <input type="text" required={true} value={triviaQuestion}
                       placeholder={"What's your question?"}
                       onChange={(event) =>
                           setTrivia(event.target.value)}>
                </input>*/}

                {/*Categories*/}
                {/*<h3>Category</h3>
                <Form.Select onChange={(event) => {
                    setCategory(event.target.value)
                }}>
                    <option value="Science">Science</option>
                    <option value="Math">Math</option>
                    <option value="Art">Art</option>
                </Form.Select>*/}

                <Row className="align-items-center">
                    <Col xs="auto">
                    <h2>Answers</h2>
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

                {/*<div className="field">
                    <label htmlFor="incorrect1">Incorrect Answer: </label>
                    <input type="text"
                           id="incorrect1"
                           name="incorrect1"
                           required={true} value={incorrectAnswer}
                       placeholder={"Incorrect Answer"}
                       onChange={(event) =>
                           setIncorrect(event.target.value)}>
                    </input>
                </div>

                <div className="field">
                    <label htmlFor="incorrect2">Incorrect Answer: </label>
                    <input type="text"
                           id="incorrect2"
                           name="incorrect2"
                           required={true} value={incorrectAnswer2}
                           placeholder={"Incorrect Answer"}
                           onChange={(event) =>
                               setIncorrect2(event.target.value)}>
                    </input>

                </div>


                <div className="field">
                    <label htmlFor="incorrect3">Incorrect Answer: </label>
                <input type="text"
                       id="incorrect3"
                       name="incorrect3"
                       required={true} value={incorrectAnswer3}
                       placeholder={"Incorrect Answer"}
                       onChange={(event) =>
                           setIncorrect3(event.target.value)}>
                </input>
                </div>

                <div className="field">
                    <label htmlFor="incorrect4">Incorrect Answer: </label>
                <input type="text"
                       id="incorrect4"
                       name="incorrect4"
                       required={true} value={incorrectAnswer4}
                       placeholder={"Incorrect Answer"}
                       onChange={(event) =>
                           setIncorrect4(event.target.value)}>
                </input>
                </div>*/}




                    {/*<input type="submit"
                            className="wd-tweet-btn" onClick={createTrivia}
                            className="btn btn-primary btn-block rounded-pill"
                           value="Create Trivia Question">
                    </input>*/}

                <Button variant="primary" type="submit" onClick={createTrivia}>
                    Create
                </Button>


            </Form>




        </div>

    );
}
export default CreateTrivia;
