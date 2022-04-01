import React from "react";

const ContactsAgree = () => {
	return (
		<div className="contacts-wrap__txt">
			Нажимая на кнопку «Отправить», вы даете согласие на обработку своих персональных данных
		</div>
	);
}

function ContactsBtn() {
	return (
		<button className="contacts-wrap__btn" type="submit">
			Отправить
		</button>
	);
}

const ContactsFormBody = () => {
	return (
		<div className="contacts-wrap__body">
			<input type="text" name="username" className="contacts-wrap__user" placeholder="Серге |" />
			<input className="contacts-wrap__user" type="tel" name="usertel" id="" placeholder="телефон" />
			<ContactsBtn />
		</div>
	);
}

const ContactsTitle = () => {
	return (
		<div className="primary-title contacts-wrap__primary-title">
			<span className="primary-title__span">
				Оставьте свои контакты
			</span>
		</div>
	); 
}

const ContactsQA = () => {
	return (
		<div className="contacts-wrap__questions">
			есть вопросы?
		</div>
	);
}

const ContactsForm = () => {
	return (
		<div className="contacts-wrap">
			<form className="contacts-wrap__form" action="#" method="post">
				<ContactsQA />
				<ContactsTitle />
				<ContactsFormBody />
				<ContactsAgree />
			</form>
		</div>
	);
}

const Contacts = () => {
	return (
		<section className="contacts">
				<div className="container">
					<ContactsForm />
				</div>
		</section>
	);
}

export default Contacts;