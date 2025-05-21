const Header = () => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="mt-6 text-[7.5rem] text-black">CiteAI</h1>

      <p className="mt-2 text-3xl font-medium text-pretty text-gray-600 flex items-center justify-center gap-2">
        Powered by OpenAI API
        <img src="/openai.png" alt="OpenAI Logo" className="h-9 w-9" />
      </p>
    </div>
  );
};

export default Header;
