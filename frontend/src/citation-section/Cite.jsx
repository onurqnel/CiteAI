import Background from "../components/Background";
import UrlManager from "./components/UrlManager";

export default function Cite() {
  return (
    <>
      <Background />
      <section className="relative z-10 pt-36">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <UrlManager />
          </div>
      </section>
    </>
  );
}
