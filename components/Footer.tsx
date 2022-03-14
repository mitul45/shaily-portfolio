import styles from "../styles/Footer.module.scss";

const Header = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <section>
        <div className={styles.title}>Contat details</div>
        <a className={styles.item} href="mailto:shailymgandhi@gmail.com">
          shailymgandhi@gmail.com
        </a>
        <div className={styles.item}>Amsterdam, NL</div>
      </section>
      <section>
        <div className={styles.title}>Follow</div>
        <a
          className={styles.item}
          href="https://www.linkedin.com/in/shaily-gandhi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className={styles.item}
          href="https://medium.com/@shailymgandhi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Medium
        </a>
      </section>
    </div>
  </footer>
);

export default Header;
