import cx from "classnames";
import styles from "./Image.module.scss";

const CustomImage = (props: {
  videoId: string;
  alt?: string;
  showAlt?: boolean;
}) => {
  const { videoId, alt, showAlt = true } = props;
  return (
    <>
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {showAlt && <div className={cx("center", styles.alt)}>{alt}</div>}
    </>
  );
};

export default CustomImage;
