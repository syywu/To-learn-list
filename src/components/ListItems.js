function Listitems(props) {
  const text = props.text;
  const title = props.title;
  return (
    <div className="list-itmes">
      <h2>{title}</h2>
      <li>{text}</li>
    </div>
  );
}

export default Listitems;
