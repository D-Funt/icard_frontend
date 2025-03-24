import React from "react";
import "./App.css";
import { Navigation } from "./routes/Navigation";

function ButtonExampleButton() {
  return <button className="ui button">Click Here</button>;
}

function App() {
  return (
    <>
      <h1>Hello</h1>
      <button className="ui button">Hola amigos</button>
      <ButtonExampleButton />
      <Navigation />
    </>
  );
}

export default App;
