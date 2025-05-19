import Marquee from "react-fast-marquee";

("use client");

export default function HeroSection() {
  return (
    <section className="relative z-10 pt-14">
      <div className="py-12 lg:pb-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mt-12 text-9xl text-black">CiteAI</h1>

            <p className="mt-12 text-2xl font-medium text-pretty text-gray-600 flex items-center justify-center gap-2">
              Powered by OpenAI&nbsp;API
              <img src="/openai.png" alt="OpenAI Logo" className="h-8 w-8" />
            </p>
            <div className="mt-16 flex items-center justify-center gap-x-8">
              <a
                href="#"
                className="mt-12 flex items-center justify-center rounded-full bg-gray-800 px-6 py-2 text-lg font-semibold text-white shadow-lg transition hover:bg-fuchsia-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
              >
                Get&nbsp;Started
              </a>
            </div>
          </div>

          <div className="mt-40">
            <div className="mx-auto max-w-5xl">
              <Marquee gradient={false} speed={40} className="mt-16 flex">
                <img src="/apa.png" alt="APA" className="h-24 w-auto mx-16" />
                <img src="/mla.png" alt="MLA" className="h-24 w-auto mx-16" />
                <img src="/ieee.png" alt="IEEE" className="h-24 w-auto mx-16" />
                <img
                  src="/chicago.png"
                  alt="Chicago"
                  className="h-24 w-auto mx-16"
                />
                <img
                  src="/harvard.png"
                  alt="Harvard"
                  className="h-24 w-auto mx-16"
                />
              </Marquee>
            </div>
          </div>

          {/* Uygulama ekran görüntüsü */}
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
        </div>
      </div>
    </section>
  );
}
