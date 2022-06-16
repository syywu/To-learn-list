import List from "../components/List";
import Listitems from "../components/ListItems";
import Create from "./Create";

const Home = () => {
  const [listItem, setListItem] = setState("");

  function handleSubmit(e, inputValue) {
    e.preventDefault();
    newSubject = { id: listItem.length + 1, subject: inputValue };
    setListItem([...listItem, newSubject]);
  }

  return (
    <div className="homepage">
      <h2>My Study List</h2>
      <Create handleSubmit={handleSubmit} />
      <List title="Things I need to learn">
        <Listitems />
      </List>
    </div>
  );
};

export default Home;
