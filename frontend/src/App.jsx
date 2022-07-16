import { useState, useEffect } from "react";
import "./app.css";
import "./mainContainer.css";
import oneQuestionFourAnswers from "./components/oneQuestionFourAnswers";
import prices from "./components/prices";

const App = () => {
  const [question, setQuestion] = useState(0);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  const checkingAnswer = (answer) => {
    if (answer === true) {
      alert("true");
      setQuestion(question + 1);
    } else {
      alert("false");
    }
  };
  return (
    // Main
    <div className="main">
      {/* First Container */}
      <div className="mainContainer">
        {/* First section */}
        <div className="firstSection">1</div>
        {/* Second section */}
        <div className="secondSection">
          <div className="timer">{timer}</div>
          <div className="singleQuestionContainer">
            {oneQuestionFourAnswers[question].question}
          </div>
          <div className="answerContainer">
            <div
              className="firstQuestion"
              onClick={() =>
                checkingAnswer(
                  oneQuestionFourAnswers[question].answers[0].correct
                )
              }
            >
              {oneQuestionFourAnswers[question].answers[0].body}
            </div>
            <div
              className="secondQuestion"
              onClick={() =>
                checkingAnswer(
                  oneQuestionFourAnswers[question].answers[1].correct
                )
              }
            >
              {" "}
              {oneQuestionFourAnswers[question].answers[1].body}
            </div>
            <div
              className="thirdQuestion"
              onClick={() =>
                checkingAnswer(
                  oneQuestionFourAnswers[question].answers[2].correct
                )
              }
            >
              {" "}
              {oneQuestionFourAnswers[question].answers[2].body}
            </div>
            <div
              className="fourthQuestion"
              onClick={() =>
                checkingAnswer(
                  oneQuestionFourAnswers[question].answers[3].correct
                )
              }
            >
              {" "}
              {oneQuestionFourAnswers[question].answers[3].body}
            </div>
          </div>
        </div>
        {/* Third section */}
        <div className="thirdSection">3</div>
      </div>
      {/* Second Container */}
      <div className="secondContainer">
        {/* Lifelines Container part of Second Container */}
        <div className="lifelinesContainer">
          {/*  Begging of the Container with the lifelines  */}
          <div className="firstlifeline"></div>
          <div className="secondlifeline"></div>
          <div className="thirdlifeline"></div>
        </div>

        {/*  Begging of the Container with the questions  */}
        <div className="moneyQuestionsNumberAndPrizeContainer">
          <ul className="group">
            {prices.map((item) => (
              <li
                className={
                  question === item.id - 1
                    ? "questionsContainerSelected"
                    : "questionsContainer"
                }
              >
                <span
                  className={
                    item.saveSum === true
                      ? "questionItemNumberWhite"
                      : "questionItemNumber"
                  }
                >
                  {item.id}
                </span>
                <span
                  className={item.indent === true ? "diamond" : "diamondIdent"}
                >
                  .
                </span>
                <span
                  className={
                    item.saveSum === true
                      ? "questionItemAmountWhite"
                      : "questionItemAmount"
                  }
                >
                  {item.amount}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
