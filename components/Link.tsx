import styles from "./Link.module.scss";

const Link = (props: { href: string; title: string }) => {
  return (
    <a
      className={styles.link}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.title}
    </a>
  );
};

export default Link;
