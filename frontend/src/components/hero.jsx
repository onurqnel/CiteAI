import Header from "./hero-section/header";
import Button from "./hero-section/button";
import Logo from "./hero-section/logo";
import Image from "./hero-section/image";

const Hero = () => {
  return (
    <section className="relative z-10 pt-14">
      <div className="py-12 lg:pb-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Header />
          <Button />
          <Logo />
          <Image />
        </div>
      </div>
    </section>
  );
};

export default Hero;
