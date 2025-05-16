function RulesButton({ dispatch }) {
  return (
    <button
      onClick={() => dispatch({ type: "showModal", payload: true })}
      className="font-barlow border border-white text-white rounded-md px-[2.31rem] py-[0.69rem] mb-[2rem] mt-[4rem]"
    >
      RULES
    </button>
  );
}
export default RulesButton;
