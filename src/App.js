import React from "react";
import Category from "./components/Category";
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
      <Category/>
    </div>
  );
}

export default App;
