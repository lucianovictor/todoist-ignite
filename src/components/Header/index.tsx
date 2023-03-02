import styles from "./styles.module.scss";

import logo from "../../assets/Logo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo Todoist" />
    </header>
  );
}