import React from "react";
import "./App.css";
import Header from "./components/Header";

function App() {


  const mouseEnter = (e) => {
    console.log("Hello")
  }
  return (
    <div className="App">
      {/* <div onMouseEnter={mouseEnter}>Hello</div> */}
      {/* <div onMouseLeave={mouseLeave}></div> */}
      <Header />
    </div>
  );
}

export default App;
