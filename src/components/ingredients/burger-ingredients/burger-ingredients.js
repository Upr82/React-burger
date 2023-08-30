import React from "react";
import styles from "./burger-ingredients.module.css";
import IngredientsMenu from "../ingredients-menu/ingredients-menu";
import IngredientsContainer from "../ingredients-container/ingredients-container";

function BurgerIngredients({data}) {
  return (
    <div className={`${styles.container}`}>
      <h2 className={`${styles.title} mt-10 mb-5 text text_type_main-large`}>
        Соберите бургер
      </h2>
      <IngredientsMenu />
      <IngredientsContainer data={data} />
    </div>
  );
}

export default BurgerIngredients;
