import "./GroceriesList.css";
import { useState, useEffect, useCallback } from "react";

export default function GroceriesList(recipeList) {
  const [groceries, setGroceries] = useState(null);

  // FUNCTIONS CONTROLING groceriesList

  function ingredientsExtractor(itemsList) {
    let list = [];
    if (itemsList.length > 0) {
      itemsList.forEach((dish) => {
        dish.ingedients?.forEach((ingre) => {
          let newIngre = {
            food: ingre.food,
            quantity: ingre.quantity,
            measure: ingre.measure,
            key: ingre.foodId,
            weight: ingre.weight,
          };
          list.push(newIngre);
        });
      });
    }
    return list;
  }

  function sumQuantity(ingedient1, ingedient2) {
    if (
      ingedient1.measure === ingedient2.measure &&
      ingedient1.measure !== "grams"
    ) {
      return ingedient1.quantity + ingedient2.quantity;
    } else {
      return (
        Math.floor(ingedient1.weight) + Math.floor(ingedient2.weight)
      ).toFixed(1);
    }
  }

  const countGroceries = useCallback((list) => {
    let newList = list.reduce((acc, item) => {
      let indexNum = acc.findIndex((e) => e.key === item.key);
      if (indexNum >= 0) {
        let newQuantity = sumQuantity(acc[indexNum], item);
        acc[indexNum].quantity = newQuantity;
        acc[indexNum].measure =
          acc[indexNum].measure === item.measure ? item.measure : "grams";
        acc[indexNum].weight += item.weight;
        return acc;
      }
      return acc.concat(item);
    }, []);

    return newList;
  }, []);
  function cleanMeasurements(measure) {
    if (measure === null) return "just a pinch";
    if (measure === "<unit>") return "Unit";
    return measure;
  }
  function cleanQuantity(quantity) {
    if (quantity === 0) return "";
    return (+quantity).toFixed(1);
  }
  function sortGroceries(list) {
    return list.sort((a, b) => a.food > b.food);
  }
  function cleanUpMeasure(recipes) {
    return recipes.map((recipe) => {
      recipe.measure = cleanMeasurements(recipe.measure);
      recipe.quantity = cleanQuantity(recipe.quantity);
      return recipe;
    });
  }
  function addCheckBoxtoGroceries(list) {
    return list.map((item) => ({ ...item, done: false }));
  }
  function chcekItem(key) {
    let newGroceries = groceries.map((item, i) => {
      if (item.key === key) return { ...item, done: !item.done };
      return { ...item };
    });
    setGroceries(newGroceries);
  }
  ///////
  useEffect(() => {
    let onlyGroceriesList = ingredientsExtractor(recipeList.recipeList);
    let sumGroceries = cleanUpMeasure(countGroceries(onlyGroceriesList));
    // console.log(sumGroceries);
    let sortedGroceries = sortGroceries(sumGroceries);
    let addCheckBox = addCheckBoxtoGroceries(sortedGroceries);
    setGroceries(addCheckBox);
  }, [recipeList, countGroceries]);

  return (
    <div className="groceries__list">
      <h2 className="margin-medium heading-secondary">Groceries List</h2>
      {groceries &&
        groceries.map((item, i) => (
          <div className={`flex ${i % 2 && "groceries--grey"} `} key={item.key}>
            <div className={`groceries__items ${item.done ? "done" : ""}`}>
              <p className="groceries__items__food">{item.food}</p>
              <p className="groceries__items_quantity">
                {item.quantity + "  " + item.measure}
              </p>
            </div>
            <input type="checkbox" onChange={() => chcekItem(item.key)}></input>
          </div>
        ))}
    </div>
  );
}
