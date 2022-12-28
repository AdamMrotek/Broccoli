import "./DishCard.css";

export default function DishCard({
  recipe,
  addToGroceries,
  removeFromGroceries,
}) {
  return (
    <div className="recipe-card">
      <div className="recipe-card__image-containter">
        <img
          className="recipe-card__image"
          src={recipe.image}
          alt={recipe.lable}
        />
      </div>

      <div className="card-title">
        <h3 className="heading-tertiary">{recipe.lable}</h3>
      </div>
      <div className="ing-list">
        {recipe.ingedients?.slice(0, 4).map((ingre, i) => {
          return (
            <div className="recipe-card__ingredients" key={recipe.key + i}>
              <p className="recipe-card__ingredients-item">{ingre.food}</p>
            </div>
          );
        })}
      </div>

      {addToGroceries && (
        <button
          aria-label="Add to groceries"
          className="recipe-card__button"
          onClick={() => addToGroceries(recipe)}
        >
          +
        </button>
      )}
      {removeFromGroceries && (
        <button
          className="recipe-card__button"
          onClick={() => removeFromGroceries(recipe.key)}
        >
          -
        </button>
      )}
    </div>
  );
}
