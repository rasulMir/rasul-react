import React from "react";
import PrimTitle from "./PrimTitle";
import setImg1 from "../img/menu/new/new-1.jpg";
import setImg2 from "../img/menu/new/new-pizza-2.jpg";
import setImg3 from "../img/menu/new/new-rolls-3.jpg";
import setImg4 from "../img/menu/new/new-wok-4.jpg";

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
				<div className="new-stocks__flag">
					new
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
					name:'Кунсей батакон',
					amount:'8 шт.',
					weight:'250 г.',
					kkal:'350 Kkal',
					price:'260',
				}}/>
				<ItemsCard 
				img={setImg2} 
				setInfo={{
					name:'Кунсей батакон',
					amount:'8 шт.',
					weight:'250 г.',
					kkal:'350 Kkal',
					price:'2600',
				}}/>
				<ItemsCard 
				img={setImg3} 
				setInfo={{
					name:'Кунсей батакон',
					amount:'8 шт.',
					weight:'250 г.',
					kkal:'350 Kkal',
					price:'260',
				}}/>
				<ItemsCard 
				img={setImg4} 
				setInfo={{
					name:'Кунсей батакон',
					amount:'8 шт.',
					weight:'250 г.',
					kkal:'350 Kkal',
					price:'600',
				}}/>
		</div>
	);
}

const NewStocks = () => {
	return (
		<div className="new-stocks">
			<label htmlFor="newNav1" className="new-stocks__item new-stocks__item-active">
				Новинки
			</label>
			<label htmlFor="newNav2" className="new-stocks__item">
				Акции
			</label>
		</div>
	);
}

const New = () => {
	return (
		<article className="new">
			<div className="container menu-container">
				<NewStocks />
				<Slider />
			</div>
		</article>
	);
}

export default New;