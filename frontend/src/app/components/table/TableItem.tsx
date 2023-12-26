type props = {
  title: string;
  discription?: string | JSX.Element;
  isTail?: boolean;
};

const TableItem = ({ title, discription, isTail }: props) => {
  if (isTail === undefined || isTail === false) {
    return (
      <tr className="bg-white border-b">
        <th
          scope="row"
          className="px-4 py-3 font-medium whitespace-nowrap dark:text-white"
        >
          {title}
        </th>
        <td className="px-4 py-3 text-gray-900">{discription}</td>
      </tr>
    );
  } else {
    return (
      <tr className="bg-white">
        <th
          scope="row"
          className="px-4 py-3 font-medium whitespace-nowrap dark:text-white"
        >
          {title}
        </th>
        <td className="px-4 py-3 text-gray-900">{discription}</td>
      </tr>
    );
  }
};

export default TableItem;
