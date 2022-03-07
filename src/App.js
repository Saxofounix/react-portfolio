import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Sidepanel from "./components/sidePanel/sidepanel";
import Hero from "./components/hero/hero";
import SidePanel2 from "./components/sidePanel_2/sidePanel2";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidepanel />
        <SidePanel2 />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Router>
    </>
  );
}

export default App;
