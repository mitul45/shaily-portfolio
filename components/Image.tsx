import Image from "next/image";
import cx from "classnames";
import styles from "./Image.module.scss";

const CustomImage = (props: {
  src: StaticImageData;
  alt?: string;
  showAlt?: boolean;
}) => {
  const { src, alt, showAlt = true } = props;
  return (
    <>
      <Image src={src} alt={alt} />
      {showAlt && <div className={cx("center", styles.alt)}>{alt}</div>}
    </>
  );
};

export default CustomImage;
