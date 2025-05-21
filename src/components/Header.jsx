import logo from "../assets/logo.svg";
import ScoreButton from "./ScoreButton";
function Header({ playerScore, cpuScore }) {
  return (
    // flex justify-center items-center gap-[7.06rem]
    <div className=" px-5 border border-headerOutline rounded-[0.3125rem] max-w-[19.4375rem] w-full mx-auto lg:max-w-[43.75rem] lg:w-full lg:h-[9.375rem] lg:gap-[21.08rem] lg:border-[3px] lg:rounded-[0.9375rem] ">
      <div className="flex justify-between items-center ">
        <h1>
          <img
            className="max-w-[5.1875rem] w-full lg:max-w-[9.7175rem] lg:w-full "
            src={logo}
            alt="Game Logo"
          />
        </h1>

        <div className="flex items-center justify-normal gap-2">
          <ScoreButton>
            <span className="text-scoreText text-[0.625rem] leading-normal tracking-[0.09769rem] font-semibold pt-[0.63rem] lg:text-[1.5rem] lg:text-center  ">
              PLAYER
            </span>
            <span className="leading-10 font-bold text-[2.5rem] text-darkText pb-[0.63rem] lg:text-[3.2rem]">
              {playerScore}
            </span>
          </ScoreButton>

          <ScoreButton>
            <span className="text-scoreText text-[0.625rem] leading-normal tracking-[0.09769rem] font-semibold pt-[0.63rem] lg:text-[1.5rem] lg:text-center  ">
              CPU
            </span>
            <span className="leading-10 font-bold text-[2.5rem] text-darkText pb-[0.63rem] lg:text-[3.2rem]">
              {cpuScore}
            </span>
          </ScoreButton>
        </div>
      </div>
    </div>
  );
}
export default Header;
