'use client';
// import type { Metadata } from 'next';
import Link from 'next/link';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { motion } from 'framer-motion';

// export const metadata: Metadata = {
//   title: 'Contact',
//   description: "Dr-Web's contact page",
// };

export default function Contact() {
  const content = (
    <main className="main-style text-center justify-center items-center ">
      <div
        className="text-left h-[13rem] flex flex-col justify-evenly items-center h-screen w-full bg-no-repeat bg-center  bg-cover "
        style={{ backgroundImage: "url('../phone.jpg')" }}
      >
        <div className="bg-gradient-to-r from-black from-50% to-white  opacity-80 w-full h-full flex justify-center items-center flex-col">
          <motion.h1
            initial={{ y: -5 }}
            whileInView={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{
              duration: 4,
              ease: 'easeOut',
              type: 'spring',
            }}
            className=" my-[1rem] underline"
            style={{ fontSize: '1.3rem' }}
          >
            Contact Dr-Web today:
          </motion.h1>
          <motion.ol
            initial={{ y: 5 }}
            whileInView={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{
              duration: 4,
              ease: 'easeOut',
              type: 'spring',
            }}
            className="grid grid-cols-1 gap-4 "
            style={{ fontSize: '1.2rem' }}
          >
            <li>
              {' '}
              <BiLogoInstagramAlt className="text-[1.4rem] inline" /> instagram:{' '}
              <Link href="https://instagram.com/christianonyeme?igshid=MWluOWlvZ25nejFOZg==">
                intagram address
              </Link>
            </li>
            <li>
              {' '}
              <IoLogoWhatsapp className="text-[1.4rem] inline" /> whatsapp:{' '}
              <Link
                href="https://wa.me/message/UAZSTML67HC3B1"
                className="inline"
              >
                Phone contact
              </Link>
            </li>
            <li>
              {' '}
              <AiFillTwitterCircle className="text-[1.4rem] inline" /> Twitter:{' '}
              <Link
                href="https://x.com/OnyemeC13604?t=u3D_p6gr9ZP6YbLfRxrusw&s=09"
                className=" italic inline"
              >
                Twitter link
              </Link>
            </li>

            <li>
              {' '}
              <BsFacebook className="text-[1.4rem] inline" /> Facebook:
              <Link href="https://www.facebook.com/profile.php?id=61553429101829">
                {' '}
                Facebook address
              </Link>
            </li>
          </motion.ol>
        </div>
      </div>
    </main>
  );

  return content;
}
