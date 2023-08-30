import React from "react";
import styles from "./ingredients-container.module.css"
import Ingredient from "../ingredient/ingredient";

function IngredientsContainer({data}) {

  return (
    <div className={`${styles.container} `}>
      <h3
        className={`mt-10 mb-6 text text_type_main-medium`}
        id="bun"
      >Булки</h3>
      <ul className={`${styles.list} pl-4 pr-4`}>
          {data.map(ingredient => {
            if (ingredient.type === "bun") {
              return (
                <li key={ingredient._id}>
                  <Ingredient data={ingredient} />
                </li>
              );
            }
            return null;
          })}
      </ul>

      <h3
        className={`mt-10 mb-6 text text_type_main-medium`}
        id="sauce"
      >Соусы</h3>
      <ul className={`${styles.list} pl-4 pr-4`}>
          {data.map(ingredient => {
            if (ingredient.type === "sauce") {
              return (
                <li key={ingredient._id}>
                  <Ingredient data={ingredient} />
                </li>
              );
            }
            return null;
          })}
      </ul>

      <h3
        className={`mt-10 mb-6 text text_type_main-medium`}
        id="main"
      >Начинки</h3>
      <ul className={`${styles.list} pl-4 pr-4`}>
          {data.map(ingredient => {
            if (ingredient.type === "main") {
              return (
                <li key={ingredient._id}>
                  <Ingredient data={ingredient} />
                </li>
              );
            }
            return null;
          })}
      </ul>
    </div>
  );
}

export default IngredientsContainer;
