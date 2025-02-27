export const MagicButton = ({
	title,
	icon,
	position,
	handleClick,
	otherClasses,
}: {
	title: string;
	icon?: React.ReactNode;
	position: string;
	handleClick?: void;
	otherClasses?: string;
}) => {
	return (
		<div className="pb-10">
			<button className='flex items-center px-4 py-2 gap-2 mt-4 -mb-4 text-secondary backdrop-blur-sm border border-primary rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-secondary/[0.1] text-sm transition duration-200'>
				{position === 'left' && icon}
				{title}
				{position === 'right' && icon}
			</button>
		</div>
	);
};
