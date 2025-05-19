import { useEffect } from "react";

import icon_scissors from "../assets/icon-scissors.svg";
import icon_rock from "../assets/icon-rock.svg";
import icon_paper from "../assets/icon-paper.svg";

const icons = {
  rock: icon_rock,
  paper: icon_paper,
  scissors: icon_scissors,
};

function ResultScreen({
  playerMove,
  computerMove,
  onSetShowResult,
  onSetResult,
  result,
  dispatch,
}) {
  function resultLogic() {
    if (playerMove === "rock") {
      if (computerMove === "rock") {
        onSetResult("ITS A TIE");
      } else if (computerMove === "paper") {
        onSetResult("YOU LOSE");
      } else {
        onSetResult("YOU WIN");
      }
    } else if (playerMove === "paper") {
      if (computerMove === "rock") {
        onSetResult("YOU WIN");
      } else if (computerMove === "paper") {
        onSetResult("ITS A TIE");
      } else {
        onSetResult("YOU LOSE");
      }
    } else if (playerMove === "scissors") {
      if (computerMove === "rock") {
        onSetResult("YOU LOSE");
      } else if (computerMove === "paper") {
        onSetResult("YOU WIN");
      } else {
        onSetResult("ITS A TIE");
      }
    }
  }

  useEffect(
    function () {
      if (playerMove && computerMove) {
        resultLogic();
      }
    },
    [playerMove, computerMove]
  );

  return (
    <>
      <div className="relative flex justify-center items-start mt-[6.19rem] gap-[3.12rem] lg:gap-[22.02rem]">
        <div className="flex flex-col-reverse lg:flex-col ">
          <p className="text-white font-barlow text-[0.9375rem] font-bold tracking-[0.1875rem] text-center lg:mb-[3.94rem] lg:font-bold lg:text-[1.5rem] ">
            YOU PICKED
          </p>
          <img
            src={icons[playerMove]}
            className="w-[8.08538rem] h-[7.92356rem] mx-auto rounded-full shadow-glowRadial lg:w-[18.28819rem] lg:h-[17.91869rem]"
            alt="player move"
          />
        </div>

        <div className="hidden lg:flex flex-col items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center ml-[3rem]">
          <p className="font-barlow text-white text-[3.5rem] font-bold">
            {result}
          </p>
          <button
            onClick={() => {
              onSetShowResult((prev) => !prev);
              onSetResult("");
              dispatch({ type: "reset", payload: result === "YOU WIN" });
            }}
            className={`cursor-pointer font-barlow bg-white text-darkText rounded-lg font-semibold text-base py-[0.94rem] px-[3.75rem] leading-[0.15625rem] mt-4 lg:h-[3rem] lg:tracking-[0.15625rem] lg:font-semibold lg:leading-[0.15625rem] text-[1rem] ${
              result === "YOU LOSE" && "text-red-500"
            }`}
          >
            PLAY AGAIN
          </button>
        </div>

        <div className="flex flex-col-reverse lg:flex-col">
          <p className="text-white font-barlow text-[0.9375rem] font-bold tracking-[0.1875rem] text-center  lg:mb-[3.94rem] lg:font-bold lg:text-[1.5rem]">
            THE HOUSE PICKED
          </p>
          <img
            src={icons[computerMove]}
            className="w-[8.08538rem] h-[7.92356rem] mx-auto lg:w-[18.28819rem] lg:h-[17.91869rem]"
            alt="computer move"
          />
        </div>
      </div>

      <div className="lg:hidden">
        <p className="font-barlow text-white text-center text-[3.5rem] font-bold pt-[5.94rem]">
          {result}
        </p>
        <button
          onClick={() => {
            onSetShowResult((prev) => !prev);
            onSetResult("");
            dispatch({ type: "reset", payload: result === "YOU WIN" });
          }}
          className="font-barlow bg-white text-darkText block mx-auto rounded-lg font-semibold text-base py-[0.94rem] px-[3.75rem] leading-[0.15625rem] mt-4"
        >
          PLAY AGAIN
        </button>
      </div>
    </>
  );
}

export default ResultScreen;
