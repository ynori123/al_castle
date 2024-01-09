type Props = {
  id: number;
  title: string;
  time: string;
  holiday: string;
  genre: string;
  img: string;
};

const MealCard = ({ id, title, time, holiday, genre, img }: Props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full aspect-video overflow-hidden object-cover"
        src={img}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base overflow-ellipsis whitespace-nowrap overflow-hidden text-">
          営業時間: {time}
          <br />
          定休日: {holiday}
          <br />
          ジャンル: {genre}
        </p>
      </div>
    </div>
  );
};

export default MealCard;
