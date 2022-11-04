import { useContext } from "react";
import { context } from "../../App";
import styles from "./Language.module.css";

function LanguageDropdown() {
  const { language, setLanguage } = useContext(context);
  return (
    <>
      <select
        className={styles["language-select"]}
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        name="lang"
        id="lang"
      >
        <option className={styles["language-select__option"]} value="en">
          ENGLISH
        </option>
        <option className={styles["language-select__option"]} value="es">
          SPANISH
        </option>
      </select>
    </>
  );
}

export default LanguageDropdown;
