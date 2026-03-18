/** @format */

interface ISectionHead {
	title: string;
	description: string;
}

function SectionHead({ title, description }: ISectionHead) {
	return (
		<div className="flex flex-col items-center gap-4">
			<h1 className="text-primary text-4xl text-center font-bold">{title}</h1>
			<p className="text-gray text-xl w-96 font-bold text-center">
				{description}
			</p>
		</div>
	);
}

export default SectionHead;
