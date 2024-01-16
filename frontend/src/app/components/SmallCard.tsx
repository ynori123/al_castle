type Props = {
  id: number;
  title: string;
  tags?: string[];
  discription: string;
  img: string;
};

const SmallCard = ({ id, title, img, discription, tags }: Props) => {
  return (
    <a
      className="rounded overflow-hidden shadow-lg m-4 flex w-full h-32"
      href={`castles/${id}`}
    >
      <img
        className="w-full aspect-video overflow-hidden object-cover w-56"
        src={img}
        alt={title}
      />
      <div className="px-6 py-4 w-2/3">
        <div className="font-bold text-xl mb-2">
          {id}. {title}
        </div>
        <p className="text-gray-700 text-base overflow-ellipsis overflow-hidden">
          {discription}
        </p>
      </div>
    </a>
  );
};

export default SmallCard;
