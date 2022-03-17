import Image from "next/image";
import cx from "classnames";
import styles from "./Image.module.scss";

const ImageWithP = (props: { src: StaticImageData; alt?: string }) => {
  return (
    <p>
      <Image src={props.src} alt={props.alt} />
      <div className={cx("center", styles.alt)}>{props.alt}</div>
    </p>
  );
};

export default ImageWithP;
