// ROUTER
import { BrowserRouter } from "react-router-dom";

// COMPONENTS
import {
  Hero,
  Navbar,
  About,
  Experience,
  Tech,
  Works,
  Contact,
  Feedbacks,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="realtive z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
