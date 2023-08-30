import React from "react";
import styles from "./main.module.css";
import BurgerConstructor from "../constructor/burger-constructor/burger-construcor";
import BurgerIngredients from "../ingredients/burger-ingredients/burger-ingredients";

function Main({data}) {
  return (
    <main className={`${styles.main}`}>
      <BurgerIngredients data={data}/>
      <BurgerConstructor ingredients={data} />
    </main>
  );
}

export default Main;
