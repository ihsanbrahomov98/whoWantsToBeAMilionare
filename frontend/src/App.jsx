import { useState, useEffect } from "react";
import "./app.css";
import "./mainContainer.css";
import questionsForAnswering from "./components/questionsForAnswering";
import questionNumber from "./components/questionNumberAndPrize";

const App = () => {
  const [question, setQuestion] = useState(1);
  const [questionDisplayed, setQuestionDisplayed] = useState(-1);
  const [questionNumberSingle, setTquestionNumberimerSingle] = useState(1);

  useEffect(() => {
    setQuestionDisplayed(questionDisplayed + 1);
  }, [questionNumberSingle]);

  const checkingAnswer = (answer) => {
    if (answer === true) {
      alert("true");
      setTquestionNumberimerSingle(questionNumberSingle + 1);
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
          <div className="timer">{questionNumberSingle}</div>
          <div className="singleQuestionContainer">
            {questionsForAnswering[0].question}
          </div>
          <div className="answerContainer">
            <div
              className="firstQuestion"
              onClick={() =>
                checkingAnswer(questionsForAnswering[0].answers[0].correct)
              }
            >
              {questionsForAnswering[0].answers[0].body}
            </div>
            <div
              className="secondQuestion"
              onClick={() =>
                checkingAnswer(questionsForAnswering[0].answers[1].correct)
              }
            >
              {" "}
              {questionsForAnswering[0].answers[1].body}
            </div>
            <div
              className="thirdQuestion"
              onClick={() =>
                checkingAnswer(questionsForAnswering[0].answers[2].correct)
              }
            >
              {" "}
              {questionsForAnswering[0].answers[2].body}
            </div>
            <div
              className="fourthQuestion"
              onClick={() =>
                checkingAnswer(questionsForAnswering[0].answers[3].correct)
              }
            >
              {" "}
              {questionsForAnswering[0].answers[3].body}
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
            {questionNumber.map((item) => (
              <li
                className={
                  question === item.id
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
