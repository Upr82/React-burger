import React from "react";
import styles from "./ingredients-menu.module.css";

function IgredientsMenu() {
  const [current, setCurrent] = React.useState('three');


  return (
    <>
      <nav className={`${styles.list} mb-10`}>
          <a
            onClick={() => setCurrent("one")}
            className={current === 'one' ? `${styles.link_active}` : `${styles.link}`}
            href="/#bun"
          >
            <p className="text text_type_main-default mt-4 mb-4">Булки</p>
          </a>
          <a
            onClick={() => setCurrent("two")}
            className={current === 'two' ? `${styles.link_active}` : `${styles.link}`}
            href="/#sauce"
          >
            <p className="text text_type_main-default mt-4 mb-4">Соусы</p>
          </a>
          <a
            onClick={() => setCurrent("three")}
            className={current === 'three' ? `${styles.link_active}` : `${styles.link}`}
            href="/#main"
          >
            <p className="text text_type_main-default mt-4 mb-4">Начинки</p>
          </a>
      </nav>
    </>
  );
}

export default IgredientsMenu;
