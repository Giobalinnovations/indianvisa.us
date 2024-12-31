'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ bgcolor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
      style={{ zIndex: 50 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange/5 to-primary/5" />
      <nav className="container relative mx-auto">
        <div className="flex items-center justify-between h-20 px-4 md:px-0">
          {/* Logo */}
          <Link href="/" className="relative">
            <Image
              src={
                scrolled
                  ? '/assets/images/india/common/logo.png'
                  : '/assets/images/india/common/logo-white.png'
              }
              width={144}
              height={40}
              alt="logo"
              className="w-36 transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span
                className={`text-sm font-medium transition-all duration-200 hover:text-primary ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Home
              </span>
            </Link>
            <Link href="#">
              <span
                className={`text-sm font-medium transition-all duration-200 hover:text-primary ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Contact Us
              </span>
            </Link>
            <Link href="/visa/step-one">
              <span className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary via-primary to-orange rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5">
                Apply E-VISA
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-gray-800" />
            ) : (
              <FaBars
                className={`w-6 h-6 transition-all duration-300 ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`
          absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 md:hidden
          ${
            isOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-2'
          }
        `}
        >
          <div className="divide-y divide-gray-100">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <div className="px-4 py-3 hover:bg-gradient-to-r hover:from-orange/5 hover:to-primary/5">
                <span className="text-gray-800">Home</span>
              </div>
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)}>
              <div className="px-4 py-3 hover:bg-gradient-to-r hover:from-orange/5 hover:to-primary/5">
                <span className="text-gray-800">Contact Us</span>
              </div>
            </Link>
            <Link href="/visa/step-one" onClick={() => setIsOpen(false)}>
              <div className="px-4 py-3 bg-gradient-to-r from-primary/5 to-orange/5 hover:from-primary/10 hover:to-orange/10">
                <span className="font-semibold text-primary">Apply E-VISA</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {bgcolor && scrolled && (
        <div className="h-px bg-gradient-to-r from-orange/20 via-primary/20 to-orange/20" />
      )}
    </header>
  );
};

export default Header;
