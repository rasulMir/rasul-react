import React from "react";
import logoBig from "../img/logo/logo-768.png";
import logo from "../img/logo/logo.png";

const Logo = () => {
	return (
		<a href="#" className="head-top__logo-link">
			<picture className="head-top__picture">
				<source media="( min-width: 768px)" srcSet={logoBig} />
				<img src={logo} alt="#" />
			</picture>
		</a>
	);
}

const Contacts = () => {
	return (
		<div className="head-top__contacts">
			<a href="#" className="head-top__contacts-item head-top__contacts-adress">
				г. Курск, ул. Ленина, д. 3
			</a>
			<a href="#" className="head-top__contacts-item head-top__contacts-mail">
				78003332222@yandex.ru
			</a>
		</div>
	);
}

const Call = () => {
	return (
		<div className="head-top__call">
			<a href="tel: +78003332222" className="head-top__call-num">
				+7 (800) 333 2 222
				<span className="head-top__call-work-hours">
					Работаем с 11.00 до 23.00
				</span>
			</a>
			<a href="#" className="head-top__call-btn">
				Обратный звонок
			</a>
		</div>
	);
}

const HeadTop = () => {

	return (
		<section className="head-top">
			<Logo />
			<Contacts />
			<Call />
		</section>
	);

}

export default HeadTop;