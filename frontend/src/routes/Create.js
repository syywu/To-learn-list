import { useState } from "react";

const Create = ({ handleSubmit }) => {
  const [subject, setSubject] = useState("");

  function handleClick() {
    setSubject("");
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
        <button onClick={handleClick}>Add subject</button>
      </form>
    </div>
  );
};

export default Create;
