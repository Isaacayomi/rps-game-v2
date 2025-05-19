import rules_image from "../assets/image-rules.svg";
import bonus_rules from "../assets/image-rules-bonus.svg";
import close_icon from "../assets/icon-close.svg";

function RulesModal({ dispatch, toggleMode }) {
  return (
    <div className="h-screen w-full grid place-items-center absolute bg-white top-0 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-white lg:h-[25rem] lg:w-[25rem]">
      <div className=" lg:w-[25rem] lg:h-[25rem] lg:p-[5rem] rounded-lg flex flex-col items-center justify-center space-y-6">
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-between lg:items-center">
          <p className="text-darkText font-barlow text-[2rem] font-bold text-center lg:text-left">
            RULES
          </p>
          <button
            className="hidden lg:block"
            onClick={() => dispatch({ type: "hideModal" })}
          >
            <img src={close_icon} alt="close" />
          </button>
        </div>

        <img
          src={toggleMode === "CLASSIC" ? rules_image : bonus_rules}
          alt="rules modal"
          className="w-full px-[2.19rem] lg:px-0"
        />

        <button
          className="block lg:hidden mt-6"
          onClick={() => dispatch({ type: "hideModal" })}
        >
          <img src={close_icon} alt="close" />
        </button>
      </div>
    </div>
  );
}

export default RulesModal;
