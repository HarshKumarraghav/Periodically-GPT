import { h } from "preact";
import styles from "./Seprator.module.css";
const Seprator = () => {
  return (
    <div className={styles.customDivider}>
      <div className={styles.customAbsolute} aria-hidden="true">
        <div className={styles.customBorderT}></div>
      </div>
      <div className={styles.customRelative}>
        <span className={styles.customBg}>Periodically GPT Response</span>
      </div>
    </div>
  );
};

export default Seprator;
