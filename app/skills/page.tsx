'use client';
import { motion g} from 'framer-motion';

// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Skills',
//   description: "Dr-Web's Skills",
// };

export default function Skills() {
  const headerVariants = {
    init: { x: -6, scale: 0 },
    anim: { x: 0, scale: 1.1 },
  };

  const otherVariants = {
    init: { x: -9 },
    anim: { x: 0 },
  };

  const content = (
    <main
      className="main-style bg-center bg-no-repeat  text-center bg-cover  "
      style={{ backgroundImage: 'url(../skill.jpg)' }}
    >
      <section className=" h-screen grid bg-gradient-to-r  from-black  via-gray-500 via-50%  to-black  opacity-95  grid-cols-1 md:grid-cols-2  md:place-content-center md:my-auto  ">
        <div className="  w-[70%]  md:w-[40%]  mx-auto">
          <motion.h2
            variants={headerVariants}
            initial="init"
            animate="anim"
            transition={{ duration: 0.5 }}
            className=" underline underline-offset-3 tracking-wide "
            style={{ fontSize: '1.3rem' }}
          >
            Programming languages
          </motion.h2>
          <motion.ul
            variants={otherVariants}
            initial="init"
            animate="anim"
            transition={{ duration: 2 }}
            className="text-left leading-[2rem]"
            style={{ listStyleType: 'disc', fontSize: '1.2rem' }}
          >
            <li>Java</li>
            <li>Javascript</li>
            <li>Python</li>
            <li>C/C++</li>
            <li>Kotlin </li>
            <li>Php</li>
            <li>Go</li>
          </motion.ul>
          <motion.h2
            variants={headerVariants}
            initial="init"
            animate="anim"
            transition={{ duration: 0.5 }}
            className="font-extrabold my-auto underline underline-offset-3"
            style={{ fontSize: '1.3rem' }}
          >
            Markup Languages
          </motion.h2>
          <motion.ul
            variants={otherVariants}
            initial="init"
            animate="anim"
            transition={{ duration: 2 }}
            className="text-left leading-[2rem]"
            style={{ listStyleType: 'disc' }}
          >
            <li>HTML</li>
            <li>CSS</li>
          </motion.ul>
        </div>

        <div className="w-[70%] md:w-[45%]  mx-auto ">
          <motion.h1
            variants={headerVariants}
            initial="init"
            animate="anim"
            transition={{ duration: 0.5 }}
            className="font-black text-center  underline underline-offset-3"
            style={{ fontSize: '1.3rem' }}
          >
            frameworks
          </motion.h1>
          <motion.ul
            variants={otherVariants}
            initial="init"
            animate="anim"
            transition={{ duration: 2 }}
            className="text-left leading-[2rem]"
            style={{ listStyleType: 'disc', fontSize: '1.2rem' }}
          >
            <li>Next.JS</li>
            <li>Laravel</li>
            <li>Vue.JS</li>
            <li>Express.JS</li>
            <li>Flask</li>
            <li>Tailwind css</li>
            <li>
              React.JS (Javascript library considered as framework by it's usage
              )
            </li>
          </motion.ul>
        </div>
      </section>
    </main>
  );

  return content;
}
