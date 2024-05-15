export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    const activity = {
      name: formElements.activityName.value,
      isGoodWeather: formElements.goodWeatherActivity.checked,
      category: formElements.toDoList.value,
    };
    console.log(formElements);
    onAddActivity(activity);
    event.target.reset();
    event.target.name.focus();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new Activity:</h2>
      <label htmlFor="activityName">Name:</label>
      <input type="text" id="activityName" name="name" maxLength={10}></input>
      <br />
      <section>
        <label htmlFor="toDoList">What's your mood today?</label>
        <select name="toDoList" id="toDoList">
          <option value="default">Choose from here</option>
          <option value="sports">Sports</option>
          <option value="cooking">Cooking</option>
          <option value="healthfitness">Health & Fitness</option>
          <option value="travel">Travel</option>
          <option value="shopping">Shopping</option>
        </select>
      </section>
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
