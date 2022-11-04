import styles from "./Header.module.css";
import LanguageDropdown from "./LanguageDropdown";
function Header() {
  return (
    <>
      <div className={styles.header}>
        <LanguageDropdown />
      </div>
    </>
  );
}

export default Header;
