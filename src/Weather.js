import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="card currentCity">
        <form className="form-inline" id="city-form">
          <input
            type="text"
            placeholder="Enter a city"
            className="form-control form-control-sm"
            id="city-input"
            autofocus
            autocomplete="off"
          />
          <div className="col searchButton">
            <button type="submit" className="btn btn-light btn-sm">
              Search
            </button>
          </div>
        </form>
        <div className="row currentCityData">
          <div className="col-6" id="current-city">
            Vienna
          </div>
          <div className="col-2"></div>
          <span id="current-temperature">21</span>
          °C
        </div>

        <div className="row">
          <div className="col-8">
            <p className="moreInfo">
              <span id="descr"></span>
              <br />
              humidity: <span id="humidity">12</span>%
              <br />
              wind: <span id="wind"> 55</span>km/h
            </p>
          </div>
          <div className="col-4">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              id="currentWeatherLogo"
              width="90"
            />
          </div>
        </div>
        <br />
        <div className="weather-forecast" id="forecast"></div>
      </div>
      <br />

      <p>
        <a
          href="https://github.com/BettySosterics/weatherapp-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Betty Sosterics
      </p>
    </div>
  );
}
