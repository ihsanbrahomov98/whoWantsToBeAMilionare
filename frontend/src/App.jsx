import { useState, useEffect } from "react";
import "./app.css";
import "./mainContainer.css";
import oneQuestionFourAnswers from "./components/oneQuestionFourAnswers";
import prices from "./components/prices";
import "./askTheAudience.css";

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
  const [askTheAudience, setAskTheAudience] = useState(false);
  const [stopTimer, setStopTimer] = useState(false);
  const [askTheAudienceProbabilityА, setAskTheAudienceProbabilityА] =
    useState(0);
  const [askTheAudienceProbabilityB, setAskTheAudienceProbabilityB] =
    useState(0);
  const [askTheAudienceProbabilityC, setAskTheAudienceProbabilityC] =
    useState(0);
  const [askTheAudienceProbabilityD, setAskTheAudienceProbabilityD] =
    useState(0);
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
    setFirstLiveLine(false);
    let copiedObject = JSON.parse(
      JSON.stringify(oneQuestionFourAnswers[question])
    );

    const shufle = (oneQuestionFourAnswers) => {
      for (
        let i = oneQuestionFourAnswers[question].answers.length - 1;
        i > 0;
        i--
      ) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = oneQuestionFourAnswers[question].answers[i];
        oneQuestionFourAnswers[question].answers[i] =
          oneQuestionFourAnswers[question].answers[j];
        oneQuestionFourAnswers[question].answers[j] = temp;
      }
      return oneQuestionFourAnswers[question].answers;
    };
    shufle(oneQuestionFourAnswers);

    const wrongAnswers = [];
    for (let i = 0; i <= 3; i++) {
      if (
        !oneQuestionFourAnswers[question].answers[i].correct &&
        wrongAnswers.length === 0
      ) {
        wrongAnswers.push(oneQuestionFourAnswers[question].answers[i]);
      }
    }

    for (let i = 0; i <= 3; i++) {
      if (oneQuestionFourAnswers[question].answers[i].correct) {
        wrongAnswers.push(oneQuestionFourAnswers[question].answers[i]);
      }
    }
    for (let i = 0; i <= 1; i++) {
      wrongAnswers.push(oneQuestionFourAnswers[question].answers.body === "");
    }
    console.log(wrongAnswers);
    const fixed = [(oneQuestionFourAnswers[question].answers = wrongAnswers)];

    const newShufle = shufle(oneQuestionFourAnswers);

    const wrongAnswerMap = oneQuestionFourAnswers[question].answers.filter(
      (item) => item.correct === false
    );

    const rightAnswerMap = oneQuestionFourAnswers[question].answers.filter(
      (item) => item.correct === true
    );

    let newArray = [];
    for (let i = 0; i <= 3; i++) {
      if (copiedObject.answers[i].body === rightAnswerMap[0].body) {
        console.log("right");
        console.log(copiedObject.answers[i].body);
        newArray.push({
          body: copiedObject.answers[i].body,
          correct: true,
        });
      } else if (copiedObject.answers[i].body === wrongAnswerMap[0].body) {
        console.log("wrong");
        console.log(copiedObject.answers[i].bod);
        newArray.push({
          body: copiedObject.answers[i].body,
          correct: false,
        });
      } else {
        newArray.push({
          body: "",
          correct: false,
        });
        console.log(copiedObject.answers[i].body);
      }
    }
    console.log(newArray);
    const finalModifer = [
      (oneQuestionFourAnswers[question].answers = newArray),
    ];
  };
  const secondLifeLine = () => {
    setAskTheAudience(true);
    let rightAnswer = [];
    let wrongAnswer = [];
    console.log(rightAnswer);
    const difficultyOfTheQuestion =
      oneQuestionFourAnswers[question].degreeOfComplexity * 0.1;
    for (let i = 0; i <= 3; i++) {
      if (oneQuestionFourAnswers[question].answers[i].correct === true) {
        let correctAnswer = oneQuestionFourAnswers[question].answers[i];
        rightAnswer.push({ correctAnswer, index: i });
      }else{
        let wrong = oneQuestionFourAnswers[question].answers[i];
        wrongAnswer.push({ wrong, index: i });
      }
    }

 

    let randomNum = Math.random();
    console.log(difficultyOfTheQuestion);

    if (difficultyOfTheQuestion <= randomNum) {
      let boom = difficultyOfTheQuestion * 100 + Math.floor(Math.random() * 10);
    } else {
    }
  };

  return (
    <>
      {timer === 0 ? (
        <div className="lostGame">
          <div>lost game</div>
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
          <div className="firstSection">
            <div className="askTheAudienceContainer">
              <div
                className={
                  askTheAudience ? "askTheAudience" : "askTheAudienceHidden"
                }
              >
                <div className="itemContainer">
                  <div style={{ height: "40px" }} className="itemOne">
                    A
                  </div>
                  <div className="itemTwo">A</div>
                  <div className="itemThree">A</div>
                  <div className="itemFour">A</div>
                </div>
              </div>
            </div>
          </div>
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
            <div
              onClick={() => secondLifeLine()}
              className="secondlifeline"
            ></div>
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
