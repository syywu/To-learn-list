import Listitem from "./ListItems";
function List({ listDisplay }) {
  return (
    <div className="list">
      <ol>
        {listDisplay?.map((item) => {
          return <Listitem name={item.name} key={item.id} />;
        })}
      </ol>
    </div>
  );
}

export default List;
