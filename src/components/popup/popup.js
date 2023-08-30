import React from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./popup.module.css";

function Popup({
  children,
  handleClose,
}) {
  return (
    // <section className={`${styles.popup} ${isOpen && styles.popup_opened}`}>
    <section className={`${styles.popup}`}>
      <div className={`${styles.popup_container} border`}>
        <button
          className={`${styles.close_button}`}
          onClick={handleClose}
        >
          <CloseIcon type="primary" />
        </button>

        {children}
      </div>
    </section>
  );
}

export default Popup;
