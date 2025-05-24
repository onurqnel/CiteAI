import Background from "../components/Background";
import UrlManager from "./components/UrlManager";
import Header from "./components/Header";


export default function Cite() {
  return (
    <>
      <Background />
      <section className="pt-24 mx-auto max-w-5xl px-6">
        <Header />
        <UrlManager />
      </section>
    </>
  );
}
