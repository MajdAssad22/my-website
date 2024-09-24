import React from 'react';

const Logo = ({ width, color }) => {
  return (
    <svg
      width={width}
      viewBox="0 0 98 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.3125 45V0.3125H7.65625L24.0625 37.5938L40.1562 0.3125H47.1875V45H42.0312V8.34375L26.1562 45H21.5938L5.46875 8.34375V45H0.3125ZM59.2812 45H53.2812L72.25 0.3125H78.6562L97.7188 45H91.3125L85.5312 30.9375H70.75L72.3438 26.25H83.5938L75.25 6L59.2812 45Z"
        fill={color}
      />
    </svg>
  );
};

export default Logo;
