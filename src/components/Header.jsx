import logo from "../assets/logo.svg";
import ScoreButton from "./ScoreButton";
function Header({ playerScore }) {
  return (
    <div className="flex justify-center items-center gap-[7.06rem]  border border-headerOutline rounded-[0.3125rem] max-w-[19.4375rem] w-full mx-auto ">
      <h1>
        <img className="max-w-[5.1875rem] w-full" src={logo} alt="Game Logo" />
      </h1>

      <div>
        <ScoreButton>
          <span className="text-scoreText text-[0.625rem] leading-normal tracking-[0.09769rem] font-semibold pt-[0.63rem]  ">
            PLAYER
          </span>
          <span className="leading-10 font-bold text-[2.5rem] text-darkText pb-[0.63rem] ">
            {playerScore}
          </span>
        </ScoreButton>
      </div>
    </div>
  );
}
export default Header;
