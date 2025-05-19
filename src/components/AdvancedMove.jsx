import MovesButton from "./MovesButton";

import rockIcon from "../assets/icon-rock.svg";
import paperIcon from "../assets/icon-paper.svg";
import scissorsIcon from "../assets/icon-scissors.svg";
import lizardIcon from "../assets/icon-lizard.svg";
import spockIcon from "../assets/icon-spock.svg";
function AdvancedMove({ dispatch, onSetShowResult }) {
  return (
    <div className="  h-full bg-pentagon-gradient bg-no-repeat bg-center bg-[length:20rem_20rem] mt-[-2rem] lg:bg-[length:33rem_32rem]   ">
      <div className="mt-[6rem] flex flex-col items-center">
        <MovesButton
          onClick={() => {
            dispatch({ type: "scissorsMove", payload: "scissors" });
            onSetShowResult((showResult) => !showResult);
          }}
        >
          <img
            src={scissorsIcon}
            alt="Scissors move"
            className=" lg:w-[15.75rem] lg:max-w-full lg:hover:shadow-hoverGlow lg:rounded-full"
          />
        </MovesButton>
        <div className="flex items-center justify-center gap-[7.44rem] mb-[1.63rem] lg:gap-[11.38rem]">
          <MovesButton
            onClick={() => {
              dispatch({ type: "spockMove", payload: "spock" });
              onSetShowResult((showResult) => !showResult);
            }}
          >
            <img
              src={spockIcon}
              alt="Spock move"
              className="  w-[9rem] max-w-full lg:w-[15.75rem] lg:max-w-full  lg:hover:shadow-hoverGlow lg:rounded-full"
            />
          </MovesButton>

          <MovesButton
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
          </MovesButton>
        </div>

        <div className="flex items-center justify-center gap-[2.06rem] lg:gap-[3.25rem]">
          <MovesButton
            onClick={() => {
              dispatch({ type: "lizardMove", payload: "lizard" });
              onSetShowResult((showResult) => !showResult);
            }}
          >
            <img
              src={lizardIcon}
              alt="Lizard move"
              className=" w-[9rem] max-w-full lg:w-[15.75rem] lg:max-w-full lg:hover:shadow-hoverGlow lg:rounded-full"
            />
          </MovesButton>

          <MovesButton
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
          </MovesButton>
        </div>
      </div>
    </div>
  );
}

export default AdvancedMove;
