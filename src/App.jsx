import { useReducer } from "react";
import RulesModal from "./components/RulesModal";
import StartScreen from "./components/StartScreen";

const initialState = {
  showRules: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "showModal":
      return { ...state, showRules: true };

    case "hideModal":
      return { ...state, showRules: false };
  }
}

function App() {
  const [{ showRules }, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {!showRules && <StartScreen dispatch={dispatch} />}
      {showRules && <RulesModal dispatch={dispatch} />}
    </div>
  );
}

export default App;
