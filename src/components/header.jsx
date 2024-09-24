// React
import React from 'react';

// Style & CSS
import Logo from './logo';
import { HiOutlineMenu } from 'react-icons/hi';

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between align-middle w-full p-5 text-text-0 absolute top-0 left-0">
      <Logo width={65} color={'#E6E6E6'} />
      <HiOutlineMenu size={40} />
    </header>
  );
};

export default Header;
