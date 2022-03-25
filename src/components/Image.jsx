import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Image = ({
  src,
  alt,
  className,
  width,
  height,
  circle,
  ...attrs
}) => {
  const classes = classNames(className, { circle });

  if (!src) src = `https://dummyimage.com/${width}x${height}`;

  return (
    <img
      {...attrs}
      src={src}
      alt={alt}
      className={classes}
      width={width}
      height={height}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  circle: PropTypes.bool,
};

Image.defaultProps = {
  src: "",
  alt: "image name",
  className: "",
  width: 100,
  height: 100,
  circle: false,
};
