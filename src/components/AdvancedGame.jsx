import Button from "./Button";
function AdvancedGame({ dispatch, toggleMode, onSetMode }) {
  return (
    <button
      onClick={() => {
        dispatch({ type: "advancedGame" });
        toggleMode === "ADVANCED"
          ? onSetMode("CLASSIC")
          : onSetMode("ADVANCED");
      }}
    >
      <Button>{toggleMode}</Button>
    </button>
  );
}

export default AdvancedGame;
