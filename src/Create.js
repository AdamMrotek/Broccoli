import { useState } from "react";
import { useHistory } from "react-router-dom";

function Create() {
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const [formData, setFormData] = useState({
    title: "",
    body: "",
    author: "",
    dishtype: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const recepie = formData;
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

  function handleChange(e) {
    setFormData((prevData) => {
      const { name, value, checked, type } = e.target;
      console.log(type);
      return { ...prevData, [name]: type === "checkbox" ? checked : value };
    });
  }
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
          value={formData.title}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="body">The Recepie</label>
        <textarea
          required
          name="body"
          id="body"
          value={formData.body}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="author">Author</label>
        <select
          name="author"
          id="author"
          value={formData.author}
          onChange={(e) => handleChange(e)}
        >
          <option id="author" value="foodie 1">
            Foodie 1
          </option>
          <option id="author" value="foodie 2">
            Foodie 2
          </option>
        </select>
        <fieldset>
          <legend>Type:</legend>
          <input
            type="radio"
            name="dishType"
            id="breakfast"
            onChange={(e) => handleChange(e)}
            value="breakfast"
            checked={formData.dishType === "breakfast"}
          />
          <label htmlFor="breakfast">Breakfast</label>
          <input
            type="radio"
            name="dishType"
            id="lunch"
            onChange={(e) => handleChange(e)}
            value="lunch"
            checked={formData.dishType === "lunch"}
          />
          <label htmlFor="lunch">Lunch</label>
          <input
            type="radio"
            name="dishType"
            id="dinner"
            onChange={(e) => handleChange(e)}
            value="dinner"
            checked={formData.dishType === "dinner"}
          />
          <label htmlFor="dinner">Dinner</label>
        </fieldset>
        {!isPending && <button>Check</button>}
        {isPending && <button disabled>Adding....</button>}
      </form>
    </div>
  );
}
export default Create;
