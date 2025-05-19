const Header = () => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="mt-12 text-[10.5rem] text-black">CiteAI</h1>

      <p className="mt-2 text-3xl font-medium text-pretty text-gray-600 flex items-center justify-center gap-2">
        Powered by OpenAI API
        <img src="/openai.png" alt="OpenAI Logo" className="h-10 w-10" />
      </p>
    </div>
  );
};

export default Header;
