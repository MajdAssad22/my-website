// React
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Style & CSS
import { HiOutlineMenu } from "react-icons/hi";
import { useSpring, animated, easings } from "@react-spring/web";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuAnimation = useSpring({
    transform: menuOpen ? "translateX(0%)" : "translateX(100%)",
    config: {
      duration: 500, // Adjust duration
      easing: easings.easeInOutQuad, // Use a smooth easing curve
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
        <HiOutlineMenu size={40} />
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
          <li>
            <a
              onClick={() => navigateTo("/")}
              className="cursor-pointer text-5xl hover:text-blue-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => navigateTo("/about")}
              className="cursor-pointer text-5xl hover:text-blue-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => navigateTo("/projects")}
              className="cursor-pointer text-5xl hover:text-blue-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => navigateTo("/contact")}
              className="cursor-pointer text-5xl hover:text-blue-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </animated.div>
    </div>
  );
};

export default Menu;
