import React from "react";

import Food from "./components/Food";
import HeadlinesCards from "./components/HeadlinesCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlinesCards/>
      <Food/>
      
    </div>
  );
}

export default App;
