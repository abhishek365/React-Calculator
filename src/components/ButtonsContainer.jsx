import React from "react";
import styles from "./ButtonsContainer.module.css";

function ButtonsContainer({input, setInput}) {
  const btns = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];


  return (
    <div className={styles.buttonsContainer}>
      {btns.map((btn) => (
        <button className={styles.button} onClick={() => setInput(btn)}>{btn}</button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
