import { useReducer, useState } from "react";
import RulesModal from "./components/RulesModal";
import StartScreen from "./components/StartScreen";
import ResultScreen from "./components/ResultScreen";
import AdvancedMove from "./components/AdvancedMove";

const initialState = {
  playerMove: null,
  computerMove: null,
  showRules: false,
  playerScore: 0,
  cpuScore: 0,
};

function generateComputerMove(mode) {
  const randomMove = Math.random();

  if (mode === "CLASSIC") {
    if (randomMove < 1 / 3) {
      return "rock";
    } else if (randomMove < 2 / 3) {
      return "paper";
    } else return "scissors";
  } else {
    if (randomMove < 1 / 5) {
      return "rock";
    } else if (randomMove < 2 / 5) {
      return "paper";
    } else if (randomMove < 3 / 5) {
      return "scissors";
    } else if (randomMove < 4 / 5) {
      return "lizard";
    } else return "spock";
  }
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
        showRules: false,
        playerMove: action.payload,
        computerMove: generateComputerMove(action.mode),
      };

    case "paperMove":
      return {
        ...state,
        showRules: false,
        playerMove: action.payload,
        computerMove: generateComputerMove(action.mode),
      };

    case "scissorsMove":
      return {
        ...state,
        showRules: false,
        playerMove: action.payload,
        computerMove: generateComputerMove(action.mode),
      };

    case "lizardMove":
      return {
        ...state,
        showRules: false,
        playerMove: action.payload,
        computerMove: generateComputerMove(action.mode),
      };

    case "spockMove":
      return {
        ...state,
        showRules: false,
        playerMove: action.payload,
        computerMove: generateComputerMove(action.mode),
      };

    case "reset":
      return {
        ...state,
        playerMove: null,
        computerMove: null,
        playerScore:
          action.payload === "YOU WIN"
            ? state.playerScore + 1
            : state.playerScore,
        cpuScore:
          action.payload === "YOU LOSE" ? state.cpuScore + 1 : state.cpuScore,
      };

    case "advancedGame":
      return {
        ...state,
        playerMove: null,
        computerMove: null,
        playerScore: 0,
        cpuScore: 0,
      };

    default:
      throw new Error("unknown action type");
  }
}

function App() {
  const [result, setResult] = useState("");
  const [toggleMode, setToggleMode] = useState("ADVANCED");

  const [
    { showRules, playerScore, cpuScore, playerMove, computerMove },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <div>
      <StartScreen
        playerScore={playerScore}
        cpuScore={cpuScore}
        dispatch={dispatch}
        playerMove={playerMove}
        computerMove={computerMove}
        result={result}
        onSetResult={setResult}
        toggleMode={toggleMode}
        onSetMode={setToggleMode}
      />

      {showRules && <RulesModal dispatch={dispatch} toggleMode={toggleMode} />}
    </div>
  );
}

export default App;
