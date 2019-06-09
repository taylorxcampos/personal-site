import { hot } from "react-hot-loader/root";
import React from "react";
import "./App.css";
import ButtonAppBar from "./components/navbar";
import ImTaylor from "./components/im-taylor";
import PastPresentFuture from "./components/past-present-future";
import { pppText } from "./data/";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <ImTaylor />
      <PastPresentFuture {...pppText} />
    </div>
  );
}

export default hot(App);
