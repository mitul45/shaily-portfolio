import Image from "next/image";
import cx from "classnames";
import styles from "./Image.module.scss";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const CustomImage = (props: {
  src: StaticImageData;
  alt?: string;
  showAlt?: boolean;
  allowZoom?: boolean;
}) => {
  const { src, alt, showAlt = true, allowZoom = true } = props;
  return (
    <>
      {allowZoom ? (
        <Zoom zoomMargin={50}>
          <Image src={src} alt={alt} />
        </Zoom>
      ) : (
        <Image src={src} alt={alt} />
      )}
      {showAlt && <div className={cx("center", styles.alt)}>{alt}</div>}
    </>
  );
};

export default CustomImage;
