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
					  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62273.50597128509!2d79.95370769999999!3d14.442598449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4caa26b1f67a5b%3A0xaaaeb918cd19fc4f!2sNellore%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1714126217486!5m2!1sen!2sin"
					  width="600"
					  height="450"
					  style={{ border: 0 }}
					  allowFullScreen=""
					  loading="lazy"
					  referrerPolicy="no-referrer-when-downgrade"
					/>
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
