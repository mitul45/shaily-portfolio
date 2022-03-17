import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link href="/" passHref>
          <Image
            src="/logo.svg"
            alt="Shaily Gandhi Logo"
            width={48}
            height={48}
          />
        </Link>
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
