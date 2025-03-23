import { BrowserRouter, Routes, Route } from "react-router"; // React-Router

// Components
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import WhyUs from "./components/WhyUs";
import StartNow from "./components/StartNow";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ImageGenerator from "./components/ImageGenerator";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/text-to-image" element={<ImageGenerator />} />
        </Routes>
        <Features />
        <WhyUs />
        <StartNow />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
