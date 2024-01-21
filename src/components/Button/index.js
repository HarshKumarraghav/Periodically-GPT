import { h } from "preact";
import styles from "./Button.module.css";
const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.customButton}>
      Get Answer
    </button>
  );
};

export default Button;
