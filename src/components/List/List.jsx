export default function List({ activities, handleDeleteActivity }) {
  console.log({ activities });
  return (
    <section>
      <ul>
        {activities?.map((activity) => (
          <li key={activity.id}>
            <h3>{activity.name}</h3>
            <button onClick={() => handleDeleteActivity(activity.id)}>x</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
