import React from "react";
import DescPromoImg from "../img/promo/promo-desktop.jpg";

const ContentCard = () => {
	return (
		<div className="promo-content__card">
			<div className="promo-content__card-top">
				<h1 className="promo-content__card-title">
					Счастливые <br /> часы
				</h1>
				<div className="promo-content__card-discount-wrap">
					<span className="promo-content__card-discount">
						скидка <br /> 15%
					</span>
				</div>
			</div>
			<div className="promo-content__card-work-days">
				с 11:00 до 16:00 в будние дни
			</div>
			<div className="promo-content__card-footer">
				<a href="#" className="promo-content__card-btn">
					Подробнее
				</a>
			</div>
		</div>
	);
}

const ItemContent = () => {
	return (
		<div className="promo-content">
			<div className="container">
				<ContentCard />
			</div>
		</div>
	);
}

const PictureBg = () => {
	return (
		<picture>
			<img src={DescPromoImg} alt="promo-image" />
		</picture>
	);
}

const Slider = () => {
	return (
		<div className="promo-slider">
			<div className="promo-slider__item">
				<PictureBg />
				<ItemContent />
			</div>
		</div>
	);
}

const Promo = () => {
	return (
		<section className="promo">
			<Slider />
		</section>
	);
}

export default Promo;