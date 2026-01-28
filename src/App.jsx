import { useState } from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import MyExperience from "./components/MyExperience";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <MainSection />
      <MyExperience />
      <Projects />
      <About />
    </>
  );
}

export default App;
