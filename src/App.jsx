import React from "react";
import Background from "./components/background";
import MainContent from "./components/main-content";
import MainContentMain from "./components/main-content-main";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Hero from "./components/hero";
import Bubbles from "./components/bubbles";

function App() {
  return (
    <>
      <Background />
      <MainContent>
        <MainContentMain>
          <Navbar />
          <Hero />
        </MainContentMain>
        <Sidebar />
      </MainContent>
      <Bubbles />
    </>
  );
}

export default App;
