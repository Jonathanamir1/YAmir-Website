"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3dPin";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="pt-5" id="projects">
      <h1 className="heading justify-center md:max-w-full text-center text-4xl md:text-6xl font-klemer font-bold">
        A small selection of{" "}
        <span className="text-highlight">recent projects</span>
      </h1>
      
      
      <div className="flex flex-wrap items-center justify-center gap-x-32 gap-y-4 ">
        {projects.map(({id, img, title, des, iconLists, link}) => (
          <div
            className="sm:h-[41rem] lg:min-h-[38rem]  md:h-[36rem] h-[28rem] flex items-center justify-center w-[80vw] sm:w-[570px]"
            key={id}
          >
            <PinContainer
              title={link}
              href={link}
            >
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] lg:h-[30vh] mb-10">
                
                <div
                  className="relative w-full h-full overflow-hidden rounded-3xl"
                  // style={{ backgroundColor: "#3e4140" }}
                >

                  
                  {/* <Image src="/bg.png" alt="bgimg" className="rounded-full" fill /> */}
                </div>
                  <Image
                      src={img}
                      alt="cover"
                      className="z-10 absolute bottom-0 rounded-3xl p-4"
                      fill
                    />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#f6f4eb",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-primary lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="icon5" className="p-2" fill />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-highlight">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#f9d8c2" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;