import Button from "./Button";

function RulesButton({ dispatch }) {
  return (
    <button onClick={() => dispatch({ type: "showModal", payload: true })}>
      <Button>RULES</Button>
    </button>
  );
}
export default RulesButton;
