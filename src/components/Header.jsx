import logo from "../assets/logo.svg";
function Header() {
  return (
    <div className="flex justify-center items-center gap-[7.06rem]  border border-headerOutline rounded-[0.3125rem] max-w-[19.4375rem] w-full mx-auto ">
      <h1>
        <img className="max-w-[5.1875rem] w-full" src={logo} alt="Game Logo" />
      </h1>

      <div className="flex flex-col justify-center text-center bg-white font-barlow px-6 rounded-[0.25rem] shadow-customShadow my-[0.75rem]">
        <span className="text-scoreText text-[0.625rem] leading-normal tracking-[0.09769rem] font-semibold pt-[0.63rem]  ">
          SCORE
        </span>
        <span className="leading-10 font-bold text-[2.5rem] text-darkText pb-[0.63rem] ">
          12
        </span>
      </div>
    </div>
  );
}
export default Header;
