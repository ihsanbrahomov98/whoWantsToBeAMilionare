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
                <span>{item.id}</span>
                <span className="diamond">.</span>
                <span className="questionItemAmount">{item.amount}</span>
              </li>
            ))}
            <li className="questionItem">
              <span className="questionItemNumber">15</span>
              <span className="diamond">.</span>
              <span className="questionItemAmount">400$</span>
            </li>
            <li>
              <span>14</span>
              <span>.</span>
              <span>300$</span>
            </li>
            <li>
              <span>13</span>
              <span>.</span>
              <span>200$</span>
            </li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
