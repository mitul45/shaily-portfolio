import Link from "next/link";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div>Shaily G.</div>
        <div className={styles.links}>
          <Link href="/">
            <a className={styles.link}>Home</a>
          </Link>
          <Link href="/work">
            <a className={styles.link}>Work</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
