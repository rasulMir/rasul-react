import React from "react";
import About from "./About";
import Contacts from "./Contacts";
import Menu from "./Menu";
import Promo from "./Promo";
import Reasons from "./Reasons";
import Reviews from "./Reviews";

const Main = () => {
	return (
		<main className="main">
			<Promo />
			<Menu />
			<Reasons />
			<Reviews />
			<Contacts />
			<About />
		</main>
	);
}

export default Main;