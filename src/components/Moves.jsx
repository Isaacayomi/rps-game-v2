import ClassicMove from "./ClassicMove";
import AdvancedMove from "./AdvancedMove";

function Moves({ dispatch, onSetShowResult, toggleMode }) {
  return (
    <>
      {toggleMode === "ADVANCED" ? (
        <AdvancedMove
          dispatch={dispatch}
          onSetShowResult={onSetShowResult}
          toggleMode={toggleMode}
        />
      ) : (
        <ClassicMove
          dispatch={dispatch}
          onSetShowResult={onSetShowResult}
          toggleMode={toggleMode}
        />
      )}
    </>
  );
}

export default Moves;
