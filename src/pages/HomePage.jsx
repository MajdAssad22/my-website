// React
import React, { useEffect, useState } from "react";

// Components
import Button from "../components/button";
import TypeingTextEffect from "../components/TypingTextEffect/TypingTextEffect";

// Style & CSS
import { CgScrollV } from "react-icons/cg";

const HomePage = () => {
  const subtitles = [
    "Software Engineer",
    "Web Desinger",
    "Game Developer",
    "Photographer",
  ];
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitleIndex(
        (prevIndex) => (prevIndex + 1) % subtitles.length
      );
    }, 3000); // Change subtitle every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [subtitles.length]);

  return (
    <div className="text-text-0">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-center relative">
        <div className="flex md:flex-row justify-evenly items-center gap-5  p-10">
          {/* Title */}
          <div>
            <h1 className="text-7xl">
              Hello There
              <br />
              I'm Majd
            </h1>
            <h2 className="text-3xl pt-5 font-sansation font-bold text-text-100">
              I'm a{" "}
              <span className="text-primary-0">
                <TypeingTextEffect
                  text={subtitles[currentSubtitleIndex]}
                  typingSpeed={60}
                ></TypeingTextEffect>
              </span>
            </h2>
          </div>
          {/* Image */}
          <div className="w-52 h-52 bg-blue-50"></div>
        </div>
        <CgScrollV
          className="text-text-100 absolute bottom-10 left-1/2 animate-bounce"
          size={35}
        />
      </div>
      {/* About & work Section */}
      <div className="min-h-screen bg-background-200 flex flex-col pt-24 px-16">
        <div>
          <h3 className="text-4xl font-sansation font-light text-text-100">
            About
          </h3>
          <p className="">Hey my name is</p>
        </div>
        <div>
          <h3 className="text-4xl font-sansation font-light text-text-100">
            Recent Work
          </h3>
          <ul></ul>
          <Button>test</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
