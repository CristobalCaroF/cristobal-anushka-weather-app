import List from "../List/List";

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
    <>
      {sportsCategoryActivities.length > 0 && <h3>Sports</h3>}
      <List
        activities={sportsCategoryActivities}
        handleDeleteActivity={handleDeleteActivity}
      />

      {cookingCategoryActivities.length > 0 && <h3>Cooking</h3>}
      <List
        activities={cookingCategoryActivities}
        handleDeleteActivity={handleDeleteActivity}
      />
      {healthCategoryActivities.length > 0 && <h3>Health & Fitness</h3>}
      <List
        activities={healthCategoryActivities}
        handleDeleteActivity={handleDeleteActivity}
      />
      {travelCategoryActivities.length > 0 && <h3>Travel</h3>}
      <List
        activities={travelCategoryActivities}
        handleDeleteActivity={handleDeleteActivity}
      />

      {shoppingCategoryActivities.length > 0 && <h3>Shopping</h3>}
      <List
        activities={shoppingCategoryActivities}
        handleDeleteActivity={handleDeleteActivity}
      />
    </>
  );
};

export default TodoList;
