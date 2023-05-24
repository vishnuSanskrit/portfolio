import {
  DiGit,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import {
  SiChakraui,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const TechStack = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center space-y-4">
        <div className="my-6 grid grid-cols-2 gap-5 lg:flex lg:space-x-16">
          {/* <i className="py-4 border-2 border-[#474747] rounded px-14 hover:scale-110 ease-in-out duration-300">
            <SiHtml5 className="w-14 h-14" color="gray" />
          </i> */}
          {/* <i className="lg:hidden py-4 border-2 border-[#474747] rounded px-14 hover:scale-110 ease-in-out duration-300">
            <DiCss3 className="w-14 h-14" color="gray" />
          </i> */}
          <i className="rounded border-2 border-[#474747] py-4 px-14 duration-300 ease-in-out hover:scale-110">
            <DiReact className="h-14 w-14" color="gray" />
          </i>
          <i className="rounded border-2 border-[#474747] py-4 px-14 duration-300 ease-in-out hover:scale-110">
            <TbBrandNextjs className="h-14 w-14" color="gray" />
          </i>

          <i className="rounded border-2 border-[#474747] py-4 px-14 duration-300 ease-in-out hover:scale-110">
            <DiJavascript1 className="h-14 w-14" color="gray" />
          </i>
          <i className="rounded border-2 border-[#474747] py-4 px-14 duration-300 ease-in-out hover:scale-110">
            <SiTypescript className="h-14 w-14" color="gray" />
          </i>
          <i className="rounded border-2 border-[#474747] py-4 px-14 duration-300 ease-in-out hover:scale-110 lg:hidden">
            <DiNodejs className="h-14 w-14" color="gray" />
          </i>
          <i className="rounded border-2 border-[#474747] py-4 px-14 duration-300 ease-in-out hover:scale-110 lg:hidden">
            <SiExpress className="h-14 w-14" color="gray" />
          </i>
        </div>

        <div className="my-6 grid grid-cols-2 gap-5 lg:flex lg:space-x-16">
          <i className="rounded border-2 border-[#474747] py-4 px-14 duration-300 ease-in-out hover:scale-110">
            <SiTailwindcss className="h-14 w-14" color="gray" />
          </i>
          <i className="rounded border-2 border-[#474747] py-4 px-14 duration-300 ease-in-out hover:scale-110">
            <SiChakraui className="h-14 w-14" color="gray" />
          </i>

          <i className="rounded border-2 border-[#474747] py-4 px-14 duration-300 ease-in-out hover:scale-110">
            <DiMongodb className="h-14 w-14" color="gray" />
          </i>
          <i className="rounded border-2 border-[#474747] py-4 px-14 duration-300 ease-in-out hover:scale-110">
            <DiGit className="h-14 w-14" color="gray" />
          </i>
        </div>
      </section>
    </>
  );
};

export default TechStack;
