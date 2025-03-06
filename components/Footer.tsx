import Image from "next/image"
import Link from "next/link"
import { MagicButton } from "./ui/MagicButton"
import { FaLocationArrow } from "react-icons/fa6"
import { socialMedia } from "@/data"

const Footer = () => {
  return (
    <footer id='contact' className="w-full pt-10 pb-10">
      <div className="flex flex-col items-center">
      <h1 className="heading justify-center md:max-w-full text-center text-4xl md:text-6xl font-klemer font-bold">
        Thank you for checking out
        <span className="text-highlight"> my portfolio</span>
      </h1>
      <p className="text-secondary md:mt-10 my-5 text-center">Reach out to me today! and let&apos;s figure out how we can work together</p>
      <Link href='mailto:jonathanamir1@gmail.com'>
      <MagicButton title="Lets get in touch" icon={<FaLocationArrow />} position="right" />
      </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2025 Yonatan Amir</p>

        <div className="flex items-center md:gap-3 lg:gap-6 gap-4 mt-3">
          {socialMedia.map(({id, img, link}) => (
            <Link key={id} href={link} target="_blank">
              <div key={id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-shadeHigh rounded-lg border border-secondary">
                <Image
                src={img}
                alt="Social media"
                width={20}
                height={20}
                />
              </div></Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer