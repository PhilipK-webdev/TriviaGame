import React, { useState } from "react";
import "./App.css";
import CardQuestion from "./components/CardQuestion";
import Header from "./components/Header";

function App() {
  const [idClick, setIdClick] = useState();
  const clickHandler = (e) => {
    e.preventDefault();
    setIdClick(e.currentTarget.dataset.id);
  }
  return (
    <div className="App">
      <Header clickHandler={clickHandler} />
      <div className="card-question">
        <CardQuestion idChoose={idClick} />
      </div>
    </div>
  );
}

export default App;
