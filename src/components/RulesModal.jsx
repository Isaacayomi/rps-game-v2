import rules_image from "../assets/image-rules.svg";
import close_icon from "../assets/icon-close.svg";

function RulesModal({ dispatch }) {
  return (
    <div className="h-screen grid place-content-center">
      <p className="text-darkText font-barlow text-center text-[2rem] font-bold pb-[2.19rem]">
        RULES
      </p>
      <img
        src={rules_image}
        alt="rules modal"
        className="px-[2.19rem] mx-auto"
      />
      <button
        className="mt-[4.12rem] block mx-auto  outline-slate-500 cursor-pointer"
        onClick={() => dispatch({ type: "hideModal" })}
      >
        <img src={close_icon} alt="close" />
      </button>
    </div>
  );
}

export default RulesModal;
