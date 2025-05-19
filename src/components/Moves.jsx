import scissorsIcon from "../assets/icon-scissors.svg";
import paperIcon from "../assets/icon-paper.svg";
import rockIcon from "../assets/icon-rock.svg";
import Button from "./Button";

function Moves({ dispatch, onSetShowResult }) {
  return (
    <div className=" flex flex-col items-center h-full bg-triangle-gradient bg-no-repeat bg-center bg-[length:14rem_10rem] mt-[-2rem] lg:bg-[length:16rem_13rem] ">
      <div className="flex gap-[3.23rem] mt-[6.56rem]">
        <Button
          onClick={() => {
            dispatch({ type: "paperMove", payload: "paper" });
            onSetShowResult((showResult) => !showResult);
          }}
        >
          <img
            src={paperIcon}
            alt="Paper move"
            className=" lg:w-[15.75rem] lg:max-w-full lg:hover:shadow-hoverGlow lg:rounded-full"
          />
        </Button>

        <Button
          onClick={() => {
            dispatch({ type: "scissorsMove", payload: "scissors" });
            onSetShowResult((showResult) => !showResult);
          }}
        >
          <img
            src={scissorsIcon}
            alt="Scissors move"
            className=" lg:w-[15.75rem] lg:max-w-full  lg:hover:shadow-hoverGlow lg:rounded-full"
          />
        </Button>
      </div>

      <Button
        onClick={() => {
          dispatch({ type: "rockMove", payload: "rock" });
          onSetShowResult((showResult) => !showResult);
        }}
      >
        <img
          src={rockIcon}
          alt="Rock move"
          className=" lg:w-[15.75rem] lg:max-w-full lg:hover:shadow-hoverGlow lg:rounded-full"
        />
      </Button>
    </div>
  );
}

export default Moves;
