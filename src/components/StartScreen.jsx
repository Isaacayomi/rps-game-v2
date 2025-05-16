import Header from "./Header";
import Moves from "./Moves";

function StartScreen({ dispatch }) {
  return (
    <div className="bg-home-bg pt-2">
      <Header />
      <Moves dispatch={dispatch} />
    </div>
  );
}
export default StartScreen;
