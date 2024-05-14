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
  console.log(activities);

  return (
    <>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <List
              name={activity.name}
              goodWeatherActivity={activity.goodWeatherActivity}
              id={activity.id}
            />
          </li>
        ))}
      </ul>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
