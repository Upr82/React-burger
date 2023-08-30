import React from 'react';
import styles from "./burger-constructor.module.css";
import {
  Button, ConstructorElement, CurrencyIcon, DragIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor({ingredients}) {
  const last = ingredients.length - 1;
  const sum = ingredients.reduce((acc, ingredient) => {
    return acc + ingredient.price;
  }, 0);


  return (
    <div className={`${styles.container} pt-25`}>
      <div className={`${styles.drag_container} ml-4 mr-4`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${ingredients[0].name} (верх)`}
          price={ingredients[0].price}
          thumbnail={ingredients[0].image}
        />
      </div>


      <ul className={`${styles.list}`}>
        {ingredients.map((ingredient, index) => {
          if (index !== 0 || index !== last) {
            return (
              <li key={ingredient._id}>
                  <div className={`${styles.drag_container} ml-4 mr-2`}>

                    <ConstructorElement
                      text={`${ingredient.name}`}
                      price={ingredient.price}
                      thumbnail={ingredient.image}
                    />
                    <DragIcon type="primary" />
                </div>
              </li>
            );
          }
          return null;
        })}
      </ul>

      <div className={`${styles.drag_container} ml-4 mr-4`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${ingredients[last].name} (низ)`}
          price={ingredients[last].price}
          thumbnail={ingredients[last].image}
        />
      </div>

      <div className={`${styles.submit_container} mt-10 mr-4`}>
        <div className={`${styles.sum_container} `}>
          <p className="text text_type_digits-medium">
            {sum}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>

    </div>
  );
}

export default BurgerConstructor;
