import React from "react";

export default function Contact() {
	return (
		<article className="contact active" data-page="contact">
			<header>
				<h2 className="h2 article-title">Contact</h2>
			</header>

			<section className="mapbox" data-mapbox>
				<figure>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231366.58479482666!2d74.93395850624634!3d12.905359533802308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827bbc7a74fcfe64!2sMangaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1721065588811!5m2!1sen!2sin"
						width="600"
						height="450"
						style={{ border: 0 }}
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</figure>
			</section>

			<section className="contact-form">
				<h3 className="h3 form-title">Contact Form</h3>

				<form action="#" className="form" data-form>
					<div className="input-wrapper">
						<input
							type="text"
							name="fullname"
							className="form-input"
							placeholder="Full name"
							required
							data-form-input
						/>

						<input
							type="email"
							name="email"
							className="form-input"
							placeholder="Email address"
							required
							data-form-input
						/>
					</div>

					<textarea
						name="message"
						className="form-input"
						placeholder="Your Message"
						required
						data-form-input
					/>

					<button className="form-btn" type="submit" disabled data-form-btn>
						<ion-icon name="paper-plane"></ion-icon>
						<span>Send Message</span>
					</button>
				</form>
			</section>
			<audio src=""></audio>
		</article>
	);
}
