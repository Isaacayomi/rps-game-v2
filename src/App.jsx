import { useReducer } from "react";
import RulesModal from "./components/RulesModal";
import StartScreen from "./components/StartScreen";

const initialState = {
  playerMove: "",
  computerMove: "",
  showRules: false,
  score: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "showModal":
      return { ...state, showRules: true };

    case "hideModal":
      return { ...state, showRules: false };

    case "computerMove": {
      const randomMove = Math.random();
      if (randomMove > 0 && randomMove < 1 / 3) {
        return { ...state, computerMove: "rock" };
      } else if (randomMove > 1 / 2 && randomMove < 2 / 3) {
        return { ...state, computerMove: "paper" };
      } else {
        return { ...state, computerMove: "scissors" };
      }
    }

    case "rockMove":
      return { ...state, playerMove: action.payload };
    case "paperMove":
      return { ...state, playerMove: action.payload };
    case "scissorsMove":
      return { ...state, playerMove: action.payload };

    default:
      throw new Error("unknown action type");
  }
}

function App() {
  const [{ showRules, score }, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {!showRules && <StartScreen score={score} dispatch={dispatch} />}
      {showRules && <RulesModal dispatch={dispatch} />}
    </div>
  );
}

export default App;
