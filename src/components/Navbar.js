import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
      <Link href='/'>
      <img src="https://e7.pngegg.com/pngimages/276/7/png-clipart-calendar-time-icon-calendar-holidays-text-thumbnail.png" alt="Logo" />
      </Link>
      </div>
      <ul className='options'>
        <li>
        <Link href='/'>Home</Link>
          
        </li>
        <li>
          <Link href='/timer'>Timer</Link>
        </li>
        <li>
        <Link href='/stopwatch'>Stopwatch</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
