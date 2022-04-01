import React from "react";
import Sets from "./Sets";
import Rolls from "./Rolls";
import Pizzas from "./Pizzas";
import Woks from "./Woks";
import New from "./New";

const Menu = () => {
	return (
		<section className="menu">
			<Sets />
			<Rolls />
			<Pizzas />
			<Woks />
			<New />
		</section>
	);
}

export default Menu;