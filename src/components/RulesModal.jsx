import rules_image from "../assets/image-rules.svg";
import close_icon from "../assets/icon-close.svg";

function RulesModal({ dispatch }) {
  return (
    <div className="h-screen w-full grid place-items-center absolute bg-white top-0 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-white lg:h-[25rem] lg:w-[25rem]">
      <div className=" lg:w-[25rem] lg:h-[25rem] p-6 rounded-lg flex flex-col items-center justify-center space-y-6">
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-between lg:items-center">
          <p className="text-darkText font-barlow text-[2rem] font-bold text-center lg:text-left">
            RULES
          </p>
          {/* Close button for large screens */}
          <button
            className="hidden lg:block"
            onClick={() => dispatch({ type: "hideModal" })}
          >
            <img src={close_icon} alt="close" />
          </button>
        </div>

        {/* Rules Image */}
        <img
          src={rules_image}
          alt="rules modal"
          className="w-full px-[2.19rem] lg:px-0"
        />

        {/* Close button for small screens */}
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
