import List from "../components/List";
import Listitems from "../components/ListItems";
import Create from "./Create";
import { useState } from "react";

const Home = () => {
  const [listItem, setListItem] = useState([{ id: 1, subject: "react" }]);

  function handleSubmit(e, inputValue) {
    e.preventDefault();
    let newSubject = { id: listItem.length + 1, subject: inputValue };
    setListItem([...listItem, newSubject]);
  }

  function handleDelete(id) {
    const newList = listItem.filter((item) => item.id !== id);
    setListItem(newList);
  }

  return (
    <div className="homepage">
      <h2>My Study List</h2>
      <List title="Things I need to learn" handleDelete={handleDelete}>
        <Listitems />
      </List>
    </div>
  );
};

export default Home;
