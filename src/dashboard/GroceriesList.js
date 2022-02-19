import { useState, useEffect } from "react";

export default function GroceriesList(recipeList) {
  const [groceries, setGroceries] = useState(null);
  // FUNCTIONS CONTROLING groceriesList
  function countGroceries(list) {
    let newList = list.reduce((acc, item) => {
      let indexNum = acc.findIndex((e) => e.key === item.key);
      if (indexNum >= 0) {
        acc[indexNum].quantity = acc[indexNum].quantity + item.quantity;
        return acc;
      }
      return acc.concat(item);
    }, []);
    return newList;
  }
  function ingredientsExtractor(itemsList) {
    let list = [];
    if (itemsList.length > 0) {
      itemsList.forEach((dish) => {
        dish.ingedients?.forEach((ingre) => {
          let newIngre = {
            food: ingre.food,
            quantity: ingre.quantity + " " + ingre.measure,
            key: ingre.foodId,
          };
          list.push(newIngre);
        });
      });
    }

    return list;
  }
  function sortGroceries(list) {
    return list.sort((a, b) => a.food > b.food);
  }
  ///////
  useEffect(() => {
    let onlyGroceriesList = ingredientsExtractor(recipeList.recipeList);
    let sumGroceries = countGroceries(onlyGroceriesList);
    let sortedGroceries = sortGroceries(sumGroceries);
    setGroceries(sortedGroceries);
  }, [recipeList]);

  return (
    <div>
      <h2>Groceries List</h2>
      {groceries &&
        groceries.map((item) => (
          <div key={item.key}>
            <p>{item.food}</p>
            <p>{item.quantity}</p>
          </div>
        ))}
    </div>
  );
}
