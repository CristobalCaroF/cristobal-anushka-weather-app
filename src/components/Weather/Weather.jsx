import { useEffect, useState } from "react";
import "./Weather.css";

export default function Weather({ onWeather }) {
  //console.log("onWeather", onWeather);
  let weatherMessage = "";

  if (!onWeather) {
    return <h1>Loading...</h1>;
  }

  return (
    <header className="weather_condition">
      <h1 className="weather_condition_img">{onWeather.condition}</h1>
      <h2 className="weather_condition_temperature">
        {onWeather.temperature} ºC
      </h2>
      <h2 className="weather-condition_condition">
        {onWeather.isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </h2>
    </header>
  );
}
