import React from "react";

import { workExperience } from "@/data";
import Image from "next/image";
import { Button } from "./ui/MovingBorder";
// import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-10 w-full" id="experience">
      <h1 className="heading justify-center md:max-w-full text-center text-4xl md:text-6xl font-klemer font-bold">
        My
        <span className="text-highlight"> Work Experience</span>
      </h1>
      
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map(({id, thumbnail, title, desc}) => (
          <Button 
          id={id} 
          key={id} 
          borderRadius="1.75rem" 
          className="flex-1 text-secondary border-neutral-200 dark:border-slate-800"
          duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
            <Image src={thumbnail} alt={thumbnail} height={20} width={20} className="lg:w-32 md:w-20 w-16" />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {title}
                </h1>
                <p className="text-start text-secondary mt-3 font-semibold">{desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;