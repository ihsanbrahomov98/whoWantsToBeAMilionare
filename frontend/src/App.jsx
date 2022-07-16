import { useState, useEffect } from "react";
import "./app.css";
import "./mainContainer.css";
import oneQuestionFourAnswers from "./components/oneQuestionFourAnswers";
import prices from "./components/prices";

const App = () => {
  const [question, setQuestion] = useState(0);
  const [oneQuestionFourAnswersSelected, setOneQuestionFourAnswersSelected] =
    useState(oneQuestionFourAnswers[0]);
  const [timer, setTimer] = useState(10);
  const [newQuestion, setNewQuestion] = useState(false);
  const [
    backGroundColorOfAQuestionToOrangeOne,
    setBackGroundColorOfAQuestionToOrangeOne,
  ] = useState(false);
  const [
    backGroundColorOfAQuestionToOrangeTwo,
    setBackGroundColorOfAQuestionToOrangeTwo,
  ] = useState(false);
  const [
    backGroundColorOfAQuestionToOrangeThree,
    setBackGroundColorOfAQuestionToOrangeThree,
  ] = useState(false);
  const [
    backGroundColorOfAQuestionToOrangeFour,
    setBackGroundColorOfAQuestionToOrangeFour,
  ] = useState(false);
  const [firstLiveLine, setFirstLiveLine] = useState(true);
  const [stopTimer, setStopTimer] = useState(false);

  const checkingAnswer = (answer, id) => {
    if (id === "first") {
      setBackGroundColorOfAQuestionToOrangeOne(true);
    }
    if (id === "second") {
      setBackGroundColorOfAQuestionToOrangeTwo(true);
    }
    if (id === "third") {
      setBackGroundColorOfAQuestionToOrangeThree(true);
    }
    if (id === "fourth") {
      setBackGroundColorOfAQuestionToOrangeFour(true);
    }

    setStopTimer(true);

    setTimeout(() => {
      if (answer === true) {
        alert("true");
        setQuestion(question + 1);
        setTimer(10);
        setNewQuestion(true);
        setBackGroundColorOfAQuestionToOrangeOne(false);
        setBackGroundColorOfAQuestionToOrangeTwo(false);
        setBackGroundColorOfAQuestionToOrangeThree(false);
        setBackGroundColorOfAQuestionToOrangeFour(false);
        setStopTimer(false);
      } else {
        alert("false");
        setTimer(0);
        setBackGroundColorOfAQuestionToOrangeOne(false);
        setBackGroundColorOfAQuestionToOrangeTwo(false);
        setBackGroundColorOfAQuestionToOrangeThree(false);
        setBackGroundColorOfAQuestionToOrangeFour(false);
        setStopTimer(false);
      }
    }, 5000);
  };

  useEffect(() => {
    console.log("tik tak");
    if (timer >= 1 && !stopTimer) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  useEffect(() => {
    setTimer(10);
  }, [question]);

  useEffect(() => {
    setOneQuestionFourAnswersSelected(oneQuestionFourAnswers[question]);
    if (oneQuestionFourAnswersSelected)
      console.log(oneQuestionFourAnswersSelected);
  }, [question]);

  const startNewGame = () => {
    setTimer(10);
    setQuestion(0);
  };
  const firstLifeLineUsed = () => {
    const wrongAnswers = [];
    for (let i = 0; i <= 3; i++) {
      if (!oneQuestionFourAnswers[question].answers[i].correct) {
        wrongAnswers.push(oneQuestionFourAnswers[question].answers[i]);
      } else {
        wrongAnswers.push(oneQuestionFourAnswers[question].answers[i]);
      }
    }
    console.log(wrongAnswers);
  };

  return (
    <>
      {timer === 0 ? (
        <div>
          <div className="lostGame">lost game</div>
          <div>your score is: {prices[question].amount}</div>
          <div onClick={() => startNewGame()}>play new game </div>
        </div>
      ) : (
        <div>still paling</div>
      )}
      {/* // Main */}
      <div className="main">
        {/* First Container */}

        <div className="mainContainer">
          {/* First section */}
          <div className="firstSection">1</div>
          {/* Second section */}
          <div className="secondSection">
            <div className="timer">{timer}</div>
            <div className="singleQuestionContainer">
              {oneQuestionFourAnswersSelected.question}
            </div>
            <div className="answerContainer">
              <div
                id="first"
                className={
                  backGroundColorOfAQuestionToOrangeOne
                    ? "firstQuestionOrange"
                    : "firstQuestion"
                }
                onClick={(e) =>
                  checkingAnswer(
                    oneQuestionFourAnswersSelected.answers[0].correct,
                    e.target.id
                  )
                }
              >
                {oneQuestionFourAnswersSelected.answers[0].body}
              </div>
              <div
                id="second"
                className={
                  backGroundColorOfAQuestionToOrangeTwo
                    ? "firstQuestionOrange"
                    : "firstQuestion"
                }
                onClick={(e) =>
                  checkingAnswer(
                    oneQuestionFourAnswersSelected.answers[1].correct,
                    e.target.id
                  )
                }
              >
                {" "}
                {oneQuestionFourAnswersSelected.answers[1].body}
              </div>
              <div
                id="third"
                className={
                  backGroundColorOfAQuestionToOrangeThree
                    ? "firstQuestionOrange"
                    : "firstQuestion"
                }
                onClick={(e) =>
                  checkingAnswer(
                    oneQuestionFourAnswersSelected.answers[2].correct,
                    e.target.id
                  )
                }
              >
                {" "}
                {oneQuestionFourAnswersSelected.answers[2].body}
              </div>
              <div
                id="fourth"
                className={
                  backGroundColorOfAQuestionToOrangeFour
                    ? "firstQuestionOrange"
                    : "firstQuestion"
                }
                onClick={(e) =>
                  checkingAnswer(
                    oneQuestionFourAnswersSelected.answers[3].correct,
                    e.target.id
                  )
                }
              >
                {" "}
                {oneQuestionFourAnswersSelected.answers[3].body}
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
            <div
              onClick={() => firstLifeLineUsed()}
              className={
                firstLiveLine ? "firstlifeline" : "firstlifelineIncorect"
              }
            ></div>
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
                    className={
                      item.indent === true ? "diamond" : "diamondIdent"
                    }
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
    </>
  );
};

export default App;
