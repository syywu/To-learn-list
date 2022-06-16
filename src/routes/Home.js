import List from "../components/List";
import Listitems from "../components/ListItems";

const Home = () => {
  // const [listItem, setListItem] = setState("");

  // function handleChange(e) {
  //   setListItem(e.target.value);
  // }
  return (
    <div className="homepage">
      <h2>My Study List</h2>
      <List title="Things I need to learn">
        <Listitems />
      </List>
    </div>
  );
};

export default Home;
