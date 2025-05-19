const Background = () => {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 -top-52 z-0 overflow-hidden blur-[56px] sm:-top-[24rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 aspect-[1155/678] w-[64rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] via-[#c599ff] to-[#9089fc] opacity-25 sm:w-[120rem]"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-[-18rem] z-0 overflow-hidden blur-[56px] sm:bottom-[-36rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 aspect-[1155/678] w-[64rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] via-[#c599ff] to-[#9089fc] opacity-25 sm:w-[120rem]"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -left-56 bottom-[-10rem] z-0 overflow-hidden blur-[50px] sm:-left-[22rem] sm:bottom-[-14rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(10% 20%, 35% 5%, 30% 15%, 80% 0%, 100% 25%, 95% 50%, 100% 75%, 75% 100%, 40% 90%, 15% 100%, 0% 70%, 5% 40%)",
          }}
          className="relative aspect-square w-[30rem] -rotate-[16deg] bg-gradient-to-br from-[#ff80b5] via-[#d7a2ff] to-[#9089fc] opacity-15 sm:w-[40rem]"
        />
      </div>
    </>
  );
};

export default Background;
