import { useEffect, useState } from "react";

export default function Weather({ onWeather }) {
  console.log("onWeather", onWeather);
  let weatherMessage = "";

  if (!onWeather) {
    return <h1>Loading...</h1>;
  }
  //  else {
  //   if (onWeather.isGoodWeather === true) {
  //     weatherMessage = "The weather is awesome!" + "\nGo outside and:";
  //   } else {
  //     weatherMessage =
  //       "Bad weather outside!" + "\nHere is what you can do now:";
  //   }
  // }

  return (
    <>
      <h1>{onWeather.condition}</h1>
      <h2>{onWeather.temperature} ºC</h2>
      <h2>
        {onWeather.isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </h2>
    </>
  );
}
