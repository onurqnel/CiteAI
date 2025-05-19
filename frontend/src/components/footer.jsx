const Footer = () => {
  const navigation = [
    {
      name: "GitHub",
      href: "https://github.com/onurqnel",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
             0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608
             1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951
             0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004
             1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595
             1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747
             0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/onuronel13/",
      icon: (props) => (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          {...props}
        >
          <path
            fillRule="evenodd"
            d="M20.3292112,2 C21.2519624,2 22,2.74752185 22,3.67078882 L22,20.3292112 C22,21.2519624 
             21.2524781,22 20.3292112,22 L3.67078882,22 C2.74803764,22 2,21.2524781 2,20.3292112 
             L2,3.67078882 C2,2.74803764 2.74752185,2 3.67078882,2 L20.3292112,2 Z 
             M15.51875,9.5 C14.0993287,9.5 13.128125,10.127356 12.6956992,10.8562567 
             L12.625,10.9858333 L12.625,9.625 L9.91666667,9.625 L9.91666667,19.2083333 
             L12.8333333,19.2083333 L12.8333333,14.56625 C12.8333333,13.0104167 13.40625,12.0208333 
             14.7833333,12.0208333 C15.7330797,12.0208333 16.1315784,12.8606664 16.1644352,14.3580086 
             L16.1666667,14.56625 L16.1666667,19.2083333 L19.0833333,19.2083333 
             L19.0833333,13.9154167 C19.0833333,11.0575 18.3995833,9.5 15.51875,9.5 Z 
             M7.83333333,9.5 L4.91666667,9.5 L4.91666667,19.0833333 L7.83333333,19.0833333 
             L7.83333333,9.5 Z M6.375,4.5 C5.33958333,4.5 4.5,5.33958333 4.5,6.375 
             C4.5,7.41041667 5.33958333,8.25 6.375,8.25 C7.41041667,8.25 8.25,7.41041667 
             8.25,6.375 C8.25,5.33958333 7.41041667,4.5 6.375,4.5 Z"
          />
        </svg>
      ),
    },
  ];
  return (
    <footer className="relative isolate overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%,97.2% 73.2%,100% 34.9%,92.5% 0.4%,87.5% 0%,75% 28.6%,58.5% 54.6%,50.1% 56.8%,46.9% 44%,48.3% 17.4%,24.7% 53.9%,0% 27.9%,11.9% 74.2%,24.9% 54.1%,68.6% 100%,74.8% 41.9%)",
          }}
          className="aspect-[577/310] w-[36rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%,97.2% 73.2%,100% 34.9%,92.5% 0.4%,87.5% 0%,75% 28.6%,58.5% 54.6%,50.1% 56.8%,46.9% 44%,48.3% 17.4%,24.7% 53.9%,0% 27.9%,11.9% 74.2%,24.9% 54.1%,68.6% 100%,74.8% 41.9%)",
          }}
          className="aspect-[577/310] w-[36rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col items-center justify-center gap-y-6 lg:px-8">
        <div className="flex items-center gap-x-8">
          <p className="text-lg text-gray-600 font-medium">
            &copy; 2025 Onur Onel
          </p>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 text-gray-600 hover:text-gray-800 text-base font-semibold"
            >
              <item.icon className="size-7" aria-hidden="true" />
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
