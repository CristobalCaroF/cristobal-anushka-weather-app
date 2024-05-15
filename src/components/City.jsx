import { useState, useEffect } from "react";

// export default function City({ onSelectedCity }) {
//   const options = [
//     {
//       label: "Europe",
//       value: "europe",
//       id: "1",
//     },
//     {
//       label: "Arctic",
//       value: "arctic",
//       id: "2",
//     },
//     {
//       label: "Sahara",
//       value: "sahara",
//       id: "3",
//     },
//     {
//       label: "Rainforest",
//       value: "rainforest",
//       id: "4",
//     },
//   ];

//   return (
//     <>
//       <label htmlFor="city">Where are you? </label>
//       <select name="city" id="city" onChange={}>
//         {options.map((option) => (
//           <option key={option.id} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </>
//   );
// }

// // ----------------------

// function CitySelector({ onSelectedCity }) {

export default function City({ onSelectedCity }) {
  function handleCityChange(e) {
    const city = e.target.value;
    onSelectedCity(city);
  }

  return (
    <>
      <label htmlFor="cities">Select a city:</label>
      <select
        name="cities"
        id="cities"
        value="city"
        onChange={handleCityChange}
      >
        <option value="default">Choose a location</option>
        <option value="europe">Europe</option>
        <option value="sahara">Sahara</option>
        <option value="arctic">Arctic</option>
        <option value="rainforest">Rainforest</option>
      </select>
    </>
  );
}
// }
// export default CitySelector;
