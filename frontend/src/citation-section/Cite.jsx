import Background from "../components/Background";
import Navbar from "../components/Navbar";
import UrlManager from "./components/UrlManager";
import Header from "./components/Header";


export default function Cite() {
  return (
    <>
      <Background />
      <Navbar />
      <section className="pt-24 mx-auto max-w-5xl px-6">
        <Header />
        <UrlManager />
      </section>
    </>
  );
}
