function ScoreButton({ children }) {
  return (
    <div className="flex flex-col justify-center items-center text-center bg-white font-barlow px-6 rounded-[0.25rem] shadow-customShadow my-[0.75rem] max-w-[9.375rem] w-full lg:w-full lg:h-[7.125rem] lg:px-[3rem] ">
      {children}
    </div>
  );
}

export default ScoreButton;
