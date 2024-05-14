import { useEffect, useState } from "react";

export default function Weather({ onWeather }) {
  console.log("onWeather", onWeather);

  if (!onWeather) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>{onWeather.condition}</h1>
      <h2>{onWeather.temperature} ºC</h2>
    </>
  );
}
