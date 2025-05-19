import logo from "../assets/logo.svg";
import ScoreButton from "./ScoreButton";
function Header({ playerScore }) {
  return (
    <div className="flex justify-center items-center gap-[7.06rem]  border border-headerOutline rounded-[0.3125rem] max-w-[19.4375rem] w-full mx-auto lg:max-w-[43.75rem] lg:w-full lg:h-[9.375rem] lg:gap-[21.08rem] lg:border-[3px] lg:rounded-[0.9375rem] ">
      <h1>
        <img
          className="max-w-[5.1875rem] w-full lg:max-w-[9.7175rem] lg:w-full "
          src={logo}
          alt="Game Logo"
        />
      </h1>

      <div>
        <ScoreButton>
          <span className="text-scoreText text-[0.625rem] leading-normal tracking-[0.09769rem] font-semibold pt-[0.63rem] lg:text-[1.5rem] lg:text-center  ">
            SCORE
          </span>
          <span className="leading-10 font-bold text-[2.5rem] text-darkText pb-[0.63rem] lg:text-[3.2rem]">
            {playerScore}
          </span>
        </ScoreButton>
      </div>
    </div>
  );
}
export default Header;
