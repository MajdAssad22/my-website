import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const AnimatedImage = ({ src }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [nextSrc, setNextSrc] = useState(null);

  const animation = useSpring({
    opacity: isAnimatingOut ? 0 : 1,
    scale: isAnimatingOut ? 0.9 : 1,
    config: { duration: 100 },
    onRest: () => {
      if (isAnimatingOut && nextSrc) {
        setImageSrc(nextSrc); // Update to the next image
        setIsAnimatingOut(false); // Start fade-in animation
        setNextSrc(null); // Clear the queued src
      }
    },
  });

  useEffect(() => {
    if (src !== imageSrc) {
      // if (!isAnimatingOut) {
      setNextSrc(src); // Set the next src
      setIsAnimatingOut(true); // Start fade-out animation
      // }
    }
  }, [src]);

  return (
    <animated.img
      className="object-cover h-full w-full rounded-md"
      src={imageSrc}
      style={{
        ...animation,
      }}
      alt="Animated"
    />
  );
};

export default AnimatedImage;
