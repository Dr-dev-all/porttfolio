'use client';
import { motion } from 'framer-motion';
// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Service',
//   description: "Dr-Web's Services",
// };

export default function Service() {
  const content = (
    <main
      className="main-style justify-center bg-center bg-no-repeat bg-cover items-center "
      style={{ backgroundImage: 'url(../service.jpg)' }}
    >
      <section className=" opacity-80 w-screen h-screen bg-gradient-to-r flex justify-center items-center from-black via-black to-white">
        <div className="flex flex-col text-white justify-center items-center  h-full w-full">
          <motion.h1
            initial={{ y: -5 }}
            whileInView={{ y: -9 }}
            animate={{ y: 0 }}
            transition={{
              duration: 4,
              ease: 'easeOut',
              type: 'spring',
            }}
            className="underline  mb-[1rem]"
            style={{ fontSize: '2rem' }}
          >
            Dr-Web's Services
          </motion.h1>
          <motion.ul
            initial={{ y: 5 }}
            whileInView={{ y: 14 }}
            whileHover={{ scale: 1.02 }}
            animate={{ y: 0 }}
            transition={{
              duration: 4,
              ease: 'easeOut',
              type: 'spring',
            }}
            className="leading-[2rem]"
            style={{ listStyleType: 'disc', fontSize: '1.3rem' }}
          >
            <li>Web application development </li>
            <li>Mobile application development</li>
            <li>Desktop application development</li>
            <li>Blockain</li>
            <li>Cybersecurity</li>
            <li>UI/UX Design</li>
            <li>Linux administration</li>
          </motion.ul>
        </div>
      </section>
    </main>
  );

  return content;
}
