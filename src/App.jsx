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

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  const filterActivities = activities.filter(
    (activity) => activity.isGoodWeather === weather.isGoodWeather
  );
  console.log(filterActivities);
  console.log(activities);

  const handleDeleteActivity = (id) => {
    const deletedActivitiesList = activities.filter(
      (activity) => activity.id != id
    );
    setActivities(deletedActivitiesList);
  };

  return (
    <>
      <header>
        <Weather onWeather={weather} />
      </header>
      <ul>
        {filterActivities.map((activity) => (
          <li key={activities.id}>
            <List
              // ------------------- REFACTOR THIS!!--------------------------------------------
              name={activity.name}
              goodWeatherActivity={activity.goodWeatherActivity}
              id={activity.id}
              onDeleteActivity={handleDeleteActivity}
            />
            <button onClick={() => handleDeleteActivity(activity.id)}>x</button>
          </li>
        ))}
      </ul>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
