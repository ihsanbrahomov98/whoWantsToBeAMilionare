import { useState } from "react";
import "./app.css";
import "./mainContainer.css";
import questionNumber from "./components/questionNumberAndPrize";

const App = () => {
  const [question, setQuestion] = useState(10);
  const [timer, setTimer] = useState(30);
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
          <div className="singleQuestionContainer"></div>
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
