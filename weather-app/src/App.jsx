import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { uid } from "uid";
import List from "./components/List";
// import useLocalStorageState from "use-local-storage-state";

const isGoodWeather = true;

function App() {
  // const [activities, setActivities] = useLocalStorageState("activities", {
  //   defaultValue: [],
  // });
  const [activities, setActivities] = useState([]);
  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

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
            />
          </li>
        ))}
      </ul>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
