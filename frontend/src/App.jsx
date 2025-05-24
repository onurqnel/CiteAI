import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Cite from "./citation-section/Cite"
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Background />
              <Hero />
              <Faq />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/cite" element={<Cite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
