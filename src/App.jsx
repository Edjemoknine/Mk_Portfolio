import { useState } from "react";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "dark  relative" : "relative"
      }  dark:bg-gray-900 bg-white`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main />
      <Skills />
      <Portfolio />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
