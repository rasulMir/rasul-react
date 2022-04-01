import React from "react";
import PrimTitle from "./PrimTitle";
import abImg from "../img/about/about-company.jpg";

let txt1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae accusamus id facilis aut exercitationem distinctio earum consectetur ipsam adipisci?";
let txt2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia soluta aliquam odit. Delectus facere ea quas consectetur, fugiat animi illo nisi cupiditate repellendus accusantium maxime quidem porro, reiciendis ab dolorum est eum rerum doloremque sed cumque neque officia. Cumque?"
let txt3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat pariatur facilis quod! Perspiciatis sunt veniam repellat aspernatur cum suscipit perferendis eius, modi commodi ipsum reprehenderit! Modi unde voluptatem quae earum.";
let txt4 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus velit accusantium temporibus inventore illo, labore saepe amet voluptate hic ea dolore cum sunt perspiciatis. Laudantium, architecto ad? Quasi beatae hic labore fugit est, sunt ducimus perferendis dolorum alias blanditiis? Illum libero exercitationem eos vel, alias obcaecati ullam, pariatur tempora ex voluptatem, fugit quod vero? Quas, quasi. Provident aperiam nihil laborum.";
let txt5 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit voluptatum totam harum officia laborum consequatur possimus, repudiandae perferendis optio nisi quas qui dicta error assumenda minus natus maxime delectus culpa, in eveniet nemo mollitia. Iste soluta praesentium qui quaerat vitae commodi, nobis ipsam nesciunt nulla perferendis. Quos earum impedit totam. Quos rerum eligendi, voluptatibus iusto temporibus quibusdam totam aperiam recusandae reprehenderit magni quod impedit, voluptatum repellendus consequuntur ipsum accusantium veniam sint hic unde perferendis maxime aut nostrum! Ipsam, eius!";

const AboutTxt = (props) => {
	return (
		<div className=" about__card-show about-wrap__txt">
			<p>
				{props.txt}
			</p>
		</div>
	);
}

function AboutContent() {
	return (
		<div className="about-wrap__content">
			<AboutTxt txt={txt1} />
			<AboutTxt txt={txt2} />
			<AboutTxt txt={txt3} />
			<AboutTxt txt={txt4} />
			<AboutTxt txt={txt5} />
		</div>
	);
}

const AboutImg = () => {
	return (
		<div className="about-wrap__img">
			<img src={abImg} alt="company" />
		</div>
	);
}

const AboutWrap = () => {
	return ( 
		<div className="about-wrap">
			<AboutContent />
			<AboutImg />
		</div>
	);
}

const About = () => {
	return (
		<section className="about">
			<div className="container">
				<PrimTitle title="о компании" />
				<div className="about__title">
					Заказ и доставка роллов, пиццы и WOK(Вок) в городе Курск
				</div>
				<AboutWrap />
			</div>
		</section>
	);
}

export default About;