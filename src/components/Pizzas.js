import React from "react";
import PrimTitle from "./PrimTitle";
import setImg1 from "../img/menu/pizzas/1.jpg";
import setImg2 from "../img/menu/pizzas/2.jpg";
import setImg3 from "../img/menu/pizzas/3.jpg";
import setImg4 from "../img/menu/pizzas/4.jpg";

const ItemsCard = (props) => {
	return (
		<div className="menu-slider__item">
			<div className="menu-slider__card">
				<div className="menu-slider__img">
					<img src={props.img} alt="set" />
				</div>
				<div className="menu-slider__body">
					<div className="menu-slider__set-name">
						{props.setInfo.name}
					</div>
					<div className="menu-slider__set-info">
						{props.setInfo.amount}
						<span>|</span>
						{props.setInfo.weight}
						<span>|</span>
						{props.setInfo.kkal}
					</div>
					<div className="menu-slider__price-piece">
						<div className="menu-slider__price">
						{props.setInfo.price} <sup>руб.</sup>
						</div>
						<div className="menu-slider__piece">
							<span className="menu-slider__piece-span menu-slider__piece-minus">
								<i className="icon-minus"></i>
							</span>
							<span className="menu-slider__piece-num" id="" dataval="1" aria-valuemin="1">
								
							</span>
							<span className="menu-slider__piece-span menu-slider__piece-plus">
								<i className="icon-plus"></i>
							</span>
						</div>
					</div>
					<div className="menu-slider__btns">
						<a href="#" className="menu-slider__btn">
							в корзину
							<i className="icon-shopping-cart"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

const Slider = () => {
	return (
		<div className="menu-slider">
			<ItemsCard 
				img={setImg1} 
				setInfo={{
					name:'Вегетерианский',
					amount:'8 шт.',
					weight:'250 г.',
					kkal:'350 Kkal',
					price:'260',
				}}/>
				<ItemsCard 
				img={setImg2} 
				setInfo={{
					name:'Баварский',
					amount:'8 шт.',
					weight:'250 г.',
					kkal:'350 Kkal',
					price:'2600',
				}}/>
				<ItemsCard 
				img={setImg3} 
				setInfo={{
					name:'Палермо',
					amount:'8 шт.',
					weight:'250 г.',
					kkal:'350 Kkal',
					price:'260',
				}}/>
				<ItemsCard 
				img={setImg4} 
				setInfo={{
					name:'Маргарита',
					amount:'8 шт.',
					weight:'250 г.',
					kkal:'350 Kkal',
					price:'600',
				}}/>
		</div>
	);
}

const Pizzas = () => {
	return (
		<article className="pizzas">
			<div className="container menu-container">
				<PrimTitle title="Пиццы" />
				<Slider />
			</div>
		</article>
	);
}

export default Pizzas;