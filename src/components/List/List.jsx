import "../ToDoList/ToDoList.css";
import "./List.css";

export default function List({ activities, handleDeleteActivity }) {
  console.log({ activities });
  return (
    <ul className="unordered-list">
      {activities?.map((activity) => (
        <li key={activity.id}>
          <p className="toDoList_heading">
            {activity.name}{" "}
            <button
              className="delete_button"
              onClick={() => handleDeleteActivity(activity.id)}
            >
              x
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
}
