import Marquee from "react-fast-marquee";

const Logo = () => {
  return (
    <div className="mt-24">
      <div className="mx-auto max-w-6xl">
        <Marquee gradient={false} speed={40} className="mt-16 flex">
          <img src="/apa.png" alt="APA" className="h-20 w-auto mx-18" />
          <img src="/mla.png" alt="MLA" className="h-20 w-auto mx-18" />
          <img src="/ieee.png" alt="IEEE" className="h-20 w-auto mx-18" />
          <img src="/chicago.png" alt="Chicago" className="h-20 w-auto mx-18" />
          <img src="/harvard.png" alt="Harvard" className="h-20 w-auto mx-18" />
        </Marquee>
      </div>
    </div>
  );
};
export default Logo;
