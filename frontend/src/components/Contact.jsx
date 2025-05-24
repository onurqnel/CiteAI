const Contact = () => {
  return (
    <div className="isolate px-6 py-8 mb-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-center mt-2 text-5xl font-medium tracking-tight text-balance text-black">
          Contact
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-12 max-w-3xl"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              className="block w-full rounded-md px-4 py-2.5 text-base text-gray-900 bg-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
          <div className="sm:col-span-2">
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Message"
              className="block w-full rounded-md px-4 py-2.5 text-base text-gray-900 bg-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-32 mx-auto rounded-md bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
