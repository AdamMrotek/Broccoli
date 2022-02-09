import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch.js";

const RecepieDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    "http://localhost:8000/recepies/" + id
  );
  const history = useHistory();
  function handleDelete() {
    fetch("http://localhost:8000/recepies/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  }
  return (
    <div className="recepie-details">
      <h2>Recepie details {id}</h2>
      {isLoading && <div>Loading Recepie...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default RecepieDetails;
