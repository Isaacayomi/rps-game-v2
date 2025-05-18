import { useReducer, useState } from "react";
import RulesModal from "./components/RulesModal";
import StartScreen from "./components/StartScreen";
import ResultScreen from "./components/ResultScreen";

const initialState = {
  playerMove: null,
  computerMove: null,
  showRules: false,
  playerScore: 0,
};

function generateComputerMove() {
  const randomMove = Math.random();
  if (randomMove < 1 / 3) {
    return "rock";
  } else if (randomMove < 2 / 3) {
    return "paper";
  } else return "scissors";
}

function reducer(state, action) {
  switch (action.type) {
    case "showModal":
      return { ...state, showRules: true };

    case "hideModal":
      return { ...state, showRules: false };

    case "rockMove":
      return {
        ...state,
        playerMove: action.payload,
        computerMove: generateComputerMove(),
      };

    case "paperMove":
      return {
        ...state,
        playerMove: action.payload,
        computerMove: generateComputerMove(),
      };

    case "scissorsMove":
      return {
        ...state,
        playerMove: action.payload,
        computerMove: generateComputerMove(),
      };

    case "reset":
      return {
        ...state,
        playerMove: null,
        computerMove: null,
        playerScore: action.payload ? state.playerScore + 1 : state.playerScore,
      };

    default:
      throw new Error("unknown action type");
  }
}

function App() {
  const [result, setResult] = useState("");

  const [{ showRules, playerScore, playerMove, computerMove }, dispatch] =
    useReducer(reducer, initialState);
  return (
    <div>
      {!showRules && (
        <StartScreen
          playerScore={playerScore}
          dispatch={dispatch}
          playerMove={playerMove}
          computerMove={computerMove}
          result={result}
          onSetResult={setResult}
        />
      )}
      {showRules && <RulesModal dispatch={dispatch} />}
    </div>
  );
}

export default App;
