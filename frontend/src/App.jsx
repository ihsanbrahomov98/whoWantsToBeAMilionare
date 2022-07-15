import "./app.css";
import questionNumber from "./components/questionNumberAndPrize";

const App = () => {
  return (
    // Main
    <div className="main">
      {/* First Container */}
      <div className="mainContainer">1</div>
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
          <ul className="questionsContainer">
            {questionNumber.map((item) => (
              <li>
                <span
                  className={
                    item.saveSum === true
                      ? "questionItemNumberWhite"
                      : "questionItemNumber"
                  }
                >
                  {item.id}
                </span>
                <span className="diamond">.</span>
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
