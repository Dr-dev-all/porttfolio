'use client';
import Link from 'next/link';
import { PiCodeFill } from 'react-icons/pi';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'About-me', url: 'about', id: 1 },
    { name: 'Contact', url: 'contact', id: 2 },
    { name: 'Blogs', url: 'blog', id: 3 },
    { name: 'Skills', url: 'skills', id: 5 },
    { name: 'Services', url: 'service', id: 6 },
  ];

  const [isOpen, setIsOpen] = useState(true);

  const content = (
    <header className="header-style">
      <section className="section-style">
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className={` transition-all duration-500  hover:scale-[1.1] transform-gpu  border-2  text-white hover:text-black   hover:bg-gradient-to-r from-blue-500 to-red-500 px-2  hover:shadow-lg hover:shadow-gray-500 `}
        >
          <Link href="/" className="namer ">
            <PiCodeFill className="inline text-white text-[30px]" />{' '}
            <span className="inline text-[15px]  font-extrabold">CODE</span>
          </Link>
        </button>

        <nav className="w-[70%] hidden  md:block   ">
          <ul className="flex flex-row justify-around items-center">
            {navItems.map((items) => (
              <li className="" key={items.id}>
                <Link
                  href={`/${items.url}`}
                  className={` hover:border-2   text-white md:hover:bg-black hover:rounded-full px-3 py-2 transition-all duration-150 font-extrabold hover:font-black
                  
                  ${pathname === `/${items.url}` ? 'border-2 rounded-full' : ''}
                  
                  `}
                >
                  {items.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className=" outline-none md:hidden md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <AiOutlineMenu className="text-[2.3rem] text-white font-bold" />
          ) : (
            <AiOutlineClose className="text-[2.3rem] text-white font-bold" />
          )}{' '}
        </button>
      </section>
      <nav
        className={`navbar-style  animate-show_nav  origin-top-left md:hidden bg-no-repeat   bg-center   bg-cover  z-4 "
        ${
          !isOpen
            ? 'block h-screen flex justify-around bg-white text-black font-black items-center'
            : 'hidden'
        }`}
      >
        <div className={`  h-full w-full  flex justify-center items-center`}>
          <ul className={`ul-style md:flex-row block `}>
            {navItems.map((items) => (
              <li className="li-style trans  decoration-8" key={items.id}>
                <button
                  className="w-full"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <Link
                    href={`/${items.url}`}
                    className="w-full font-[1200] uppercase"
                  >
                    {items.name}
                  </Link>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );

  return content;
};

export default Header;
