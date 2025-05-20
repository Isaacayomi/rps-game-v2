import { useState } from "react";

import Header from "./Header";
import Moves from "./Moves";
import ResultScreen from "./ResultScreen";
import RulesButton from "./RulesButton";
import AdvancedGame from "./AdvancedGame";

function StartScreen({
  dispatch,
  playerScore,
  cpuScore,
  playerMove,
  computerMove,
  result,
  onSetResult,
  toggleMode,
  onSetMode,
}) {
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="bg-home-bg min-h-screen pt-2 pb-3 ">
      <Header playerScore={playerScore} cpuScore={cpuScore} />
      {playerMove && !showResult ? (
        <ResultScreen
          playerMove={playerMove}
          computerMove={computerMove}
          showResult={showResult}
          onSetShowResult={setShowResult}
          dispatch={dispatch}
          result={result}
          onSetResult={onSetResult}
          toggleMode={toggleMode}
          onSetMode={onSetMode}
        />
      ) : (
        <Moves
          dispatch={dispatch}
          onSetShowResult={setShowResult}
          toggleMode={toggleMode}
        />
      )}
      <div className="flex justify-evenly items-center gap-4 mt-4 lg:mt-10">
        <AdvancedGame
          dispatch={dispatch}
          playerScore={playerScore}
          toggleMode={toggleMode}
          onSetMode={onSetMode}
        />
        <RulesButton dispatch={dispatch} />
      </div>
    </div>
  );
}
export default StartScreen;
