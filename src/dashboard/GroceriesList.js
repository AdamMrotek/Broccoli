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
  function addCheckBoxtoGroceries(list) {
    return list.map((item) => ({ ...item, done: false }));
  }
  function chcekItem(key) {
    let newGroceries = groceries.map((item, i) => {
      console.log("item number", i, "returns", item.key === key);
      if (item.key === key) return { ...item, done: !item.done };
      return { ...item };
    });
    console.log(newGroceries);
    setGroceries(newGroceries);
    console.log(groceries);
    // setGroceries();
  }
  ///////
  useEffect(() => {
    let onlyGroceriesList = ingredientsExtractor(recipeList.recipeList);
    let sumGroceries = countGroceries(onlyGroceriesList);
    let sortedGroceries = sortGroceries(sumGroceries);
    let addCheckBox = addCheckBoxtoGroceries(sortedGroceries);
    console.log("reruning false done");
    setGroceries(addCheckBox);
  }, [recipeList]);

  return (
    <div className="groceries__list">
      <h2 className="margin-medium heading-secondary">Groceries List</h2>
      {groceries &&
        groceries.map((item, i) => (
          <div className={`flex ${i % 2 && "groceries--grey"} `}>
            <div
              className={`groceries__items ${item.done ? "done" : ""}`}
              key={item.key}
            >
              <p className="groceries__items__food">{item.food}</p>
              <p className="groceries__items_quantity">{item.quantity}</p>
            </div>
            <input type="checkbox" onChange={() => chcekItem(item.key)}></input>
          </div>
        ))}
    </div>
  );
}
