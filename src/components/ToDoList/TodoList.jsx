import List from "../List/List";
import "./ToDoList.css";

const TodoList = ({ activities, handleDeleteActivity }) => {
  const sportsCategoryActivities = activities.filter(
    (activity) => activity.category === "sports"
  );

  const cookingCategoryActivities = activities.filter(
    (activity) => activity.category === "cooking"
  );

  const healthCategoryActivities = activities.filter(
    (activity) => activity.category === "healthfitness"
  );

  const travelCategoryActivities = activities.filter(
    (activity) => activity.category === "travel"
  );

  const shoppingCategoryActivities = activities.filter(
    (activity) => activity.category === "shopping"
  );

  return (
    <div className="toDoList_list">
      {sportsCategoryActivities.length > 0 && (
        <section>
          <h3>Sports</h3>
          <List
            activities={sportsCategoryActivities}
            handleDeleteActivity={handleDeleteActivity}
          />
        </section>
      )}

      {cookingCategoryActivities.length > 0 && (
        <section>
          <h3>Cooking</h3>
          <List
            activities={cookingCategoryActivities}
            handleDeleteActivity={handleDeleteActivity}
          />
        </section>
      )}

      {healthCategoryActivities.length > 0 && (
        <section>
          <h3>Health & Fitness</h3>
          <List
            activities={healthCategoryActivities}
            handleDeleteActivity={handleDeleteActivity}
          />
        </section>
      )}

      {travelCategoryActivities.length > 0 && (
        <section>
          <h3>Travel</h3>
          <List
            activities={travelCategoryActivities}
            handleDeleteActivity={handleDeleteActivity}
          />
        </section>
      )}

      {shoppingCategoryActivities.length > 0 && (
        <section>
          <h3>Shopping</h3>
          <List
            activities={shoppingCategoryActivities}
            handleDeleteActivity={handleDeleteActivity}
          />
        </section>
      )}
    </div>
  );
};

export default TodoList;
