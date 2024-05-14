import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import { uid } from "uid";
import List from "./components/List";
import Weather from "./components/Weather";
import useLocalStorageState from "use-local-storage-state";

// const isGoodWeather = true;

function App() {
  // const [activities, setActivities] = useLocalStorageState("activities", {
  //   defaultValue: [],
  // });
  const [activities, setActivities] = useState([]);
  const [weather, setWeather] = useState();

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(
          `https://example-apis.vercel.app/api/weather`
        );
        const weather = await response.json();
        setWeather(weather);
      } catch (e) {
        console.error(e.message);
      }
    }
    startFetching();
  }, []);
  console.log("weather", weather);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  /*--------------------*/

  function filterActivities() {
    setActivities(
      activities.filter((activity) => {
        return activity.goodWeatherActivity === isGoodWeather;
      })
    );
  }
  /*--------------------*/

  return (
    <>
      <header>
        <Weather onWeather={weather} />
      </header>
      <ul>
        {activities.map((activities) => (
          <li key={activities.id}>
            <List
              name={activities.name}
              goodWeatherActivity={activities.goodWeatherActivity}
              id={activities.id}
            />
          </li>
        ))}
      </ul>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
