import React, { useState } from "react";

type ImageFallbackProps = {
  src: string;
  alt: string;
  fallback: string;
};

function ImageFallback({
  src,
  alt,
  fallback,
}: ImageFallbackProps): JSX.Element {
  const [targetSrc, setTargetSrc] = useState(src);

  return (
    <img>
      {" "}
      src={targetSrc} alt={alt} onError={() => setTargetSrc(fallback)}
    </img>
  );
}

export default ImageFallback;
