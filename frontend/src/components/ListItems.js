function Listitem({ text, handleDelete }) {
  return (
    <div className="list-itmes">
      <li>{text}</li>
      <button onClick={handleDelete}>Done</button>
    </div>
  );
}

export default Listitem;
