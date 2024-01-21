import { h } from "preact";
import styles from "./Header.module.css";
import { ArrowRight } from "lucide-preact";
const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
      <div>
        <img
          src="https://reelkart.blob.core.windows.net/reelkart/extra-stuff/Periodically.png"
          alt="Logo"
          className={styles.Logo}
        />
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
