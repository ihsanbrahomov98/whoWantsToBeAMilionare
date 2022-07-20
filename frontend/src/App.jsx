import { useState, useEffect } from "react";
import "./app.css";
import "./mainContainer.css";
import oneQuestionFourAnswers from "./components/oneQuestionFourAnswers";
import { prices, notReveredPrices } from "./components/prices";
import "./askTheAudience.css";
import "./callAFriend.css";
import "./lostGame.css";

const App = () => {
  const [question, setQuestion] = useState(0);
  const [totalPoints, setTotalPoints] = useState({ amount: 100, index: 0 });
  const [oneQuestionFourAnswersSelected, setOneQuestionFourAnswersSelected] =
    useState(oneQuestionFourAnswers[0]);
  const [timer, setTimer] = useState(130);
  const [heightValuesFirst, setHeightValuesFirst] = useState(140);
  const [heightValuesSecond, setHeightValuesSecond] = useState(140);
  const [heightValuesThird, setHeightValuesThird] = useState(140);
  const [heightValuesFourth, setHeightValuesFourth] = useState(140);
  const [loadingResultFromAskTheAudince, setLoadingResultFromAskTheAudince] =
    useState(true);

  const [newQuestion, setNewQuestion] = useState(false);
  const [
    backGroundColorOfAQuestionToOrangeOne,
    setBackGroundColorOfAQuestionToOrangeOne,
  ] = useState("firstQuestion");
  const [
    backGroundColorOfAQuestionToOrangeTwo,
    setBackGroundColorOfAQuestionToOrangeTwo,
  ] = useState("firstQuestion");
  const [
    backGroundColorOfAQuestionToOrangeThree,
    setBackGroundColorOfAQuestionToOrangeThree,
  ] = useState("firstQuestion");
  const [
    backGroundColorOfAQuestionToOrangeFour,
    setBackGroundColorOfAQuestionToOrangeFour,
  ] = useState("firstQuestion");
  const [firstLiveLine, setFirstLiveLine] = useState(true);
  const [secondLiveLine, setSecondtLiveLine] = useState(true);
  const [thirdLiveLine, setThirdLiveLIne] = useState(true);
  const [askTheAudience, setAskTheAudience] = useState(false);
  const [stopTimer, setStopTimer] = useState(false);
  const [askTheFriend, setAskTheFriend] = useState(false);
  const [askTheFreindRender, setAskTheFriendRender] = useState("a");
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
  const [idOfTheAnswer, setIdOfTheAnswer] = useState(0);
  const checkingAnswer = (answer, id) => {
    if (id === "first") {
      setBackGroundColorOfAQuestionToOrangeOne("firstQuestionOrange");
      setIdOfTheAnswer(0);
    }
    if (id === "second") {
      setBackGroundColorOfAQuestionToOrangeTwo("firstQuestionOrange");
      setIdOfTheAnswer(1);
    }
    if (id === "third") {
      setBackGroundColorOfAQuestionToOrangeThree("firstQuestionOrange");
      setIdOfTheAnswer(2);
    }
    if (id === "fourth") {
      setBackGroundColorOfAQuestionToOrangeFour("firstQuestionOrange");
      setIdOfTheAnswer(3);
    }

    setStopTimer(true);

    setTimeout(() => {
      if (answer === true) {
        if (id === "first") {
          setBackGroundColorOfAQuestionToOrangeOne("firstQuestionRightAnswer");
        }
        if (id === "second") {
          setBackGroundColorOfAQuestionToOrangeTwo("firstQuestionRightAnswer");
        }

        if (id === "third") {
          setBackGroundColorOfAQuestionToOrangeThree(
            "firstQuestionRightAnswer"
          );
        }
        if (id === "fourth") {
          setBackGroundColorOfAQuestionToOrangeFour("firstQuestionRightAnswer");
        }
        setTimeout(() => {
          setQuestion(question + 1);
          setTimer(10);
          setNewQuestion(true);
          setBackGroundColorOfAQuestionToOrangeOne("firstQuestion");
          setBackGroundColorOfAQuestionToOrangeTwo("firstQuestion");
          setBackGroundColorOfAQuestionToOrangeThree("firstQuestion");
          setBackGroundColorOfAQuestionToOrangeFour("firstQuestion");
          setStopTimer(false);
        }, 5000);
      } else {
        if (id === "first") {
          setBackGroundColorOfAQuestionToOrangeOne("firstQuestionWrongAnswer");
        }
        if (id === "second") {
          setBackGroundColorOfAQuestionToOrangeTwo("firstQuestionWrongAnswer");
        }

        if (id === "third") {
          setBackGroundColorOfAQuestionToOrangeThree(
            "firstQuestionWrongAnswer"
          );
        }
        if (id === "fourth") {
          setBackGroundColorOfAQuestionToOrangeFour("firstQuestionWrongAnswer");
        }
        setTimeout(() => {
          setTimer(0);
          setBackGroundColorOfAQuestionToOrangeOne("firstQuestion");
          setBackGroundColorOfAQuestionToOrangeTwo("firstQuestion");
          setBackGroundColorOfAQuestionToOrangeThree("firstQuestion");
          setBackGroundColorOfAQuestionToOrangeFour("firstQuestion");
          setStopTimer(false);
        }, 5000);
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
  }, [timer, setTimer]);

  useEffect(() => {
    setTimer(60);
  }, [question]);

  useEffect(() => {
    setOneQuestionFourAnswersSelected(oneQuestionFourAnswers[question]);
    if (oneQuestionFourAnswersSelected)
      console.log(oneQuestionFourAnswersSelected);
  }, [question]);

  const startNewGame = () => {
    setTimer(60);
    setQuestion(0);
    setFirstLiveLine(true);
    setSecondtLiveLine(true);
    setOneQuestionFourAnswersSelected(oneQuestionFourAnswers[0]);

    setThirdLiveLIne(true);
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
  const closeTheLifeLines = () => {
    setAskTheAudience(false);
    setAskTheFriend(false);
  };
  const secondLifeLine = () => {
    setSecondtLiveLine(false);
    setTimeout(() => {
      setLoadingResultFromAskTheAudince(false);
      setTimeout(() => {
        closeTheLifeLines();
      }, 5000);
    }, 6700);

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
        }
      }

      const lastCopyArray = [];
      if (fiftyFiftyArray.length > 1) {
        let sumUp = fiftyFiftyArray[0].value + fiftyFiftyArray[1].value;

        const checkingIfEven = sumUp % 2 === 0;
        const checkingIfOdd = sumUp % 2 === 1;
        if (checkingIfOdd) {
          sumUp = sumUp / 2;
        }
        if (checkingIfEven) {
          sumUp = sumUp / 2;
        }

        for (let i = 0; i <= 3; i++) {
          if (array[i].index) {
            console.log(i);
            lastCopyArray.push({
              index: array[i].index,
              value: array[i].value + sumUp,
            });
          } else {
            lastCopyArray.push({
              index: 0,
              value: 0,
            });
          }
        }
        setFirstItem({
          value: lastCopyArray[0].value,
          index: oneQuestionFourAnswers[question].answers[3].body,
        });
        setAskTheAudienceProbabilityB({
          value: lastCopyArray[1].value,
          index: oneQuestionFourAnswers[question].answers[0].body,
        });
        setAskTheAudienceProbabilityC({
          value: lastCopyArray[2].value,
          index: oneQuestionFourAnswers[question].answers[1].body,
        });
        setAskTheAudienceProbabilityD({
          value: lastCopyArray[3].value,
          index: oneQuestionFourAnswers[question].answers[2].body,
        });
        if (!lastCopyArray[0].value) {
          setHeightValuesFirst(0);
        }
        if (!lastCopyArray[1].value) {
          setHeightValuesSecond(0);
        }
        if (!lastCopyArray[2].value) {
          setHeightValuesThird(0);
        }
        if (!lastCopyArray[3].value) {
          setHeightValuesFourth(0);
        }
        console.log("askkk");
        console.log(lastCopyArray);
      }
    };
    shufflingSecondLifeLINE();
  }, [setAskTheAudience, askTheAudience]);
  const thirdLifeLine = () => {
    setAskTheFriend(true);
    setThirdLiveLIne(false);
    setTimeout(() => {
      closeTheLifeLines();
    }, 5000);
    let array = [];
    let wrongArray = [];
    for (let i = 0; i <= 3; i++) {
      if (oneQuestionFourAnswersSelected.answers[i].body) {
        if (oneQuestionFourAnswersSelected.answers[i].correct === true) {
          array.push(oneQuestionFourAnswersSelected.answers[i]);
          // setAskTheFriendRender(oneQuestionFourAnswersSelected.answers[i].body);
        } else {
          wrongArray.push(oneQuestionFourAnswersSelected.answers[i]);
        }
      }
    }
    const difficultyOfTheQuestion =
      oneQuestionFourAnswers[question].degreeOfComplexity * 0.1;

    let randomNumber = Math.floor(Math.random() * 10);
    let sumOfRandomNumberAndDiff = randomNumber + difficultyOfTheQuestion;
    console.log("sumOfRandomNumberAndDiff");
    console.log(sumOfRandomNumberAndDiff);
    if (sumOfRandomNumberAndDiff >= 6) {
      setAskTheFriendRender(array[0].body);
      console.log(array);
    } else {
      let shuffleArray = wrongArray.sort(() => Math.random() - 0.5);
      setAskTheFriendRender(shuffleArray[0].body);
      console.log(shuffleArray);
    }
  };

  return (
    <>
      {timer === 0 ? (
        <div className="lostGame">
          <div className="lostGameItem">You lost game</div>
          <div className="lostGameItem">
            your have won: $
            {question === 0 ? 0 : notReveredPrices[question - 1].amount}
          </div>
          <div className="lostGameItem" onClick={() => startNewGame()}>
            Click here to start a new game{" "}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {/* // Main */}
      <div className="main">
        {/* First Container */}

        <div className="mainContainer">
          {/* First section */}
          <div className="firstSection">
            <div className="askTheAudienceContainer">
              {" "}
              <div
                className={
                  askTheAudience ? "askTheAudience" : "askTheAudienceHidden"
                }
              >
                <div className="itemContainer">
                  <div className="firstContainerRow">
                    <div
                      style={{
                        display: loadingResultFromAskTheAudince
                          ? "none"
                          : "flex",
                      }}
                      className="answerItem"
                    >
                      {firstItem.value}%
                    </div>
                    <div
                      style={{
                        display: loadingResultFromAskTheAudince
                          ? "none"
                          : "flex",
                      }}
                      className="answerItem"
                    >
                      {askTheAudienceProbabilityB.value}%
                    </div>
                    <div
                      style={{
                        display: loadingResultFromAskTheAudince
                          ? "none"
                          : "flex",
                      }}
                      className="answerItem"
                    >
                      {askTheAudienceProbabilityC.value}%
                    </div>
                    <div
                      style={{
                        display: loadingResultFromAskTheAudince
                          ? "none"
                          : "flex",
                      }}
                      className="answerItem"
                    >
                      {askTheAudienceProbabilityD.value}%
                    </div>
                  </div>
                  <div className="secondContainerRow">
                    <div
                      style={{
                        height: loadingResultFromAskTheAudince
                          ? heightValuesFirst
                          : firstItem.value * 1.4,
                      }}
                      className="itemOne"
                    ></div>
                    <div
                      style={{
                        height: loadingResultFromAskTheAudince
                          ? heightValuesSecond
                          : askTheAudienceProbabilityB.value * 1.4,
                      }}
                      className="itemTwo"
                    >
                      {" "}
                    </div>
                    <div
                      style={{
                        height: loadingResultFromAskTheAudince
                          ? heightValuesThird
                          : askTheAudienceProbabilityC.value * 1.4,
                      }}
                      className="itemThree"
                    ></div>
                    <div
                      style={{
                        height: loadingResultFromAskTheAudince
                          ? heightValuesFourth
                          : askTheAudienceProbabilityD.value * 1.4,
                      }}
                      className="itemFour"
                    ></div>
                  </div>
                  <div className="thirdContainerRow">
                    <div className="answerItem">A</div>
                    <div className="answerItem">B</div>
                    <div className="answerItem">C</div>
                    <div className="answerItem">D</div>
                  </div>
                </div>
              </div>
            </div>
            {/* second life line */}
          </div>
          <div className="secondSection">
            <div className="askTheFriendContainer">
              <div
                className={askTheFriend ? "askTheFriend" : "askTheFriendHidden"}
              >
                <div className="itemContainerForFriend">
                  <div className="friendImage"></div>Bob: I think the answer is
                  : {askTheFreindRender}
                </div>
              </div>
            </div>
            <div className="timer">{timer}</div>
            <div className="singleQuestionContainer">
              {oneQuestionFourAnswersSelected.question}
            </div>
            <div className="answerContainer">
              <div
                id="first"
                className={backGroundColorOfAQuestionToOrangeOne}
                onClick={(e) =>
                  checkingAnswer(
                    oneQuestionFourAnswersSelected.answers[0].correct,
                    e.target.id
                  )
                }
              >
                {" "}
                {oneQuestionFourAnswersSelected.answers[0].body
                  ? "A: " + oneQuestionFourAnswersSelected.answers[0].body
                  : "" + oneQuestionFourAnswersSelected.answers[0].body}
              </div>
              <div
                id="second"
                className={backGroundColorOfAQuestionToOrangeTwo}
                onClick={(e) =>
                  checkingAnswer(
                    oneQuestionFourAnswersSelected.answers[1].correct,
                    e.target.id
                  )
                }
              >
                {" "}
                {oneQuestionFourAnswersSelected.answers[1].body
                  ? "B: " + oneQuestionFourAnswersSelected.answers[1].body
                  : "" + oneQuestionFourAnswersSelected.answers[1].body}
              </div>
              <div
                id="third"
                className={backGroundColorOfAQuestionToOrangeThree}
                onClick={(e) =>
                  checkingAnswer(
                    oneQuestionFourAnswersSelected.answers[2].correct,
                    e.target.id
                  )
                }
              >
                {" "}
                {oneQuestionFourAnswersSelected.answers[2].body
                  ? "C: " + oneQuestionFourAnswersSelected.answers[2].body
                  : "" + oneQuestionFourAnswersSelected.answers[2].body}
              </div>
              <div
                id="fourth"
                className={backGroundColorOfAQuestionToOrangeFour}
                onClick={(e) =>
                  checkingAnswer(
                    oneQuestionFourAnswersSelected.answers[3].correct,
                    e.target.id
                  )
                }
              >
                {" "}
                {oneQuestionFourAnswersSelected.answers[3].body
                  ? "D: " + oneQuestionFourAnswersSelected.answers[3].body
                  : "" + oneQuestionFourAnswersSelected.answers[3].body}
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
              style={{
                pointerEvents:
                  askTheAudience || askTheFriend || !secondLiveLine
                    ? "none"
                    : "all",
              }}
              className={
                secondLiveLine ? "secondlifeline" : "secondlifelineIncorrect"
              }
            ></div>
            <div
              style={{
                pointerEvents:
                  askTheAudience || askTheFriend || !thirdLiveLine
                    ? "none"
                    : "all",
              }}
              onClick={() => thirdLifeLine()}
              className={
                thirdLiveLine ? "thirdlifeline" : "thirdlifelineIncorrect"
              }
            ></div>
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
                      item.saveSum === true || question === item.id - 1
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
                      item.saveSum === true || question === item.id - 1
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
