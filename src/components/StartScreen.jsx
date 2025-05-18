import { useState } from "react";

import Header from "./Header";
import Moves from "./Moves";
import ResultScreen from "./ResultScreen";
import RulesButton from "./RulesButton";

function StartScreen({
  dispatch,
  score,
  playerMove,
  computerMove,
  result,
  onSetResult,
}) {
  const [showResult, setShowResult] = useState(true);

  return (
    <div className="bg-home-bg pt-2 transition  duration-300 ease-in-out">
      <Header score={score} />
      {playerMove && showResult ? (
        <ResultScreen
          playerMove={playerMove}
          computerMove={computerMove}
          showResult={showResult}
          onSetShowResult={setShowResult}
          dispatch={dispatch}
          result={result}
          onSetResult={onSetResult}
        />
      ) : (
        <Moves dispatch={dispatch} />
      )}
      <RulesButton dispatch={dispatch} />
    </div>
  );
}
export default StartScreen;
