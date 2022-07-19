import { useState, useEffect } from "react";
import "./app.css";
import "./mainContainer.css";
import oneQuestionFourAnswers from "./components/oneQuestionFourAnswers";
import prices from "./components/prices";
import "./askTheAudience.css";

const App = () => {
  const [question, setQuestion] = useState(0);
  const [totalPoints, setTotalPoints] = useState({ amount: 100, index: 0 });
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
  const [firstItem, setFirstItem] = useState({ value: 0, index: 0 });
  const [askTheAudienceProbabilityB, setAskTheAudienceProbabilityB] = useState({
    value: 0,
    index: 1,
  });

  const [askTheAudienceProbabilityC, setAskTheAudienceProbabilityC] = useState({
    value: 0,
    index: 2,
  });
  const [askTheAudienceProbabilityD, setAskTheAudienceProbabilityD] = useState({
    value: 0,
    index: 3,
  });

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
    let points = 100;
    setAskTheAudience(true);
    let rightAnswer = [];
    let wrongAnswer = [];
    console.log(rightAnswer);
    console.log(wrongAnswer);
    for (let i = 0; i <= 3; i++) {
      if (oneQuestionFourAnswers[question].answers[i].correct === true) {
        let correctAnswer = oneQuestionFourAnswers[question].answers[i];
        rightAnswer.push({ correctAnswer, index: i });
      }
    }
    for (let i = 0; i <= 3; i++) {
      if (
        oneQuestionFourAnswers[question].answers[i].correct === false &&
        oneQuestionFourAnswers[question].answers[i].body.length >= 1
      ) {
        let wrong = oneQuestionFourAnswers[question].answers[i];
        wrongAnswer.push({ wrong, index: i });
      }
    }

    const probabilityOfWrongAnswer = (answer) => {
      if (answer.wrong.correct === false) {
        console.log("wrong answers ar:");
        console.log(oneQuestionFourAnswers[question].answers[0].body);
        const i = answer.index;
        const difficultyOfTheQuestion =
          oneQuestionFourAnswers[question].degreeOfComplexity * 0.01;
        let randomNum = Math.floor(Math.random() * 10);
        let secondRandomNum = Math.floor(Math.random() * 10);
        console.log(" secondRandomNum");
        console.log(secondRandomNum);
        const change =
          difficultyOfTheQuestion * 100 + Math.floor(Math.random() * 10);
        setTotalPoints({ amount: totalPoints.amount - change, index: i });

        if (secondRandomNum <= 4) {
          console.log("parvo");
          const firstChange = Math.round((change / 3) * 1.5);
          const sChange = Math.round((change / 3) * 1);
          const cChange = Math.round((change / 3) * 0.5);

          setAskTheAudienceProbabilityB({
            value: firstChange - askTheAudienceProbabilityА,
            index: oneQuestionFourAnswers[question].answers[0].body,
          });
          setAskTheAudienceProbabilityC({
            value: sChange - askTheAudienceProbabilityА,
            index: oneQuestionFourAnswers[question].answers[1].body,
          });
          setAskTheAudienceProbabilityD({
            value: cChange - askTheAudienceProbabilityА,
            index: oneQuestionFourAnswers[question].answers[2].body,
          });
          setFirstItem({
            value: 100 - (firstChange + sChange + cChange),
            index: oneQuestionFourAnswers[question].answers[3].body,
          });
        }
        if (secondRandomNum === 5) {
          console.log("vtoro");
          const firstChange = Math.round((change / 3) * 1);
          const sChange = Math.round((change / 3) * 1.5);
          const cChange = Math.round((change / 3) * 0.5);

          setAskTheAudienceProbabilityB({
            value: firstChange - askTheAudienceProbabilityА,
            index: oneQuestionFourAnswers[question].answers[0].body,
          });
          setAskTheAudienceProbabilityC({
            value: sChange - askTheAudienceProbabilityА,
            index: oneQuestionFourAnswers[question].answers[1].body,
          });
          setAskTheAudienceProbabilityD({
            value: cChange - askTheAudienceProbabilityА,
            index: oneQuestionFourAnswers[question].answers[2].body,
          });
          setFirstItem({
            value: 100 - (firstChange + sChange + cChange),
            index: oneQuestionFourAnswers[question].answers[3].body,
          });
        }
        if (secondRandomNum >= 6) {
          console.log("treto");
          const firstChange = Math.round((change / 3) * 0.5);
          const sChange = Math.round((change / 3) * 1);
          const cChange = Math.round((change / 3) * 1.5);

          setAskTheAudienceProbabilityB({
            value: firstChange - askTheAudienceProbabilityА,
            index: oneQuestionFourAnswers[question].answers[0].body,
          });
          setAskTheAudienceProbabilityC({
            value: sChange - askTheAudienceProbabilityА,
            index: oneQuestionFourAnswers[question].answers[1].body,
          });
          setAskTheAudienceProbabilityD({
            value: cChange - askTheAudienceProbabilityА,
            index: oneQuestionFourAnswers[question].answers[2].body,
          });
          setFirstItem({
            value: 100 - (firstChange + sChange + cChange),
            index: oneQuestionFourAnswers[question].answers[3].body,
          });
        }
      }
    };
    const probabilityOfRightAnswer = (answer) => {
      if (answer.correctAnswer.correct === true) {
        const i = answer.index;
        const difficultyOfTheQuestion =
          oneQuestionFourAnswers[question].degreeOfComplexity * 0.1;
        let randomNum = Math.random();
        console.log(difficultyOfTheQuestion);
        const change =
          difficultyOfTheQuestion * 100 + Math.floor(Math.random() * 10);

        const ponits = totalPoints.amount - change;

        console.log(askTheAudienceProbabilityB);
      }
    };
    probabilityOfRightAnswer(rightAnswer[0]);
    probabilityOfWrongAnswer(wrongAnswer[0]);
  };
  useEffect(() => {
    const shufflingSecondLifeLINE = () => {
      let array = [];
      console.log("askTheAudienceProbabilityB");
      console.log(askTheAudienceProbabilityB);
      if (askTheAudienceProbabilityB.index) {
        array.push(askTheAudienceProbabilityB);
      } else {
        array.push({
          value: askTheAudienceProbabilityB.value,
          index: askTheAudienceProbabilityB.index,
          removed: true,
        });
      }
      if (askTheAudienceProbabilityC.index) {
        array.push(askTheAudienceProbabilityC);
      } else {
        array.push({
          value: askTheAudienceProbabilityC.value,
          index: askTheAudienceProbabilityC.index,
          removed: true,
        });
      }
      if (askTheAudienceProbabilityD.index) {
        array.push(askTheAudienceProbabilityD);
      } else {
        array.push({
          value: askTheAudienceProbabilityD.value,
          index: askTheAudienceProbabilityD.index,
          removed: true,
        });
      }
      if (firstItem.index) {
        array.push(firstItem);
      } else {
        array.push({
          value: firstItem.value,
          index: firstItem.index,
          removed: true,
        });
      }
      let anotherArray = [];
      let fiftyFiftyArray = [];
      for (let i = 0; i <= 3; i++) {
        if (!array[i].removed === true) {
          anotherArray.push(array[i]);
        } else {
          fiftyFiftyArray.push(array[i]);
          anotherArray.push({ arr: array[i], deleted: true });
        }
      }
      console.log(anotherArray);
      console.log(fiftyFiftyArray);
      if (fiftyFiftyArray.length > 1) {
        let sumUp = fiftyFiftyArray[0].value + fiftyFiftyArray[1].value;
        let odd = 0;
        const checkingIfEven = sumUp % 2 === 0;
        const checkingIfOdd = sumUp % 2 === 1;
        if (checkingIfOdd) {
          sumUp = Math.floor(sumUp / 2);
          odd = odd + 1;
        }
        if (checkingIfEven) {
          sumUp = sumUp / 2;
        }
        console.log(anotherArray[0].value + sumUp + odd);
        console.log(anotherArray[1].value + sumUp);
      }
      console.log(anotherArray);
    };
    shufflingSecondLifeLINE();
  }, [setAskTheAudience, askTheAudience]);

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
                  <div
                    style={{ height: firstItem.value * 2.5 }}
                    className="itemOne"
                  >
                    {firstItem.value}
                  </div>
                  <div
                    style={{ height: askTheAudienceProbabilityB.value * 2.5 }}
                    className="itemTwo"
                  >
                    {" "}
                    {askTheAudienceProbabilityB.value}
                  </div>
                  <div
                    style={{ height: askTheAudienceProbabilityC.value * 2.5 }}
                    className="itemThree"
                  >
                    {askTheAudienceProbabilityC.value}
                  </div>
                  <div
                    style={{ height: askTheAudienceProbabilityD.value * 2.5 }}
                    className="itemFour"
                  >
                    {askTheAudienceProbabilityD.value}
                  </div>
                  <div>{totalPoints.amount}</div>
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
