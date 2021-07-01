import React, { useEffect, useState } from "react";

type ImageFallbackProps = {
  src: string;
  alt: string;
  fallback: string;
  className: string;
};

function ImageFallback({
  src,
  alt,
  fallback,
  className,
}: ImageFallbackProps): JSX.Element {
  const [targetSrc, setTargetSrc] = useState(src);

  useEffect(() => {
    setTargetSrc(src);
  }, [src]);

  return (
    <img
      src={targetSrc}
      alt={alt}
      onError={() => setTargetSrc(fallback)}
      className={className}
    />
  );
}

export default ImageFallback;
