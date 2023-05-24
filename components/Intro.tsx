import Link from "next/link";

const Intro = () => {
  return (
    <section className="mx-auto mb-8 flex max-w-5xl flex-col-reverse items-center justify-between p-4 md:gap-12 md:p-8 lg:flex-row">
      <div className="px-4 md:px-0">
        <h1 className="py-2 pt-6 text-center text-2xl font-medium md:text-4xl md:font-semibold">
          LET ME{" "}
          <span className="text-[#1C3782] dark:text-[#74C0FC]">INTRODUCE</span>{" "}
          MYSELF
        </h1>
        <p className="text-base md:text-lg ">
          Hey, I&apos;m Vishnu Sanskrit. I have over 4 years of experience as a
          Full Stack Developer. I fell in love with programming especially with web
          development after my graduation.
          <br />
          <br />I am fluent in
          <em>
            <strong className="text-[#1C3782] dark:text-[#74C0FC]">
              {" "}
              React, Next.js & TypeScript.{" "}
            </strong>
          </em>
          <br />
          <br />
          <span>
            Check out my{" "}
            <Link
              className="hove:text-[#1C3782] transition-colors duration-500 ease-out dark:hover:text-[#F9C34D] "
              href="https://github.com/vishnuSanskrit/digital-resume/"
              aria-label="Vishnu Sanskrit resume website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>{" "}
            for complete detail of my skills.
          </span>
          <br />
          <br />
          My field of interest is to build full-stack web applications. And also
          in areas related to modern web technologies like &nbsp;
          <i>
            <b className="text-[#1C3782] dark:text-[#74C0FC]">Next.js. </b>
          </i>
        </p>
      </div>
    </section>
  );
};

export default Intro;
