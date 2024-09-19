// React
import React from 'react';

// Style & CSS
import { useSpring, animated } from '@react-spring/web';

const HomePage = () => {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );

  return (
    // Hero Section
    <div className="flex md:flex-row justify-between items-center p-10">
      {/* Title */}
      <div>
        <h1 className="text-6xl font-black">Hello There, I'm Majd</h1>
        <h4 className="text-2xl font-normal">
          A passionate <span>Software Engineer</span>
        </h4>
      </div>
      {/* Image */}
      <div className="bg-zinc-600 w-96 h-96"></div>
    </div>
  );
};

export default HomePage;
