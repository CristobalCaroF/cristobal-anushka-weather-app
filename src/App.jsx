
import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import { uid } from "uid";
import List from "./components/List";
import Weather from "./components/Weather";
import useLocalStorageState from "use-local-storage-state";

// const isGoodWeather = true;
// import useLocalStorageState from "use-local-storage-state";

const isGoodWeather = true;

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
                
  const filterActivities = activities.filter(
    (activity) => activity.isGoodWeather === isGoodWeather
  );
  console.log(filterActivities);
  console.log(activities);

  /*--------------------*/

  //   setActivities(
  //     activities.filter((activity) => {
  //       return activity.goodWeatherActivity === isGoodWeather;
  //     })
  //   );
  // }
  /*--------------------*/

  const handleDeleteActivity = (id) => {
    const deletedActivitiesList = activities.filter(
      (activity) => activity.id != id
    );
    setActivities(deletedActivitiesList);
  };

  return (
    <>
      <ul>
        <h2>
          {isGoodWeather
            ? "The weather is awesome! Go outside and:"
            : "Bad weather outside! Here's what you can do now:"}
        </h2>
        {filterActivities.map((activity) => (
          <li key={activities.id}>
            <List
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
