import scissorsIcon from "../assets/icon-scissors.svg";
import paperIcon from "../assets/icon-paper.svg";
import rockIcon from "../assets/icon-rock.svg";
import Button from "./Button";

function Moves({ dispatch }) {
  return (
    <div className=" flex flex-col items-center h-full bg-triangle-gradient bg-no-repeat bg-center bg-[length:14rem_10rem] mt-[-2rem] ">
      <div className="flex gap-[3.23rem] mt-[6.56rem]">
        <Button>
          <img
            src={paperIcon}
            alt="Paper move"
            onClick={() => dispatch({ type: "paperMove", payload: "paper" })}
          />
        </Button>

        <Button>
          <img
            src={scissorsIcon}
            alt="Scissors move"
            onClick={() =>
              dispatch({ type: "scissorsMove", payload: "scissors" })
            }
          />
        </Button>
      </div>

      <Button>
        <img
          src={rockIcon}
          alt="Rock move"
          onClick={() => dispatch({ type: "rockMove", payload: "rock" })}
        />
      </Button>
    </div>
  );
}

export default Moves;
