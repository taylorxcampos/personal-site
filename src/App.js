import { hot } from "react-hot-loader/root";
import React from "react";
import "./App.css";
import ButtonAppBar from "./components/navbar";
import ImTaylor from "./components/im-taylor";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <ImTaylor />
    </div>
  );
}

export default hot(App);
