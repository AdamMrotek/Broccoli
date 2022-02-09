function recepieList({ recepies, name }) {
  return (
    <div className="recepie-list">
      <p>{name}</p>

      {recepies.map((recepie) => {
        return (
          <div className="blog-preview" key={recepie.id}>
            <h2>{recepie.title}</h2>
            <p>{recepie.body}</p>
            <p>{recepie.author}</p>
            <button onClick={() => {}}>Delete this recepie</button>
          </div>
        );
      })}
    </div>
  );
}

export default recepieList;
