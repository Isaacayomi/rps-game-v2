function RulesButton({ dispatch }) {
  return (
    <button
      onClick={() => dispatch({ type: "showModal", payload: true })}
      className="block mx-auto font-barlow border border-white text-white rounded-md px-[2.31rem] py-[0.69rem] mt-[3rem] cursor-pointer mr-5"
    >
      RULES
    </button>
  );
}
export default RulesButton;
