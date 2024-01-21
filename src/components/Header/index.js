import { h } from "preact";
import styles from "./Header.module.css";
import { ArrowRight } from "lucide-preact";
const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.LogoContainer}>
        <img
          src="https://reelkart.blob.core.windows.net/reelkart/extra-stuff/Periodically.png"
          alt="Logo"
          className={styles.Logo}
        />
        <h3>Periodically-GPT</h3>
      </div>
      <a
        href="https://periodically.harshraghav.tech"
        target="_blank"
        className={styles.LinkURL}
      >
        <ArrowRight className={styles.ArrowRight} />
      </a>
    </div>
  );
};

export default Header;
