import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vienna" />
        <footer>
          Coded by Betty Sosterics and is open-sourced on{" "}
          <a
            href="https://github.com/BettySosterics/weatherapp-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
