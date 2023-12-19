type Props = {
	id: number;
  title: string;
	discription: string;
	tags?: string[];
	img: string;
};

const Card = ({id, title, discription, img, tags}: Props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
			<img className="w-full aspect-video overflow-hidden object-cover" src={img} alt={title}/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{id}. {title}</div>
				<p className="text-gray-700 text-base overflow-ellipsis whitespace-nowrap overflow-hidden">
					{discription}
				</p>
			</div>
		</div>
	);
}

export default Card