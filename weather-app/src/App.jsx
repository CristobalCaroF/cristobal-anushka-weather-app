import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { uid } from "uid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

const isGoodWeather = true;

function App() {
  // const [activities, setActivities] = useLocalStorageState("activities", {
  //   defaultValue: [],
  // });
  const [activities, setActivities] = useState([]);
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
