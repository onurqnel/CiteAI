
import Background from "../components/Background";
import Comp from "./Comp";

const Cite = () => {
  return (
    <>
      <Background />
      <section className="relative z-10 pt-14">
        <div className="py-12 lg:pb-18">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Comp />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cite;
