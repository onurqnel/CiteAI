import Background from "../components/Background";
import UrlManager from "./components/UrlManager";

export default function Cite() {
  return (
    <>
      <Background />
      <section className="relative z-10 pt-14">
        <div className="py-12 lg:pb-18">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <UrlManager />
          </div>
        </div>
      </section>
    </>
  );
}
