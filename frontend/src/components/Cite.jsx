import UrlManager from "./citation-section/UrlManager";
import Header from "./citation-section/Header"


export default function Cite() {
  return (
    <>
      <section className="pt-24 mx-auto max-w-5xl px-6">
        <Header />
        <UrlManager />
      </section>
    </>
  );
}
