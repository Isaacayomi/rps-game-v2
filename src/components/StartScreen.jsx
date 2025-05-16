import Header from "./Header";
import Moves from "./Moves";
import ResultScreen from "./ResultScreen";
import RulesButton from "./RulesButton";

function StartScreen({ dispatch, score }) {
  return (
    <div className="bg-home-bg pt-2 transition  duration-300 ease-in-out">
      <Header score={score} />
      <Moves dispatch={dispatch} />
      {/* <ResultScreen /> */}
      <RulesButton dispatch={dispatch} />
    </div>
  );
}
export default StartScreen;
