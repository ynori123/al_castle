type Props = {
  title: string;
  discription?: string;
};

const Header = ({ title, discription }: Props) => {
  return (
    <header className="header pl-6 pb-10">
      <h1 className="text-4xl font-bold pb-4 pt-8">{title}</h1>
      {discription && <p className="text-sm text-slate-700">{discription}</p>}
    </header>
  );
};

export default Header;
