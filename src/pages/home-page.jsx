// React
import React from 'react';

// Components
import Button from '../components/button';

// Style & CSS
import { useSpring, animated } from '@react-spring/web';
import { CgScrollV } from 'react-icons/cg';

const HomePage = () => {
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
              A <span>Software Engineer</span>
            </h2>
          </div>
          {/* Image */}
          <div className="w-52 h-52 bg-blue-50"></div>
        </div>
        <CgScrollV
          className="text-text-100 absolute bottom-10 left-1/2"
          size={35}
        />
      </div>
      {/* About & work Section */}
      <div className="min-h-screen bg-background-200 pt-24 px-16">
        <h3 className="text-3xl font-sansation font-light text-text-100">
          About
        </h3>
        <p className=""></p>
        <h3 className="text-3xl font-sansation font-light text-text-100">
          Recent Work
        </h3>
        <ul></ul>
        <Button>test</Button>
      </div>
    </div>
  );
};

export default HomePage;
