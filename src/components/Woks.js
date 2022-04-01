import React from "react";
import PrimTitle from "./PrimTitle";
import setImg1 from "../img/menu/woks/1.jpg";
import setImg2 from "../img/menu/woks/2.jpg";
import setImg3 from "../img/menu/woks/3.jpg";
import setImg4 from "../img/menu/woks/4.jpg";

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
					<div className="menu-slider__add">
						<div className="menu-slider__add-left">
							<span className="menu-slider__add-txt" id="">
								добавить
							</span>
							<span className="menu-slider__add-num">
								+0
								<span></span>
							</span>
						</div>
						<div className="menu-slider__add-price">
						{props.setInfo.price} <sup>руб.</sup>
							<span className="menu-slider__add-price-plus">
								<i className="icon-plus"></i>
							</span>
						</div>
					</div>
					<div className="menu-slider__select">
						<select name="sauce" id="" >
							<option value="1">
								Китайский соус
							</option>
							<option value="2">
								Узбекский соус
							</option>
							<option value="3">
								Казахский соус
							</option>
						</select>
						<span className="menu-slider__select-span">

						</span>
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
					name:'С говядиной',
					amount:'8 шт.',
					weight:'250 г.',
					kkal:'350 Kkal',
					price:'260',
				}}/>
				<ItemsCard 
				img={setImg2} 
				setInfo={{
					name:'С курицей',
					amount:'8 шт.',
					weight:'250 г.',
					kkal:'350 Kkal',
					price:'2600',
				}}/>
				<ItemsCard 
				img={setImg3} 
				setInfo={{
					name:'С морепродуктами',
					amount:'8 шт.',
					weight:'250 г.',
					kkal:'350 Kkal',
					price:'260',
				}}/>
				<ItemsCard 
				img={setImg4} 
				setInfo={{
					name:'С овощами',
					amount:'8 шт.',
					weight:'250 г.',
					kkal:'350 Kkal',
					price:'600',
				}}/>
		</div>
	);
}

const Woks = () => {
	return (
		<article className="woks">
			<div className="container menu-container">
				<PrimTitle title="Wok" />
				<Slider />
			</div>
		</article>
	);
}

export default Woks;