import { useState, useEffect } from "react";

export const useLazyImage = ({ imageURL, imageRef, parentRef }) => {
  const [imageSrc, setImageSrc] = useState("#");
  // const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== imageURL) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(imageURL);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            root: parentRef.current,
            threshold: 0.01,
            rootMargin: "50%"
          }
        );
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(imageURL);
      }
    }
    return () => {
      didCancel = true;
      // on component cleanup, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageURL, imageSrc, imageRef, parentRef]);

  return { imageSrc };
};
