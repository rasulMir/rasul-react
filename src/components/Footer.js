import React from "react";
import FooterBttm from "./FooterBttm";
import FooterTop from "./FooterTop";



const Footer = () => {
	return (
		<footer className="footer">
			<div className="container footer-container">
				<FooterTop />
				<FooterBttm />
			</div>
		</footer>
	);
}

export default Footer;