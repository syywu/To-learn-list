const Create = () => {
  return (
    <div className="create">
      <h2>Add a new subject</h2>
      <form>
        <label>New Subject</label>
        <input type="text" required />
        <button>Add subject</button>
      </form>
    </div>
  );
};

export default Create;
