import React from "react";
import ScrambleText from "./ScrambleText";
export default function SideNav() {
	return (
		<aside className="sidebar" data-sidebar>
			<div className="sidebar-info">
				<figure className="avatar-box shake">
					<img
						src="pic.png "
						className="shake rounded-xl"
						alt="Zakeer Ahamad"
						width="80"
					/>
				</figure>

				<div className="info-content">
					<ScrambleText className="cristik name" title="Richard hanrick">
						Zakeer Ahamad Shaik
					</ScrambleText>
					<div className="flex gap-2 flex-wrap">
						<p className="title">Software Engineer</p>
						{/* <p className="title">UI/UX Designer </p> */}
					</div>
				</div>

				<button className="info_more-btn" data-sidebar-btn>
					<span>Show Contacts</span>

					<ion-icon name="chevron-down"></ion-icon>
				</button>
			</div>

			<div className="sidebar-info_more">
				<div className="separator"></div>

				<ul className="contacts-list">
					<li className="contact-item">
						<div className="icon-box">
							<ion-icon name="mail-outline"></ion-icon>
						</div>

						<div className="contact-info">
							<p className="contact-title">Email</p>

							<a href="mailto:zzakeer22@mail.com" className="contact-link">
								zzakeer22@mail.com
							</a>
						</div>
					</li>

					{/* <li className="contact-item">
						<div className="icon-box">
							<ion-icon name="phone-portrait-outline"></ion-icon>
						</div>

						<div className="contact-info">
							<p className="contact-title">Phone</p>

							<a href="tel:+917975578025" className="contact-link">
								+91 79855 46729
							</a>
						</div>
					</li> */}

					{/* <li className="contact-item">
						<div className="icon-box">
							<ion-icon name="calendar-outline"></ion-icon>
						</div>

						<div className="contact-info">
							<p className="contact-title">Birthday</p>

							<time datetime="1982-06-23">December 02, 2004</time>
						</div>
					</li> */}

					<li className="contact-item">
						<div className="icon-box">
							<ion-icon name="location-outline"></ion-icon>
						</div>

						<div className="contact-info">
							<p className="contact-title">Location</p>

							<address>Andhra Pradesh , India</address>
						</div>
					</li>
				</ul>

				<div className="separator"></div>

				<ul className="social-list">
					<li className="social-item">
						<a href="https://www.linkedin.com/in/zakeer7/" className="social-link">
							<ion-icon name="logo-linkedin"></ion-icon>
						</a>
					</li>

					<li className="social-item">
						<a href="https://github.com/Zakeer-official" className="social-link">
							<ion-icon name="logo-github"></ion-icon>
						</a>
					</li>

					{/* <li className="social-item">
						<a href="#" className="social-link">
							<ion-icon name="logo-instagram"></ion-icon>
						</a>
					</li> */}
				</ul>
			</div>
		</aside>
	);
}
