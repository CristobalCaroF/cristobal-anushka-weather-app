export default function Form({ onAddActivity }) {
  //   const getData = { name: "", ifForGoodWeather: true };
  function handleSubmit(event) {
    event.preventDefault();

    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);
    // console.log(data);

    // {...data, goodWeatherActivity.checked} = data

    // onAddActivity(data);

    const formElements = event.target.elements;
    const activity = {
      name: formElements.activityName.value,
      isGoodWeather: formElements.goodWeatherActivity.checked,
    };
    onAddActivity(activity);
    event.target.reset();
    event.target.name.focus();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new Activity:</h2>
      <label htmlFor="activityName">Name:</label>
      <input type="text" id="activityName" name="name"></input>
      <br />
      <label htmlFor="goodWeatherActivity">Good-weather activity:</label>
      <input
        type="checkbox"
        id="goodWeatherActivity"
        name="goodWeatherActivity"
      ></input>
      <br />
      <button>Submit</button>
    </form>
  );
}
