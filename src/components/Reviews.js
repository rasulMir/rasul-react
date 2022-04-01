import React from "react";
import PrimTitle from "./PrimTitle";
import userImg from "../img/reviews/user-photo.png";
import userSendImg from "../img/reviews/user-send-photo.png";

const CardTop = (props) => {
	return (
		<div className="reviews-wrap__card-top">
			<div className="reviews-wrap__card-img">
				<img src={props.userInfo.img} alt="user" />
			</div>
			<div className="reviews-wrap__card-column">
				<div className="reviews-wrap__card-name">
					{props.userInfo.name}
				</div>
				<div className="reviews-wrap__card-date">
					{props.userInfo.date}
				</div>
			</div>
		</div>
	);
}

const CardBody = (props) => {
	return (
		<div className="reviews-wrap__card-body">
			<div className="reviews-wrap__card-review">
				<p>
					{props.sendTxt}
				</p>
			</div>
			<div className="reviews-wrap__card-body-img">
				<img src={props.sendImg} alt="user-phohto" />
			</div>
		</div>
	);
}

const CardFooter = () => {
	return (
		<div className="reviews-wrap__card-footer">
			<div className="reviews-wrap__card-footer-top">
				<span className="reviews-wrap__card-footer-icon">
					<i className="icon-like"></i>
				</span>
				<span className="reviews-wrap__card-footer-icon" datachat="2">
					<i className="icon-chat"></i>
				</span>
				<span className="reviews-wrap__card-footer-icon">
					<i className="icon-bullhorn"></i>
				</span>
			</div>
			<div className="reviews-wrap__card-footer-bttm">
				<a href="#" className="reviews-wrap__card-footer-btn">
					<i className="icon-vk"></i>
					подписаться
				</a>
			</div>
		</div>
	);
}

const ReviewsCard = (props) => {
	return (
		<div className="reviews-wrap__card">
			<CardTop userInfo={props.userInfo} />
			<CardBody sendTxt={props.sendTxt} sendImg={props.sendImg}/>
			<CardFooter />
		</div>
	);
}


const ReviewsWrap = () => {
	return (
		<div className="reviews-wrap">
			<ReviewsCard 
				userInfo={{
					img : userImg,
					name : 'Надежда Наширбанова',
					date : '5 авг 2017 в 9:58',
				}}
				sendTxt="Спасибо за быструю доставку! Отличный поздний ужин после рабочего дня )"
				sendImg={userSendImg}
			/>
			<ReviewsCard
				userInfo={{
					img : userImg,
					name : 'Надежда Наширбанова',
					date : '5 авг 2017 в 9:58',
				}}
				sendTxt="Спасибо за быструю доставку! Отличный поздний ужин после рабочего дня )"
				sendImg={userSendImg}
			/>
			<ReviewsCard 
				userInfo={{
					img : userImg,
					name : 'Надежда Наширбанова',
					date : '5 авг 2017 в 9:58',
				}}
				sendTxt="Спасибо за быструю доставку! Отличный поздний ужин после рабочего дня )"
				sendImg={userSendImg}
			/>
		</div>
	);
}

const Reviews = () => {
	return (
		<section className="reviews">
			<div className="container">
				<PrimTitle title="отзывы" />
				<ReviewsWrap />
			</div>
		</section>
	);
}

export default Reviews;