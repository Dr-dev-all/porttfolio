'use client';
import type { Metadata } from 'next';
import { AiOutlineMinus } from 'react-icons/ai';
import '../globals.css';
import { motion } from 'framer-motion';

// const metadata: Metadata = {
//   title: 'Blog',
//   description: "Web's Blog page",
// };

export default function Blog() {
  const content = (
    <main
      className=" main-style text-white bg-cover text-center  bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(../../weird.jpg)' }}
    >
      <section className="bg-black opacity-90  h-full  w-full text-center p-[1rem] mx-auto">
        <motion.h1
          initial={{ y: 9 }}
          whileInView={{ y: -4 }}
          animate={{ y: 0 }}
          transition={{
            type: 'spring',
            duration: 4,
            ease: 'easOut',
          }}
          className="uppercase "
          style={{ fontSize: '1.4rem' }}
        >
          Why it is crucial to have an SEO-friendly website
        </motion.h1>
        <motion.h3
          initial={{ y: -5 }}
          whileInView={{ y: -7 }}
          animate={{ y: 0 }}
          transition={{
            type: 'spring',
            duration: 4,
            ease: 'easeOut',
          }}
          className="underline font-bolder my-[1rem] my-[2rem]"
          style={{ fontSize: '1.5rem' }}
        >
          Applying SEO strategies when starting a website from scratch will have
          such positive effects as:{' '}
        </motion.h3>
        <div className="  grid md:grid-cols-2 gap-5 mx-auto">
          <motion.div
            initial={{ y: 5 }}
            whileInView={{ y: 14 }}
            whileHover={{ scale: 1.02 }}
            animate={{ y: 0 }}
            transition={{
              type: 'spring',
              duration: 4,
              ease: 'easeOut',
            }}
            className=" h-full w-full mx-auto border-2 rounded-t-lg md:rounded-full p-5 shadow-2xl shadow-gray-500/50"
          >
            <h2
              className="  uppercase flex justify-around align-center my-4"
              style={{ fontSize: '1.2rem', fontWeight: 'bolder' }}
            >
              {' '}
              <AiOutlineMinus className="text-[1.5rem] " /> Reduced costs{' '}
              <AiOutlineMinus className="text-[1.5rem] " />
            </h2>
            <p style={{ fontSize: '1.2rem' }}>
              SEO is a cost-effective way to generate leads and sales. It can
              help save you money in the long run by reducing your need for paid
              ads or other marketing tactics.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 5 }}
            whileInView={{ y: 14 }}
            whileHover={{ scale: 1.02 }}
            animate={{ y: 0 }}
            transition={{
              type: 'spring',
              duration: 4,
              ease: 'easeOut',
            }}
            className=" mx-auto border-2  rounded-t-lg   md:rounded-full p-5 shadow-2xl shadow-gray-500/50"
          >
            <h2
              className="  uppercase rounded-full uppercase flex justify-around my-4 align-center"
              style={{ fontSize: '1.2rem', fontWeight: 'bolder' }}
            >
              <AiOutlineMinus className="text-[1.5rem] " />
              Increased credibility
              <AiOutlineMinus className="text-[1.5rem] " />
            </h2>
            <p style={{ fontSize: '1.2rem' }}>
              Increased credibility an SEO-friendly website will help build the
              brand's credibility, as users typically see the top search result
              as the authority in the niche.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 5 }}
            whileInView={{ y: 14 }}
            whileHover={{ scale: 1.02 }}
            animate={{ y: 0 }}
            transition={{
              type: 'spring',
              duration: 4,
              ease: 'easeOut',
            }}
            className=" mx-auto border-2  rounded-t-lg  md:rounded-full p-6 shadow-2xl shadow-gray-500/50"
          >
            <h2
              className=" font-bolder uppercase flex justify-around my-4 align-center"
              style={{ fontSize: '1.2rem', fontWeight: 'bolder' }}
            >
              <AiOutlineMinus className="text-[1.5rem] " />
              Improved user experience
              <AiOutlineMinus className="text-[1.5rem] " />
            </h2>
            <p style={{ fontSize: '1.2rem' }}>
              Google and other search engines see user experience as one of the
              most important ranking factors. As a result, an SEO-friendly web
              design improves overall user satisfaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 5 }}
            whileInView={{ y: 14 }}
            whileHover={{ scale: 1.02 }}
            animate={{ y: 0 }}
            transition={{
              duration: 4,
              ease: 'easeOut',
              type: 'spring',
            }}
            className=" mx-auto border-2  rounded-t-lg  md:rounded-full p-5 shadow-2xl shadow-gray-500/50"
          >
            <h2
              className=" font-bolder uppercase flex justify-around my-4 align-center"
              style={{ fontSize: '1.2rem', fontWeight: 'bolder' }}
            >
              <AiOutlineMinus className="text-[1.5rem] " />
              Increased traffic
              <AiOutlineMinus className="text-[1.5rem] " />
            </h2>
            <p style={{ fontSize: '1.2rem' }}>
              SEO-friendly websites have the potential to rank higher in search
              engine results and drive more traffic, as the top result typically
              gets around 32% of all clicks.
            </p>
          </motion.div>
          <div className=" mx-auto"></div>
        </div>
        <hr className="w-[50%] mx-auto my-[2rem]" />
        <p className="w-[80%] mx-auto" style={{ fontSize: '1.2rem' }}>
          Neglecting SEO means you're missing out on the potential to make your
          website a more valuable asset. For this reason, we recommend
          prioritizing search engine optimization for your online marketing
          strategy.
        </p>
      </section>
    </main>
  );
  return content;
}
