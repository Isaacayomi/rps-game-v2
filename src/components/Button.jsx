function Button({ children }) {
  return (
    <div className="block mx-auto font-barlow border border-white text-white rounded-md px-[2.31rem] py-[0.69rem] mt-[3rem] cursor-pointer mr-5 hover:bg-white hover:text-darkText font-bold">
      {children}
    </div>
  );
}

export default Button;
