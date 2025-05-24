import Header from "./hero-section/Header";
import Logo from "./hero-section/Logo";
import Features from "./hero-section/Features";

const Hero = () => {
  return (
    <section className="relative z-10 pt-14">
      <div className="py-12 lg:pb-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Header />
          <Logo />
          <Features />
        </div>
      </div>
    </section>
  );
};

export default Hero;
