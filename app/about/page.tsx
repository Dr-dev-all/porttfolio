'use client';
import { FiArrowUpRight } from 'react-icons/fi';
// import type { Metadata } from 'next';
import { BsArrowDownSquareFill } from 'react-icons/bs';
import '../globals.css';
import { motion } from 'framer-motion';

// export const metadata: Metadata = {
//   title: "Dr-Web's about page ",
//   description: "Dr-Web's portfolio about page ",
// };

export default function About() {
  const content = (
    <main
      className="main-style  bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: 'url(../lapy.jpg)' }}
    >
      <section className="text-center bg-black min-h-screen w-full flex flex-col justify-center items-center opacity-90 ">
        <motion.h1
          initial={{ y: -8 }}
          animate={{ y: 0 }}
          transition={{ duration: 2 }}
          className="font-extrabold mx-auto py-[1rem]"
        >
          ABOUT ME{' '}
        </motion.h1>
        <article className=" w-[80%]  md:w-[60%] mx-auto leading-[1.5rem] text-center">
          <motion.p
            initial={{ y: 9 }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}
          >
            👋 Hello, I'm Dr-web, an experienced software developer specializing
            in web, mobile, and desktop application development. With a passion
            for crafting efficient and user-friendly solutions, I thrive on
            creating high-quality software that meets the needs of businesses
            and individuals alike.
          </motion.p>
          <div className="w-full">
            <BsArrowDownSquareFill
              className="font-extrabold my-8  mx-auto animate-bounce"
              style={{ fontSize: '2rem' }}
            />
          </div>

          <h1>
            <motion.button
              initial={{ y: 9 }}
              animate={{ y: 0 }}
              whileHover={{
                scale: 1.1,
                borderRadius: '2rem',
              }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className=" p-2    bg-gradient-to-l font-black  hover:text-black hover:shadow-md hover:shadow-blue-500 from-green-500 to-gray-500"
            >
              Let's Connect Today{' '}
              <FiArrowUpRight className="inline font-extrabold" />
            </motion.button>
          </h1>
        </article>
      </section>
    </main>
  );
  return content;
}
