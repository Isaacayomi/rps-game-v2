import icon_scissors from "../assets/icon-scissors.svg";
import icon_rock from "../assets/icon-rock.svg";
// import icon_paper from "../assets/icon-paper.svg";

function ResultScreen() {
  return (
    <>
      <div className="flex justify-center items-start mt-[6.19rem] gap-[3.12rem]">
        <div className=" flex flex-col-reverse">
          <p className="text-white font-barlow text-[0.9375rem] font-bold tracking-[0.1875rem] text-center">
            YOU PICKED
          </p>
          <img
            src={icon_scissors}
            className="w-[8.08538rem] h-[7.92356rem] mx-auto"
            alt="player move"
          />
        </div>
        <div className="flex flex-col-reverse">
          <p className="text-white font-barlow text-[0.9375rem] font-bold tracking-[0.1875rem] text-center">
            THE HOUSE PICKED
          </p>
          <img
            src={icon_rock}
            className="w-[8.08538rem] h-[7.92356rem] mx-auto"
            alt="computer move"
          />
        </div>
      </div>

      <div>
        <p className="font-barlow text-white text-center text-[3.5rem] font-bold pt-[5.94rem]">
          YOU WIN
        </p>
        <button className="font-barlow bg-white text-darkText block mx-auto rounded-lg font-semibold text-base py-[0.94rem] px-[3.75rem] leading-[0.15625rem] ">
          PLAY AGAIN
        </button>
      </div>
    </>
  );
}

export default ResultScreen;
