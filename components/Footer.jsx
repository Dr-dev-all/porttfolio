import Link from 'next/link';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsLinkedin } from 'react-icons/bs';
import { PiArrowLineUpRight } from 'react-icons/pi';

const Footer = () => {
  const data = [
    { name: 'About', url: 'about', id: 1 },
    { name: 'Services', url: 'services', id: 2 },
    { name: 'Skills', url: 'skill', id: 3 },
    { name: 'Contact', url: 'contact', id: 4 },
    { name: 'Blog', url: 'blog', id: 5 },
  ];

  const content = (
    <footer className="footer-style ">
      <div
        className="flex flex-row  
      w-[50%] h-[33%] gap-5 justify-center items-center mx-auto  "
      >
        <Link href="https://www.facebook.com/profile.php?id=61553429101829">
          {' '}
          <BsFacebook className="text-[1.5rem] hover:text-[2rem] transition-all duration-500" />
        </Link>
        <Link href="https://x.com/OnyemeC13604?t=u3D_p6gr9ZP6YbLfRxrusw&s=09">
          <AiFillTwitterCircle className="text-[1.5rem] hover:text-[2rem] transition-all duration-500" />
        </Link>
        <Link href="https://instagram.com/christianonyeme?igshid=MWluOWlvZ25nejFOZg==">
          {' '}
          <BiLogoInstagramAlt className="text-[1.5rem] hover:text-[2rem] transition-all duration-500" />
        </Link>
        <Link href="https://wa.me/message/UAZSTML67HC3B1">
          {' '}
          <IoLogoWhatsapp className="text-[1.5rem]  hover:text-[2rem] transition-all duration-500" />
        </Link>
      </div>
      <hr className="w-[60%] bg-black  my-[1rem] mx-auto " />

      <nav className="text-center w-[50%] mx-auto h-full block ">
        <ul className="grid grid-cols-2 grid-rows-3 gap-2 place-content-center  mx-auto text-center">
          {data.map((dat) => (
            <li key={dat.id}>
              <Link href={dat.url}>
                <p className="font-extrabold hover:text-[1.1rem] hover:underline hover:underline-offset-4 hover:underline-blue-500 transition-all duration-300  w-[28%] mx-auto text-center">
                  {dat.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className="w-full mx-auto  my-[1rem] text-black font-bold">
        {' '}
        &copy; John 2023
      </p>
    </footer>
  );

  return content;
};

export default Footer;
