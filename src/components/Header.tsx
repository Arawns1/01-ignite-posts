import styles from "./Header.module.css";
import igniteLogo from "../assets/igniteLogo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do ignite" />
    </header>
  );
}
