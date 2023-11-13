import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { MdSecurity } from 'react-icons/md';
import { CgPerformance } from 'react-icons/cg';
import { TbSeo } from 'react-icons/tb';
import { MdScreenShare } from 'react-icons/md';
import { MdScreenRotation } from 'react-icons/md';

export default function Blog() {
  const content = (
    <main className="main-style">
      <section className="h-auto w-screen text-black bg-gradient-to-l from-white text-center to-gray-500">
        <article className="w-[90%] h-auto  my-4 mx-auto">
          <h2 className="underline  font-black w-full text-[1.2rem]">
            {' '}
            <MdSecurity className="inline text-[1.1rem] mr-2" />
            Security
          </h2>
          <div className="w-full">
            <p className="text-center w-full indent-4 ">
              Protecting a website against malfunctions, phishing, cyber crimes,
              or cyber-attacks to avoid data loss of the company or customers is
              called Web Security. Scanning an internet site for vulnerabilities
              or security testing is ever needed to defend against the thefts or
              loss that occurs due to digital hackers.{' '}
            </p>
            <Link
              href="https://star-knowledge.com/blog/what-is-website-security-and-why-it-is-important-for-your-website/#:~:text=Protecting%20a%20website%20against%20malfunctions,occurs%20due%20to%20digital%20hackers."
              className="w-[3rem] bg-gradient-to-r from-[#0B2D69] to-black p-1 rounded-full text-white "
            >
              Read more <FiArrowUpRight className="inline " />
            </Link>
          </div>
        </article>
        <article className="w-[80%] h-auto  my-4  mx-auto">
          <h2 className="underline font-black text-[1.2rem]">
            {' '}
            <CgPerformance className="inline text-[1.1rem] mr-2" /> Perfomance
          </h2>
          <p>
            Web performance is all about making websites fast, including making
            slow processes seem fast. This article provides an introduction into
            why web performance is important to site visitors and for your
            business goals.
          </p>
          <Link
            href="https://developer.mozilla.org/en-US/docs/Learn/Performance/why_web_performance"
            className="w-[3rem] bg-gradient-to-r from-[#0B2D69] to-black p-1 rounded-full text-white "
          >
            Read more <FiArrowUpRight className="inline  " />
          </Link>
        </article>
        <article className="w-[90%] h-auto my-4  mx-auto">
          <h2 className="underline font-black   text-[1.2rem]">
            {' '}
            <TbSeo className="inline text-[1.1rem] mr-2" /> Search Engine
            Optimization
            </h2>
          <div>
            <p>
              This is the process of making a website more visible in search
              results, also termed improving search rankings. Search engines
              crawl the web, following links from page to page, and index the
              content found. When you search, the search engine displays the
              indexed content.
            </p>
            <Link
              href="/seo"
              className="w-[3rem] bg-gradient-to-r from-[#0B2D69] to-black p-1 rounded-full text-white "
            >
              {' '}
              Read more <FiArrowUpRight className="inline " />
            </Link>
          </div>
        </article>

        <article className="w-[80%] h-auto  my-4  mx-auto">
          <h2 className="underline font-black text-[1.2rem]">
            {' '}
            <MdScreenShare className="inline  text-[1.1rem] mr-2" /> Modern UI/UX
            Designs
          </h2>
          <div>
            <p>
              The UI is an acronym for User Interface. In simple words, it is
              the process of improving and enhancing the interactivity and
              presentation of the mobile application or website. It focuses on
              the look and design of the application. Every screen, buttons,
              page and various other visual components that you see at the time
              of using an application is the user interface.
            </p>
            <Link
              href="https://www.rvsmedia.co.uk/articles/importance-of-ui-ux/"
              className="w-[3rem] bg-gradient-to-r from-[#0B2D69] to-black p-1 rounded-full text-white "
            >
              Read More <FiArrowUpRight className="inline  " />
            </Link>
          </div>
        </article>
        <article className="w-[80%] h-auto   my-4  mx-auto">
          <h2 className="underline font-black text-[1.2rem]">
            {' '}
            <MdScreenRotation className="inline text-[1.1rem] mr-2  text-[1.1rem]" />{' '}
            Responsiveness
          </h2>
          <div>
            <p>
              A responsive design makes a single website adjust to any screen
              size. It obviates the need to build and maintain two different
              versions of your site and is as simple to use on mobile devices as
              it is on tablet and desktop.
            </p>
            <Link
              href="https://devrix.com/tutorial/important-responsive-design/"
              className="w-[3rem] bg-gradient-to-r from-[#0B2D69] to-black p-1 rounded-full text-white "
            >
              Read More <FiArrowUpRight className="inline" />
            </Link>
          </div>
        </article>
      </section>
    </main>
  );

  return content;
}
