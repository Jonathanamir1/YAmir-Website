import Image from 'next/image';
import { MagicButton } from './ui/MagicButton';
import { Spotlight } from './ui/SpotlightNew';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { TbBriefcaseFilled } from 'react-icons/tb';

const Hero = () => {
	return (
		<div className=' pt-36 '>
			<div className='h-screen w-full dark:bg-primary bg-secondary  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0'>
				<div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-primary bg-secondary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
			</div>

			<div className='flex justify-left relative  my-20 z-10 md:justify-center lg:justify-start '>
				<div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-2'>
					<h2 className='uppercase tracking-widest text-xs text-center text-secondary max-w-80 drop-shadow-2xl'>
						Turning Ideas into Meaningful Experiences
					</h2>

					<TextGenerateEffect
						className='text-center text-[40px] md:text-5xl lg:text-6xl'
						words="I'm Yonatan, a Fullstack Developer"
					/>
					<p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl'>
						Exploring creative projects across development, design, and beyond
						based in Berlin.
					</p>
					<a href='#about'>
						<MagicButton
							title='Show my work'
							icon={<TbBriefcaseFilled />}
							position='right'
						/>
					</a>
				</div>
			</div>
			{/* Ensure a relative parent for absolute positioning */}
			<div className='relative'>
				{/* Absolutely position the image at the bottom-right */}
				<div className='absolute bottom-0 right-0 opacity-0  lg:opacity-100 '>
					<div 
						style={{
							maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 90%)',
							WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)',
							backdropFilter: 'blur(1px)', // Apply blur effect to the bottom
							WebkitBackdropFilter: 'blur(10px)', // Ensure Safari support
						}}
					>
						<Image
							src='/yamir-portrait.png'
							alt='Your Portrait'
							width={400}
							height={400}
							className='object-cover transition-all duration-1000 ease-in-out origin-bottom animate-scaleUp hover:scale-105 drop'
						/>
					</div>
				</div>


			</div>
			<Spotlight />
		</div>
	);
};

export default Hero;
