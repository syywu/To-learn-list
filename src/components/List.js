function List({ children, title }) {
  return (
    <div className="list">
      <h2>{title}</h2>
      <ul>{children}</ul>;
    </div>
  );
}

export default List;
