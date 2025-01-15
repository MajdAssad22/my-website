// React
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Style & CSS
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useSpring, animated, easings, useTrail } from "@react-spring/web";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const menuItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Projects", url: "/projects" },
    { name: "Contact", url: "/contact" },
  ];

  const trail = useTrail(menuItems.length, {
    config: { mass: 1, tension: 2000, friction: 200 },
    delay: 600,
    opacity: menuOpen ? 1 : 0,
    x: menuOpen ? 0 : 50,
    from: { opacity: 0, x: 50 },
  });
  const menuAnimation = useSpring({
    transform: menuOpen ? "translateX(0%)" : "translateX(100%)",
    config: {
      duration: 800, // Adjust duration
      easing: easings.easeInOutQuart, // Use a smooth easing curve
    },
  });

  // Effect to toggle `overflow-hidden` on the <body>
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  const navigateTo = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div className="z-10">
      {/* Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 right-4 z-50"
      >
        {menuOpen ? <HiOutlineX size={40} /> : <HiOutlineMenu size={40} />}
      </button>

      {/* Full-Screen Menu */}
      <animated.div
        style={{
          ...menuAnimation,
          width: "100vw",
          height: "100vh",
        }}
        className={"fixed inset-0 bg-black flex justify-center items-center"}
      >
        <ul className="text-white text-center space-y-6">
          {trail.map((props, index) => (
            <animated.li key={index} style={props}>
              <a
                onClick={() => navigateTo(menuItems[index].url)}
                className={`cursor-pointer text-5xl hover:text-blue-400`}
              >
                {menuItems[index].name}
              </a>
            </animated.li>
          ))}
        </ul>
      </animated.div>
    </div>
  );
};

export default Menu;
