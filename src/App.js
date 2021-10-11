import React, { useState, useEffect } from "react";
import "./App.css";
import CardQuestion from "./components/CardQuestion";
import Header from "./components/Header";
import axios from "axios"
function App() {
  const [idClick, setIdClick] = useState();
  const [objSport, setObjSport] = useState({});
  const [objMusic, setObjMusic] = useState({});
  const [objFilm, setObjFilm] = useState({});
  const [objTelevision, setObjTelevsion] = useState({});
  const clickHandler = (e) => {
    e.preventDefault();
    setIdClick(e.currentTarget.dataset.id);
  }

  useEffect(() => {
    generateAPI(idClick);
  }, [idClick])
  const generateAPI = (idClick) => {
    if (idClick != undefined) {
      switch (idClick) {
        case "1":
          sportAPI();
          break;
        case "2":
          musicAPI();
          break;
        case "3":
          filmAPI();
          break;
        case "4":
          televisionAPI();
          break;
        default:
          break;
      }
    }
  }

  const sportAPI = () => {
    console.log("SPORT");
    axios.get("https://opentdb.com/api.php?amount=10&category=21&type=multiple").then(({ data: { results } }) => {
      setObjSport(results);
      console.log(results);
    }).catch(err => console.log(err))
  }
  const musicAPI = () => {
    console.log("MUSIC");
    axios.get("https://opentdb.com/api.php?amount=10&category=12&type=multiple").then(({ data: { results } }) => { setObjMusic(results) }).catch(err => console.log(err))
  }
  const filmAPI = () => {
    console.log("FILM");
    axios.get("https://opentdb.com/api.php?amount=10&category=11").then(({ data: { results } }) => setObjFilm(results)).catch(err => console.log(err))
  }
  const televisionAPI = () => {
    console.log("TELE");
    axios.get("https://opentdb.com/api.php?amount=10&category=14").then(({ data: { results } }) => setObjTelevsion(results)).catch(err => console.log(err))
  }

  return (
    <div className="App">
      <Header clickHandler={clickHandler} />
      <div className="card-question">
        <CardQuestion objSport={objSport} />
      </div>
    </div>
  );
}

export default App;
