type Props = {
  title: string;
  time: string | undefined;
  holiday: string | undefined;
  genre: string | undefined;
  url: string | undefined;
};

const MealCard = ({ title, time, holiday, genre, url }: Props) => {
  const handleTransiton = () => {
    if (url !== undefined) {
      return window.open(url, "_blank");
    }else{
      return alert("URLがありません");
    }
  }
  return (
    <button className="max-w-sm rounded-xl overflow-hidden shadow-lg m-4 w-3/12 hover:shadow-2xl" onClick={handleTransiton}>
      <div className="px-6 py-4 w-full">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base overflow-ellipsis whitespace-nowrap overflow-hidden text-">
          営業時間: {time}
          <br />
          定休日: {holiday}
          <br />
          ジャンル: {genre}
        </p>
      </div>
    </button>
  );
};

export default MealCard;
