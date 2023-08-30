import React from "react";
import styles from "./ingredient.module.css"
import {
  Counter
} from "@ya.praktikum/react-developer-burger-ui-components";
import Price from "../price/price";

function Ingredient({data}) {

  return (
    <div className={`${styles.ingredient}`}>
      <Counter count={1} size="default" extraClass="m-1" />
      <img src={data.image} alt={data.name} />
      <Price price={data.price} />
      <p className={`${styles.name} text text_type_main-default`}>{data.name}</p>
    </div>
  );
}

export default Ingredient;
