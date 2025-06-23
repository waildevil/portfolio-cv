import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-lg font-bold" style={{ marginLeft: '100px' }}>Portfolio</Link>
      <div className="space-x-4 text-sm sm:text-base md:text-lg font-bold" style={{ marginRight: '100px' }}>
        <Link to="/" className="mr-2 ">Home</Link>
        <Link to="/about" style={{ marginRight: '10px' }}>About me</Link>
        <Link to="/education" style={{ marginRight: '10px' }}>Education</Link>
        <Link to="/projects" style={{ marginRight: '10px' }}>Projects</Link>
        <Link to="/experience" style={{ marginRight: '15px' }}>Professional Experience</Link>
      </div>
    </nav>
  );
}
