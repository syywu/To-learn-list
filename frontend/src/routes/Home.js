import List from "../components/List";
import Listitem from "../components/ListItems";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "../components/useFetch";

const Home = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const { data, isPending, error } = useFetch(`https://localhost:8000/user`);

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
        {error && <div>{error}</div>}
        {isPending && <div>Loading..</div>}
        {data && (
          <List title="Things I need to learn" listItem={data}>
            <Listitem />
          </List>
        )}
      </div>
    )
  );
};

export default Home;
