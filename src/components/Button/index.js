import { h } from "preact";
import styles from "./Button.module.css";
const Button = ({ onClick }) => {
  return (
    <div className={styles.ButtonContainer}>
      <button onClick={onClick} className={styles.customButton}>
        Get Answer
      </button>
    </div>
  );
};

export default Button;
