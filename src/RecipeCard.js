function RecipeCard({ addToGroceries, removeFromGroceries, recipe }) {
  return (
    <div className="recipeCard" id={recipe.key}>
      <img src={recipe.image} alt={recipe.label} />
      <p>{recipe.lable}</p>
      {/* {recipe.ingedients?.map((ingre, i) => {
        return (
          <div className="recipeCard__ingredients" key={recipe.key + i}>
            <p className="recipeCard__ingredients-item">{ingre.text}</p>
          </div>
        );
      })} */}
      {addToGroceries && (
        <button onClick={() => addToGroceries(recipe)}>
          Add to grocerie list
        </button>
      )}
      {removeFromGroceries && (
        <button onClick={() => removeFromGroceries(recipe.key)}>Remove</button>
      )}
    </div>
  );
}
export default RecipeCard;
