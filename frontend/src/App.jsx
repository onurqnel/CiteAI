import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Background from "./components/Background";
import Cite from "./citation-section/Cite"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Background />
              <Hero />
              <Faq />
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
