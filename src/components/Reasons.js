import React from "react";
import PrimTitle from "./PrimTitle";
import img1 from "../img/reasons/1.png";
import img2 from "../img/reasons/2.png";
import img3 from "../img/reasons/3.png";
import img4 from "../img/reasons/4.png";
import img5 from "../img/reasons/5.png";
import img6 from "../img/reasons/6.png";
import img7 from "../img/reasons/7.png";
import img8 from "../img/reasons/8.png";
import img9 from "../img/reasons/9.png";
import img10 from "../img/reasons/10.png";

const ReasonsCard = (props) => {
	return (
		<div className="reasons-wrap__card">
			<div className="reasons-wrap__img">
				<img src={props.img} alt="reasons" />
			</div>
			<div className="reasons-wrap__txt">
				<p>
					{props.txt}
				</p>
			</div>
		</div>
	);
}

const ReasonsWrap = () => {
	return (
		<div className="reasons-wrap">
			<ReasonsCard img={img1} txt="100% ручная работа" />
			<ReasonsCard img={img2} txt="100% свежие ингредиенты" />
			<ReasonsCard img={img3} txt="Самые низкие цены на рынке! (Нет ресторанной наценки)" />
			<ReasonsCard img={img4} txt="Постоянный контроль качества на всех этапах" />
			<ReasonsCard img={img5} txt="Только охлажденная рыба (никакой заморозки)" />
			<ReasonsCard img={img6} txt="Мы используем только дорогой рис из Японии" />
			<ReasonsCard img={img7} txt="Больше начинки, меньше риса!" />
			<ReasonsCard img={img8} txt="Мы не заменяем авокадо огурцом!" />
			<ReasonsCard img={img9} txt="Вся пицца готовится из итальянской муки и Итальянского соуса" />
			<ReasonsCard img={img10} txt="Мы не используем майонез!" />
		</div>
	);
}


const Reasons = () => {
	return (
		<section className="reasons">
			<div className="container">
				<PrimTitle title="10 причин купить у нас" />
				<ReasonsWrap />
			</div>
		</section>
	);
}

export default Reasons;