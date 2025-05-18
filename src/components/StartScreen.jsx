import { useState } from "react";

import Header from "./Header";
import Moves from "./Moves";
import ResultScreen from "./ResultScreen";
import RulesButton from "./RulesButton";

function StartScreen({
  dispatch,
  playerScore,
  playerMove,
  computerMove,
  result,
  onSetResult,
}) {
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="bg-home-bg min-h-screen pt-2 pb-3 transition  duration-300 ease-in-out">
      <Header playerScore={playerScore} />
      {playerMove && !showResult ? (
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
        <Moves dispatch={dispatch} onSetShowResult={setShowResult} />
      )}
      <RulesButton dispatch={dispatch} />
    </div>
  );
}
export default StartScreen;
