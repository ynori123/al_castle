import Card from "../components/Card";
import Header from "../components/Header";

export default function Castles() {
return (
	<>
		<Header title="城一覧" discription="百名城一覧および，その周辺の観光情報をご紹介します．"/>

			<div className="flex flex-wrap justify-center">

			{
				// 100個のカードを生成
				Array.from(Array(100).keys()).map((i) => {
					return (
						<Card id={i+1} title="大阪城" discription="大阪城です" img="osaka.jpg"/>
					)
				})
			}
			</div>
	</>
	)
}