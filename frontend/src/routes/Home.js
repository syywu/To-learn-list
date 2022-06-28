import List from "../components/List";
import Listitems from "../components/ListItems";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();

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
    isAuthenticated && (
      <div className="homepage">
        <h2>{user.given_name}'s study list</h2>
        <List title="Things I need to learn" handleDelete={handleDelete}>
          <Listitems />
        </List>
      </div>
    )
  );
};

export default Home;
