import Header from "./hero-section/Header";
import Button from "./hero-section/Button";
import Logo from "./hero-section/Logo";
import Image from "./hero-section/Image";

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
