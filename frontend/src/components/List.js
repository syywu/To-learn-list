import Listitem from "./ListItems";
function List({ listDisplay }) {
  return (
    <div className="list">
      <ol>
        {listDisplay?.map((subject) => {
          return <Listitem name={subject.name} key={subject.id} />;
        })}
      </ol>
    </div>
  );
}

export default List;
