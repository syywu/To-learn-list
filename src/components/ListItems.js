function Listitems(props) {
  const text = props.text;

  return (
    <div className="list-itmes">
      <li>{text}</li>
    </div>
  );
}

export default Listitems;
