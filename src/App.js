import React from "react";
import HeadlinesCards from "./components/HeadlinesCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlinesCards/>
    </div>
  );
}

export default App;
