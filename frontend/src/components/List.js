import Listitems from "./ListItems";
function List({ title, subjects, handleDelete }) {
  return (
    <div className="list">
      <h1>{title}</h1>
      <ul>{subjects}</ul>
      <button onClick={handleDelete}>Done</button>
    </div>
  );
}

export default List;
