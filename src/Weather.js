import React from "react";
import axios from "axios";

export default function Weather() {
  function handleSubmit(response) {
    alert(`The weather in Paris is ${response.data.main.temp}°C`);
  }

  let apiKey = "094780c710fa4efd669f0df8c3991927";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleSubmit);

  return <h1>weather in chicago is 19C</h1>;
}
