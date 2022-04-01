import React from "react";

const Items = (props) => {
	if (props.isIcon === 'true') {
		return (
			<li className="head-bottom__item">
				<a href="#" className="head-bottom__link">
					<i className={props.icon}></i>
					<span className="head__link-txt">
						{props.name}
					</span>
				</a>
			</li>
		);
	}

	else {
		return (
			<li className="head-bottom__item">
				<a href="#" className="head-bottom__link">
					{props.name}
				</a>
			</li>
		);
	}
	
}

const MenuList = () => {

	return (
		<ul className="head-bottom__menu">
			<Items isIcon="" name="Меню" icon="" />
			<Items isIcon="" name="Акции и скидки" icon="" />
			<Items isIcon="" name="Доставка и оплата" icon="" />
			<Items isIcon="" name="новости" icon="" />
			<Items isIcon="" name="контакты" icon="" />
			<Items isIcon="true" name="кабинет" icon="icon-users" />
			<Items isIcon="true" name="Корзина" icon="icon-shopping-cart" />
		</ul>
	);
}

const HeadBttm = () => {
	return (
		<section className="head-bottom">
			<nav className="head-bottom__nav">
				<MenuList />
			</nav>
		</section>
	);
}

export default HeadBttm;