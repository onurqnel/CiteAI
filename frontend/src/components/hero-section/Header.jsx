const Header = () => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="text-[8.5rem] text-black">CiteAI</h1>

      <p className=" text-2xl font-medium text-pretty text-gray-600 flex items-center justify-center gap-2">
        Powered by OpenAI API
        <img src="/openai.png" alt="OpenAI Logo" className="h-7 w-7" />
      </p>
    </div>
  );
};

export default Header;
