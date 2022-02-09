import { useState } from "react";
import { useHistory } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const recepie = { title, body, author };
    fetch("http://localhost:8000/recepies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recepie),
    })
      .then((res) => {
        console.log("Added");
        setIsPending(false);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create">
      <h2>Add new recepies</h2>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="title" id="title">
          Title
        </label>
        <input
          type="text"
          required
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">The Recepie</label>
        <textarea
          required
          name="body"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label htmlFor="author">Author</label>
        <select
          name="author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option id="author" value="foodie 1">
            Foodie 1
          </option>
          <option id="author" value="foodie 2">
            Foodie 2
          </option>
        </select>
        {!isPending && <button>Check</button>}
        {isPending && <button disabled>Adding....</button>}
      </form>
    </div>
  );
}
export default Create;
