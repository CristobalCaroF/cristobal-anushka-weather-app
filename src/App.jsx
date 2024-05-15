import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import { uid } from "uid";
import List from "./components/List";
import Weather from "./components/Weather";
import useLocalStorageState from "use-local-storage-state";
import City from "./components/City";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("europe");
  // const [selectedCity, setSelectedCity] = useState("");

  // -----------------------HANDLE ACTIVITY--------------------------------------

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  // -----------------------FILTER ACTIVITY--------------------------------------

  const filterActivities = activities.filter(
    (activity) => activity?.isGoodWeather === weather?.isGoodWeather
  );

  // ------------------------CITY SELECTOR----------------------------------------
  function handleSelectedCity(newCity) {
    setCity(newCity);
  }

  // ------------------------FETCHING API-----------------------------------------

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(
          `https://example-apis.vercel.app/api/weather/${city}`
        );
        const weather = await response.json();
        setWeather(weather);
      } catch (e) {
        console.error(e.message);
      }
    }
    startFetching();
    const interval = setInterval(startFetching, 5000);
    return () => clearInterval(interval);
  }, [city]);

  // -----------------------HANDLE DELETE ACTIVITY----------------------------------

  const handleDeleteActivity = (id) => {
    const deletedActivitiesList = activities.filter(
      (activity) => activity.id != id
    );
    setActivities(deletedActivitiesList);
  };

  // -----------------------RENDERING----------------------------------------------

  return (
    <>
      <header>
        <Weather onWeather={weather} />
      </header>
      <ul>
        {filterActivities.map((activity) => (
          <li key={activity.id}>
            <List
              // ################## REFACTOR THIS!!#################################
              name={activity.name}
              goodWeatherActivity={activity.isGoodWeather}
              id={activity.id}
              onDeleteActivity={handleDeleteActivity}
            />
            <button onClick={() => handleDeleteActivity(activity.id)}>x</button>
          </li>
        ))}
      </ul>
      <Form onAddActivity={handleAddActivity} />
      <City onSelectedCity={handleSelectedCity} />
    </>
  );
}

export default App;
