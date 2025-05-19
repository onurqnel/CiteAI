const Image = () => {
  return (
    <div className="mt-24 flow-root">
      <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
        <img
          alt="App screenshot"
          src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
          width={2432}
          height={1442}
          className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
        />
      </div>
    </div>
  );
};
export default Image;
