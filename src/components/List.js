function List(props) {
  const title = props.title;
  const children = props.children;
  return (
    <div className="list">
      <h2>{title}</h2>
      <ul>{children}</ul>;
    </div>
  );
}

export default List;
