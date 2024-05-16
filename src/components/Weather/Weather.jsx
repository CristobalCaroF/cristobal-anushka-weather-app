import { useEffect, useState } from "react";
import "./Weather.css";

export default function Weather({ onWeather }) {
  if (!onWeather) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="weather-container">
      <div className="weather_condition">
        <p className="weather_condition_img">{onWeather.condition}</p>
        <p className="weather_condition_temperature">
          {onWeather.temperature} ºC
        </p>
      </div>
      <h2 className="weather-message_condition">
        {onWeather.isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </h2>
    </div>
  );
}
