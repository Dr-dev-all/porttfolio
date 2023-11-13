'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PiArrowFatLinesDownLight } from 'react-icons/pi';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiArrowUpRight } from 'react-icons/fi';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const router = useRouter();

  // const animation = useAnimation();

  // inView('.testing', () => {
  //   console.log('fashion is in view');
  // });

  // varaints = {
  //   show: {},
  //   hidden : {}
  // }

  useEffect(() => {
    if (inView) {
      console.log('in view');
    } else {
      console.log('not in view');
    }
  }, [inView]);

  // inView('.boom', () => {
  //   console.log('boom is in view now');
  // });

  const content = (
    <main className=" main-style bg-gradient-to-r from-black to-gray-500">
      <section className="text-white w-screen  my-6  text-center">
        <h1 className="w-[80%] p-3 mx-auto shadow-inner shadow-md shadow-gray-500/50 underline underline-offset-4 font-extrabold animate-pulse">
          Unlock Your Business's Full Potential: Hire the Perfect Programmer
          Today!{' '}
        </h1>
      </section>
      <section className="grid md:grid-cols-2 w-screen ">
        <div className=" flex justify-center items-center  w-screen md:w-[50%] md:mx-auto h-[15rem] my-5">
          <motion.figure
            initial={{ y: 8 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring' }}
            className="  h-[95%]   rounded-[2rem] p-3 w-[80%] md:w-[80%] flex flex-col my-auto   justify-center items-center   relative"
          >
            <svg>
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="300"
                stroke="white"
                stroke-width="0.6"
              />
            </svg>
            <Image
              src="/me.jpg"
              alt="profile image"
              quality={80}
              priority={true}
              height={250}
              width={200}
              style={{ borderRadius: '2rem' }}
            />
          </motion.figure>
          <svg>
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="300"
              stroke="white"
              stroke-width="0.8"
            />
          </svg>
        </div>

        <div
          className=" bg-no-repeat bg-cover md:rounded-full   h-[15rem]  md:h-[12rem] mb-5  mx-auto  p-2 md:p-0  w-[85%] md:my-auto  md:w-[90%] flex justify-center items-center "
          style={{ backgroundImage: `url(../devbg.jpeg)` }}
        >
          <motion.div
            initial={{ y: 5 }}
            animate={{ y: 0 }}
            transition={{
              duration: 4,
            }}
            className=" mx-auto bg-black shadow-2xl shadow-gray-500/50 border-none text-white  text-center font-black h-full w-full p-4 w-full md:rounded-full  mt-4 md:mt-0  opacity-90   flex justify-center items-center  "
          >
            <p className="break-words">
              <span className="inline text-left mx-3">
                <Image
                  src="/code.svg"
                  height={20}
                  width={40}
                  alt="coding logo"
                  priority
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '2rem',
                    color: 'black',
                    display: 'inline',
                  }}
                />
              </span>
              If you are seeking a dedicated and experienced programmer , allow
              me to bring your ideas to life while maintaining the highest level
              of professionalism and attention to detail. Let's collaborate on
              your next project!.
            </p>
          </motion.div>
        </div>
      </section>

      <hr className="w-[20%] bg-white opacity-10 mt-[0.5rem] mx-auto" />

      <svg className="animate-bounce w-6 rounded-full  text-white h-6 my-[2rem] mx-auto bg-transparent">
        <PiArrowFatLinesDownLight className="font-extrabold" />
      </svg>

      <div className="w-screen bg-gradient-to-l from-black to-gray-500 flex justify-center items-center px-7 py-3">
        <BsArrowRight className="animate-ping" />
        <motion.button
          type="button"
          onClick={() => router.push('/contact')}
          initial={{ y: 9 }}
          animate={{ y: 0 }}
          whileHover={{
            scale: 1.1,
            borderRadius: '2rem',
          }}
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className=" p-2    bg-gradient-to-l font-black w-[12rem] mx-auto  hover:text-black hover:shadow-md hover:shadow-blue-500 from-blue-500 to-red-500"
        >
          Let's Connect Today{' '}
          <FiArrowUpRight className="inline font-extrabold" />
        </motion.button>
        <BsArrowLeft className="animate-ping" />
      </div>

      <section className="w-full h-full gap-3 grid grid-cols-1 md:justify-items-center md:grid-cols-2">
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
          className="position-image"
          style={{ backgroundImage: "url('../fashion.jpg')" }}
        >
          <Link href="/contact">
            <div className="group device-style testing ">
              <h1 className=" mx-auto  font-extrabold">FASHION</h1>
              <hr
                className="w-[9rem] 
            lg:group-hover:opacity-100 
            duration-1000 transition-all
            lg:opacity-0
            mx-auto  "
              />
              <p
                ref={ref}
                className=" 
            lg:group-hover:opacity-100 
            duration-1000 transition-all
              lg:mb-[.7rem] lg:w-[55%]
            lg:opacity-0    text-center w-[80%] bg-black mx-auto "
              >
                Allow me to harness my expertise in fashion website design to
                create a sleek and captivating online presence for your brand.
                With careful attention to detail and a deep understanding of the
                fashion industry, I'll work closely with you to bring your
                vision to life.
              </p>
              <hr
                className="
             lg:group-hover:opacity-100 
             duration-1000 transition-all
             lg:opacity-0 
            w-[9rem] mx-auto  "
              />
            </div>
          </Link>
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
          className="position-image"
          style={{ backgroundImage: "url('../finance.jpg')" }}
        >
          <Link href="/contact">
            <div className="group device-style ">
              <h1 className="mx-auto font-extrabold">FINANCE</h1>
              <hr
                className="
            lg:group-hover:opacity-100 lg:opacity-0
            transition-all duration-1000
            w-[9rem] mx-auto  "
              />

              <p
                className=" 
            lg:group-hover:opacity-100 lg:opacity-0
            transition-all duration-1000 lg:w-[55%]   text-center w-[80%] bg-black mx-auto "
              >
                With my expertise in software development and extensive
                experience in finance website development, let me deliver a
                professional and efficient solution tailored to your specific
                needs. Together, we can establish a strong online presence for
                your business, ensuring that your finance website meets the
                highest standards of functionality and design. Let's collaborate
                and make your vision a reality.
              </p>
              <hr
                className="
            lg:group-hover:opacity-100 lg:opacity-0
            transition-all duration-1000
            w-[9rem] mx-auto "
              />
            </div>
          </Link>
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
          className="position-image"
          style={{ backgroundImage: "url('../business.jpg')" }}
        >
          <Link href="/contact">
            <div className=" group device-style">
              <h1 className="mx-auto font-extrabold">BUSINESS</h1>
              <hr
                className=" 
             lg:group-hover:opacity-100 lg:opacity-0
             transition-all duration-1000
            w-[9rem] mx-auto  "
              />

              <p
                className="
             lg:group-hover:opacity-100 lg:opacity-0
             transition-all duration-1000 lg:w-[55%] lg:mb-[.7rem]
            lg:show-style  text-center w-[80%] bg-black mx-auto "
              >
                With a proven track record of driving success and vast
                experience in the industry, I bring a fresh perspective and
                unparalleled skills to drive your business towards success.
              </p>
              <hr
                className="
             lg:group-hover:opacity-100 lg:opacity-0
             transition-all duration-1000
            w-[9rem] mx-auto  "
              />
            </div>
          </Link>
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
          className="position-image"
          style={{ backgroundImage: "url('../health.jpg')" }}
        >
          <Link href="/contact">
            <div className="group device-style ">
              <h1 className="mx-auto  font-extrabold">HEALTH & FITNESS</h1>
              <hr
                className="
             lg:group-hover:opacity-100 lg:opacity-0  transition-all duration-1000 
            w-[9rem] mx-auto  "
              />

              <p
                className=" 
            lg:group-hover:opacity-100 lg:opacity-0
            transition-all duration-1000 lg:w-[55%]   text-center w-[80%] bg-black mx-auto "
              >
                I would be thrilled to assist you in creating a remarkable
                health and fitness website. With my expertise in software
                development and web design, you can rest assured that your
                website will exude professionalism and capture the essence of
                your unique brand. Together, we will craft a visually stunning
                platform that not only showcases your products and services but
                also provides a user-friendly experience for your audience.
              </p>
              <hr
                className="
             lg:group-hover:opacity-100 lg:opacity-0  transition-all duration-1000 
            w-[9rem] mx-auto  "
              />
            </div>
          </Link>
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
          className="position-image"
          style={{ backgroundImage: "url('../parental.jpg')" }}
        >
          <Link href="/contact">
            <div className="group device-style ">
              <h1 className="mx-auto  font-extrabold">PARENTING</h1>
              <hr
                className="
             lg:group-hover:opacity-100 lg:opacity-0  transition-all duration-1000 
            w-[9rem] mx-auto  "
              />

              <p
                className=" 
            lg:group-hover:opacity-100 lg:opacity-0
            transition-all duration-1000 lg:w-[55%]   text-center w-[80%] bg-black mx-auto "
              >
                experience the magic of intuitive designs and seamless
                functionality tailored for parents, let me handle the technical
                intricacies, while you focus on creating engaging content that
                resonates with your target audience. Connect with john today.
              </p>
              <hr
                className="
             lg:group-hover:opacity-100 lg:opacity-0  transition-all duration-1000 
            w-[9rem] mx-auto  "
              />
            </div>
          </Link>
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
          className="position-image"
          style={{ backgroundImage: "url('../dating.jpg')" }}
        >
          <Link href="/contact">
            <div className="group device-style ">
              <h1 className="mx-auto  font-extrabold">
                DATING & RELATIONSHIPS
              </h1>
              <hr
                className="
             lg:group-hover:opacity-100 lg:opacity-0  transition-all duration-1000 
            w-[9rem] mx-auto  "
              />

              <p
                className=" 
            lg:group-hover:opacity-100 lg:opacity-0
            transition-all duration-1000 lg:w-[55%] 
              text-center w-[80%] bg-black mx-auto "
              >
                Whether it's building a user-friendly interface, implementing
                advanced search algorithms, or incorporating intuitive
                matchmaking features, John has got you covered.
              </p>
              <hr
                className="
             lg:group-hover:opacity-100 lg:opacity-0  transition-all duration-1000 
            w-[9rem] mx-auto  "
              />
            </div>
          </Link>
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
          className="position-image"
          style={{ backgroundImage: "url('../food.jpg')" }}
        >
          <Link href="/contact">
            <div className="group device-style ">
              <h1 className="mx-auto  font-extrabold">FOOD & RECIPES</h1>
              <hr
                className="
             lg:group-hover:opacity-100 lg:opacity-0  transition-all duration-1000 
            w-[9rem] mx-auto  "
              />

              <p
                className=" 
            lg:group-hover:opacity-100 lg:opacity-0
            transition-all duration-1000 lg:w-[55%]   text-center w-[80%] bg-black mx-auto "
              >
                Impress your audience with stunning recipe pages, mouthwatering
                food photography, and user-friendly interfaces. From intuitive
                navigation to seamless integration of your recipes, John's
                development skills will elevate your website's functionality and
                optimize user experience through years of experience in creating
                engaging platforms that showcase culinary delights.
              </p>
              <hr
                className="
             lg:group-hover:opacity-100 lg:opacity-0  transition-all duration-1000 
            w-[9rem] mx-auto "
              />
            </div>
          </Link>
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
          className="position-image"
          style={{ backgroundImage: "url('../ecommerce.jpg')" }}
        >
          <Link href="/contact">
            <div className="group device-style ">
              <h1 className="mx-auto  font-extrabold">ECOMMERCE</h1>
              <hr
                className="
            lg:group-hover:opacity-100 lg:opacity-0
             w-[9rem] mx-auto  "
              />

              <p
                className=" 
            lg:group-hover:opacity-100 lg:opacity-0  transition-all duration-1000 
            transition-all duration-1000 
               text-center w-[80%] bg-black mx-auto "
              >
                Boost your sales, unlock growth, and dominate the digital market
                like never before with John's expertise and brilliant
                strategies! Whether you seek guidance in SEO optimization,
                social media integration, or customer acquisition, John's got it
                all covered! Partner with this visionary and secure the success
                of your e-commerce venture.
              </p>
              <hr
                className="
             lg:group-hover:opacity-100 lg:opacity-0  transition-all duration-1000 
            w-[9rem] mx-auto"
              />
            </div>
          </Link>
        </motion.div>
      </section>

      <div className="flex flex-row text-white justify-around my-5 align-center ">
        <hr className="bg-white w-[40px] my-auto" />
        <p className="">many more</p>
        <hr className="bg-white w-[40px] my-auto" />
      </div>
    </main>
  );

  return content;
}
