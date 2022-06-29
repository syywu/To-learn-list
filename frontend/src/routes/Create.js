import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [subject, setSubject] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://localhost:8000/list`, {
      method: POST,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subject),
    }).then(() => {
      console.log("added");
      history.push("/");
    });
  }

  return (
    <div className="create">
      <h2>Add a new subject</h2>
      <form onSubmit={handleSubmit}>
        <label>New Subject</label>
        <input
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.value.target)}
        />
        <button>Add subject</button>
      </form>
    </div>
  );
};

export default Create;
