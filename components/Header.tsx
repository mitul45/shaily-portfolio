import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div>Shaily G.</div>
        <div className={styles.headerLinksContainer}>
          <Link href="/">
            <a className={styles.headerLink}>Home</a>
          </Link>
          <Link href="/work">
            <a className={styles.headerLink}>Work</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
