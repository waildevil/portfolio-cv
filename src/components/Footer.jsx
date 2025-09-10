import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 py-6 space-y-4 sm:space-y-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} Wail.</p>
        <div className="flex space-x-6 text-lg">
          <a href="https://github.com/waildevil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/wailhoman" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/waildevil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/wail.homan.5" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook />
          </a>
          <a href="mailto:wail.homanwork@hotmail.com" className="hover:text-gray-400">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
