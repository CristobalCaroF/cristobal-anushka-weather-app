import "./Form.css";

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
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add new Activity:</h2>
      <label className="form__label" htmlFor="activityName">
        Name:
      </label>
      <input
        className="form__input-text"
        type="text"
        id="activityName"
        name="name"
        maxLength={10}
      ></input>
      <br />
      <section>
        <label className="form__label" htmlFor="toDoList">
          What's your mood today?
        </label>
        <select name="toDoList" id="toDoList">
          <option value="default">Choose from here</option>
          <option value="sports">Sports</option>
          <option value="cooking">Cooking</option>
          <option value="healthfitness">Health & Fitness</option>
          <option value="travel">Travel</option>
          <option value="shopping">Shopping</option>
        </select>
      </section>
      <label className="form__label" htmlFor="goodWeatherActivity">
        Good-weather activity:
      </label>
      <input
        className="form__checkbox"
        type="checkbox"
        id="goodWeatherActivity"
        name="goodWeatherActivity"
      ></input>
      <br />
      <button type="submit" className="form__button">
        Submit
      </button>
    </form>
  );
}
