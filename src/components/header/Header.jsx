import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.leftText}>Where in the world?</p>
      <div className={styles.headerRight}>
        <FontAwesomeIcon icon={faMoon} />
        <p className={styles.rightText}>Dark Mode</p>
      </div>
    </header>
  );
};

export default Header;
