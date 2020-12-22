import { useState, useEffect } from "react";

export const useLazyImage = ({ imageURL, imageRef, parentRef }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== imageURL) {
      if (IntersectionObserver) {
        const callback = (entries) => {
          entries.forEach((entry) => {
            if (
              !didCancel &&
              (entry.intersectionRatio > 0 || entry.isIntersecting)
            ) {
              setImageSrc(imageURL);
              observer.unobserve(imageRef);
            }
          });
        };
        const options = {
          root: parentRef.current,
          threshold: 0.01,
          rootMargin: "50%"
        };

        observer = new IntersectionObserver(callback, options);
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(imageURL);
      }
    }
    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageURL, imageSrc, imageRef, parentRef]);

  return { imageSrc };
};
