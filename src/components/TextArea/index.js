import { h } from "preact";
import styles from "./TextArea.module.css";
const TextArea = ({ onChange }) => {
  return (
    <div>
      <div className={styles.textAreaContainer}>
        <label className={styles.customLabel}>Ask Periodically GPT</label>
        <textarea
          rows="4"
          name="comment"
          placeholder="Text goes here..."
          className={styles.customTextarea}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextArea;
