import rules_image from "../assets/image-rules.svg";
import close_icon from "../assets/icon-close.svg";

function RulesModal({ dispatch }) {
  return (
    <div className="h-screen">
      <p className="text-darkText font-barlow text-center text-[2rem] font-bold pt-[5.94rem] pb-[7.06rem]">
        RULES
      </p>
      <img
        src={rules_image}
        alt="rules modal"
        className="px-[2.19rem] pb-[9.62rem]"
      />
      <button
        className="pb-[4.12rem] block mx-auto"
        onClick={() => dispatch({ type: "hideModal" })}
      >
        <img src={close_icon} alt="close" />
      </button>
    </div>
  );
}

export default RulesModal;
