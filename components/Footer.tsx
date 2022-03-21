import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles["footer__content"]}>
      <section>
        <div className={styles["footer__title"]}>Contact details</div>
        <a className={styles["footer__item"]} href="mailto:shailymgandhi@gmail.com">
          shailymgandhi@gmail.com
        </a>
        <div className={styles["footer__item"]}>Amsterdam, NL</div>
      </section>
      <section>
        <div className={styles["footer__title"]}>Follow</div>
        <a
          className={styles["footer__item"]}
          href="https://www.linkedin.com/in/shaily-gandhi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className={styles["footer__item"]}
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

export default Footer;
