import List from "tar/lib/list";
import Listitems from "../components/ListItems";

const Home = () => {
  const [listItem, setListItem] = setState("");

  function handleChange(e) {
    setListItem(e.target.value);
  }
  return (
    <div className="homepage">
      <h2>Homepage</h2>
      <List title="Things I need to learn">
        <Listitems text={listItem} />
      </List>
    </div>
  );
};

export default Home;
