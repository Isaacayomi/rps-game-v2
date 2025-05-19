import ClassicMove from "./ClassicMove";
import AdvancedMove from "./AdvancedMove";

function Moves({ dispatch, onSetShowResult, toggleMode }) {
  return (
    <>
      {toggleMode === "CLASSIC" ? (
        <AdvancedMove dispatch={dispatch} onSetShowResult={onSetShowResult} />
      ) : (
        <ClassicMove dispatch={dispatch} onSetShowResult={onSetShowResult} />
      )}
    </>
  );
}

export default Moves;
