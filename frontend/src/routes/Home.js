import List from "../components/List";
import Listitem from "../components/ListItems";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  const [listDisplay, setListDisplay] = useState([{ id: 1, subject: "react" }]);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = process.env.REACT_APP_DOMAIN;

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  function addToList(inputValue) {
    let newSubject = { id: listDisplay.length + 1, subject: inputValue };
    setListDisplay([...listDisplay, newSubject]);
  }

  function handleDelete(id) {
    const newList = listDisplay.filter((item) => item.id !== id);
    setListDisplay(newList);
  }

  return (
    isAuthenticated && (
      <div className="homepage">
        <h2>{user.given_name}'s study list</h2>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
        {listDisplay && (
          <List
            title="Things I need to learn"
            listItem={listDisplay}
            handleDelete={handleDelete}
          >
            <Listitem />
          </List>
        )}
      </div>
    )
  );
};

export default Home;
