import styles from "./Header.module.css";
import LogoutButton from "./LogoutButton";
function Header() {
  return (
    <>
      <div className={styles.header}>
        <LogoutButton />
      </div>
    </>
  );
}

export default Header;
