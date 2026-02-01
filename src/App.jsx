import { useState } from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import MyExperience from "./components/MyExperience";
import About from "./components/About";
import Projects from "./components/Projects";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <MainSection />
//       <MyExperience />
//       <Projects />
//       <About />
//     </>
//   );
// }

// App.jsx
function App() {
  return (
    <>
      <Navbar />
      {/* Assigning IDs to match your navbar links */}
      <div id="home">
        <MainSection />
      </div>
      <div id="MyExperience">
        <MyExperience />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="About">
        <About />
      </div>
    </>
  );
}

export default App;
