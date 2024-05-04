import React from "react";
import Background from "./components/background";
import MainContent from "./components/main-content";
import MainContentMain from "./components/main-content-main";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <Background />
      <MainContent>
        <MainContentMain>
          <Navbar />
        </MainContentMain>
        <Sidebar />
      </MainContent>
    </>
  );
}

export default App;
