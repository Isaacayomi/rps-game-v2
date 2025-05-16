import { Children } from "react";

function ScoreButton({ children }) {
  return (
    <div className="flex flex-col justify-center text-center bg-white font-barlow px-6 rounded-[0.25rem] shadow-customShadow my-[0.75rem]">
      {children}
    </div>
  );
}

export default ScoreButton;
