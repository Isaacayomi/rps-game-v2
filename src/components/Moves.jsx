// import paperIcon from "./assets/paper-icon.svg";
// import scissorsIcon from "./assets/scissors-icon.svg";

import scissorsIcon from "../assets/icon-scissors.svg";
import paperIcon from "../assets/icon-paper.svg";
import rockIcon from "../assets/icon-rock.svg";
import Button from "../Button";
import RulesButton from "./RulesButton";

function Moves({ dispatch }) {
  return (
    <div className=" flex flex-col items-center h-full bg-triangle-gradient bg-no-repeat bg-center bg-[length:14rem_10rem] mt-[-2rem] ">
      <div className="flex gap-[3.23rem] mt-[6.56rem]">
        <Button>
          <img src={paperIcon} alt="Paper move" />
        </Button>

        <Button>
          <img src={scissorsIcon} alt="Scissors move" />
        </Button>
      </div>

      <Button>
        <img src={rockIcon} alt="Rock move" />
      </Button>

      <RulesButton dispatch={dispatch} />
    </div>
  );
}

export default Moves;
