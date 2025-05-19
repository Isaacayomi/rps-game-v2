function MovesButton({ children, onClick }) {
  return (
    <button onClick={onClick} className="outline-slate-200 rounded-full">
      {children}
    </button>
  );
}

export default MovesButton;
