import React, { useState } from "react";

export default function About() {
	const Experience = [
		{
			company: "GirlScript Summer of Code",
			companyLogo:
				"https://miro.medium.com/v2/resize:fit:522/1*Kns5wXF4n_f5sHKOxd4Alw.png",
			role: "Contributor",
			duration: "Oct 2024 - Nov 2024",
			description:
				"Contributed to open-source projects at GSSoC- Extd'24, collaborating with developers to enhance impactful community-driven solutions.",
		},
		{
			company: "IET NITK",
			companyLogo:
				"https://media.licdn.com/dms/image/v2/C560BAQGRxeqgiYrF8A/company-logo_200_200/company-logo_200_200/0/1630671178062/ietnitk_logo?e=2147483647&v=beta&t=VwQlt58O41AxWK3hbTzCanMAnn3gB2LAUlcLx08Mxd4",
			role: "Executive Member",
			duration: "Sept 2024 - Present",
			description:
				"As a member of the Coding SiG CIPHER, I'm working on innovative technical projects and participating in various competitions and hackathons.",
		},
		{
			company: "Smile Club NITK",
			companyLogo:
				"smile.jpeg",
			role: "Web Developer",
			duration: "July 2024 - Present",
			description:
				"Contributing to the development of the SMILE Club website by utilizing Bootstrap and Django. Focused on implementing responsive design features to improve the website's functionality and user experience.",
		},
		{
			company: "E-Cell NITK",
			companyLogo:
				"https://media.licdn.com/dms/image/D560BAQHNOlUgfHzavA/company-logo_200_200/0/1718563404533/ecellnitksurathkal_logo?e=2147483647&v=beta&t=LJJrEoJZX5VPQs6vTwluzhA2IjyH89Avorcld9mGz6o",
			role: "Web-developer",
			duration: "Sept 2024 - Present",
			description:
				"Developed a responsive website using React.js and Tailwind CSS, crafting core components like the marquee, footer, social links, and a dynamic contact page with an integrated map and seamless form functionality.",
		},
		{
			company: "E-Summit and Innovation Comitte NITK",
			companyLogo:
				"e-summitlogo.png",
			role: "Web Developer",
			duration: "May 2024 - July 2024",
			description:
				"Played a key role in developing the official website for E-Summit, focusing on responsive design using React.js, TailwindCSS and Aceternity UI. Contributed to marque, responsive timeline section and FAQs section.",
		},
		
	];

	const Skills = [
		{
			category: (
				<p className="flex gap-2 items-center text-2xl">
					<ion-icon name="code-slash-outline"></ion-icon>{" "}
					<p className="text-lg opacity-75"> Languages</p>
				</p>
			),
			skill: [
				{ name: "Javascript", image: "javascript.svg" },
				// { name: "Typescript", image: "typescript.svg" },
				{ name: "C++", image: "c++.svg" },
				{ name: "C", image: "c.svg" },
				{ name: "Python", image: "python.svg" },
			],
		},
		{
			category: (
				<p className="flex gap-2 items-center text-2xl">
					<ion-icon name="laptop-outline"></ion-icon>{" "}
					<p className="text-lg opacity-75">Frontend</p>
				</p>
			),
			skill: [
				{ name: "HTML", image: "html5.svg" },
				{ name: "CSS", image: "css.svg" },
				{ name: "Tailwind css", image: "tailwindcss.svg" },
				{ name: "Shadcn-ui", image: "shadcn-ui.svg" },
				{ name: "React", image: "react.svg" },
				// { name: "React query", image: "reactquery.svg" },
				// { name: "React router", image: "reactrouter.svg" },
				// { name: "Redux", image: "redux.svg" },
				{ name: "React Native", image: "react.svg" },
			],
		},
		{
			category: (
				<p className="flex gap-2 items-center text-2xl ">
					<ion-icon name="server-outline"></ion-icon>
					<p className="text-lg opacity-75"> Backend</p>
				</p>
			),
			skill: [
				{ name: "Node.js", image: "nodejs.svg" },
				// { name: "Express.js", image: "expressjs.svg" },
				{ name: "Next.js", image: "nextjs_icon_dark.svg" },
				{ name: "MongoDB", image: "mongodb.svg" },
				{ name: "JWT", image: "jwt.svg" },
				// { name: "AWS", image: "aws.svg" },
				// { name: "Docker", image: "docker.svg" },
				// { name: "Nginix", image: "nginx.png" },
				// { name: "Kalfka", image: "kalfka.png" },
				// { name: "Socket.io", image: "socket.webp" },
				// { name: "Web RTC", image: "webrtc.png" },
				// { name: "GraphQL", image: "graphql.png" },
				{ name: "Prisma", image: "prisma.svg" },

				// { name: "Firebase", image: "firebase.svg" },
			],
		},
		{
			category: (
				<p className="flex gap-2 items-center text-2xl ">
					<ion-icon name="hammer-outline"></ion-icon>
					<p className="text-lg opacity-75">Tools</p>
				</p>
			),

			skill: [
				{ name: "Github", image: "github.svg" },
				// { name: "NPM", image: "npm.svg" },
				{ name: "VS Code", image: "vscode.svg" },
				// { name: "Linux", image: "linux.svg" },
				{ name: "Figma", image: "figma.svg" },
				// { name: "Illustrator", image: "illustrator.svg" },
			],
		},
	];
	return (
		<article className="about  active" data-page="about">
			<header>
				<h2 className="h2 article-title cristik font-extralight">About me</h2>
			</header>
			<section className="about-text max-w-[600px]">
				<p>
					Hey I am Zakeer, an Enthusiastic Web Devloper and Designer . I Design
					, Code and Create modern user interfaces with a thirst for knowledge,
					passion to learn and a love for problem-solving.
				</p>

				<p>
					Transforming ideas into seamless digital experiences . Committed to
					crafting dynamic and innovative web solutions.
				</p>
			</section>

			<section className="service">
				<h3 className="h3 service-title ">What i Do ?</h3>

				<ul className="service-list">
					<li className="service-item">
						<div className="service-icon-box">
							<img src="icon-design.svg" alt="design icon" width="40" />
						</div>

						<div className="service-content-box">
							<h4 className="h4 service-item-title">UI/UX design</h4>

							<p className="service-item-text">
								The most modern and high-quality design made at a professional
								level.
							</p>
						</div>
					</li>

					<li className="service-item">
						<div className="service-icon-box">
							<img src="icon-dev.svg" alt="Web development icon" width="40" />
						</div>

						<div className="service-content-box">
							<h4 className="h4 service-item-title">
								Fullstack Web development
							</h4>

							<p className="service-item-text">
								High-quality development of sites at the professional level.
							</p>
						</div>
					</li>

					{/* <li className="service-item">
						<div className="service-icon-box">
							<img src="icon-app.svg" alt="mobile app icon" width="40" />
						</div>

						<div className="service-content-box">
							<h4 className="h4 service-item-title">Mobile apps Development</h4>

							<p className="service-item-text">
								Professional development of applications for iOS and Android.
							</p>
						</div>
					</li>

					<li className="service-item">
						<div className="service-icon-box text-[30px] text-[#ffcb66]">
							<ion-icon name="cube-outline"></ion-icon>
						</div>

						<div className="service-content-box">
							<h4 className="h4 service-item-title">Product Design</h4>

							<p className="service-item-text">
								I make high-quality photos of any category at a professional
								level.
							</p>
						</div>
					</li> */}
				</ul>
			</section>

			<section className="timeline">
				<div className="title-wrapper">
					<div className="icon-box">
						<ion-icon name="book-outline"></ion-icon>
					</div>

					<h3 className="h3 font-semi bold">Experience</h3>
				</div>

				<ol className="timeline-list">
					{Experience.map((role) => (
						<li className="timeline-item ">
							<div className="flex gap-4 hover:translate-x-2 duration-[200ms] cursor-pointer transition-transform">
								<img
									className="w-[50px] h-[50px] rounded-lg border border-gray-600"
									src={
										role.companyLogo ||
										"https://media.licdn.com/dms/image/D560BAQEBdmCjop6pRg/company-logo_200_200/0/1712684860643/synkerr_logo?e=2147483647&v=beta&t=WisZ2qvfrBFPW5pTlEQjPRi7ViAfhCSrtgEy5hPvPfY"
									}
									alt=""
								/>
								<div>
									<h4 className="h4 timeline-item-title">
										<b>{role.role} </b> <br/>
										{role.company}{" "}
									</h4>

									<span>{role.duration}</span>

									<p className="timeline-text">{role.description}</p>
								</div>
							</div>
						</li>
					))}
				</ol>
			</section>
			<div className="separator"></div>
			<section className="skill ">
				<div className="title-wrapper ">
					<div className="icon-box mr-4">
						<ion-icon name="hammer-outline"></ion-icon>
					</div>

					<h3 className="h3 font-semibold">My Skills</h3>
				</div>

				<ol className="timeline-list">
					{Skills.map((skill) => (
						<div className="  mt-6 mr-8">
							<h4 className="skills-title cristik font-medium text-yellow-200  overflow-hidden mb-0 p-4">
								{skill.category}
							</h4>
							<div className=" grid grid-cols-6 text-white gap-1 w-auto ">
								{skill.skill.map((s) => (
									<div className=" bg-[#2a2a2b]  w-full p-5 m-0 flex flex-col items-center gap-3  justify-between hover:scale-110 hover:rotate-3 hover:z-[10] hover:border border-gray-600 duration-200 grayscale hover:grayscale-0 ">
										<img
											src={s.image}
											className="max-w-[30px] max-h-[30px] "
											alt=""
										/>
										<p className="text-center text-sm opacity-60 "> {s.name}</p>
									</div>
								))}
							</div>
						</div>
					))}
				</ol>
			</section>
			<div className="separator"></div>
			<section className="timeline">
				<div className="title-wrapper">
					<div className="icon-box">
						<ion-icon name="school-outline"></ion-icon>
					</div>

					<h3 className="h3 font-semibold">Education</h3>
				</div>

				<ol className="timeline-list">
					<li className="timeline-item">
						<div className="flex gap-4 hover:translate-x-2 duration-[200ms] cursor-pointer transition-transform">
							<img
								className="w-[50px] h-[50px] rounded-lg border border-gray-600"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqphjixAksZ6V1zyBb01c4KoYOjyeLg7TEUQ&s"
								alt=""
							/>
							<div>
								<h4 className="h4 timeline-item-title  font-semibold ">
									Amrita Vishwa Vidyapeetham
								</h4>

								<span>Bachelor of Technology (B.Tech) </span>
								<span className="text-xs">Computer Science and Engineering </span>

								<p className="timeline-text">2021-2025</p>
							</div>
						</div>
					</li>

					<li className="timeline-item">
						<div className="flex gap-4 hover:translate-x-2 duration-[200ms] cursor-pointer transition-transform">
							<img
								className="w-[50px] h-[50px] rounded-lg border border-gray-600"
								src="dpsk.jpeg"
								alt=""
							/>
							<div>
								<h4 className="h4 timeline-item-title font-semibold ">
									Narayana Junior College
								</h4>

								<span>Intermediate - MPC</span>

								<p className="timeline-text">2019-2021</p>
							</div>
						</div>
					</li>
					<li className="timeline-item">
						<div className="flex gap-4 hover:translate-x-2 duration-[200ms] cursor-pointer transition-transform">
							<img
								className="w-[50px] h-[50px] rounded-lg border border-gray-600"
								src="dpsk.jpeg"
								alt=""
							/>
							<div>
								<h4 className="h4 timeline-item-title font-semibold ">
									Narayana Co School
								</h4>

								<span> Class - X </span>

								<p className="timeline-text">2018-2019</p>
							</div>
						</div>
					</li>

					
				</ol>
			</section>

			{/* 
      <!--
        - service
      --> */}

			{/* <!--
        - testimonials
      --> */}

			<section className="testimonials">
				<h3 className="h3 testimonials-title">Testimonials</h3>

				<ul className="testimonials-list has-scrollbar">
					<li className="testimonials-item">
						<div className="content-card" data-testimonials-item>
							<figure className="testimonials-avatar-box">
								<img
									src="avatar-1.png"
									alt="Daniel lewis"
									width="60"
									data-testimonials-avatar
								/>
							</figure>

							<h4
								className="h4 testimonials-item-title"
								data-testimonials-title
							>
								Daniel lewis
							</h4>

							<div className="testimonials-text" data-testimonials-text>
								<p>
									Richard was hired to create a corporate identity. We were very
									pleased with the work done. She has a lot of experience and is
									very concerned about the needs of client. Lorem ipsum dolor
									sit amet, ullamcous cididt consectetur adipiscing elit, seds
									do et eiusmod tempor incididunt ut laborels dolore magnarels
									alia.
								</p>
							</div>
						</div>
					</li>

					<li className="testimonials-item">
						<div className="content-card" data-testimonials-item>
							<figure className="testimonials-avatar-box">
								<img
									src="avatar-2.png"
									alt="Jessica miller"
									width="60"
									data-testimonials-avatar
								/>
							</figure>

							<h4
								className="h4 testimonials-item-title"
								data-testimonials-title
							>
								Jessica miller
							</h4>

							<div className="testimonials-text" data-testimonials-text>
								<p>
									Richard was hired to create a corporate identity. We were very
									pleased with the work done. She has a lot of experience and is
									very concerned about the needs of client. Lorem ipsum dolor
									sit amet, ullamcous cididt consectetur adipiscing elit, seds
									do et eiusmod tempor incididunt ut laborels dolore magnarels
									alia.
								</p>
							</div>
						</div>
					</li>

					<li className="testimonials-item">
						<div className="content-card" data-testimonials-item>
							<figure className="testimonials-avatar-box">
								<img
									src="avatar-3.png"
									alt="Emily evans"
									width="60"
									data-testimonials-avatar
								/>
							</figure>

							<h4
								className="h4 testimonials-item-title"
								data-testimonials-title
							>
								Emily evans
							</h4>

							<div className="testimonials-text" data-testimonials-text>
								<p>
									Richard was hired to create a corporate identity. We were very
									pleased with the work done. She has a lot of experience and is
									very concerned about the needs of client. Lorem ipsum dolor
									sit amet, ullamcous cididt consectetur adipiscing elit, seds
									do et eiusmod tempor incididunt ut laborels dolore magnarels
									alia.
								</p>
							</div>
						</div>
					</li>

					<li className="testimonials-item">
						<div className="content-card" data-testimonials-item>
							<figure className="testimonials-avatar-box">
								<img
									src="avatar-4.png"
									alt="Henry william"
									width="60"
									data-testimonials-avatar
								/>
							</figure>

							<h4
								className="h4 testimonials-item-title"
								data-testimonials-title
							>
								Henry william
							</h4>

							<div className="testimonials-text" data-testimonials-text>
								<p>
									Richard was hired to create a corporate identity. We were very
									pleased with the work done. She has a lot of experience and is
									very concerned about the needs of client. Lorem ipsum dolor
									sit amet, ullamcous cididt consectetur adipiscing elit, seds
									do et eiusmod tempor incididunt ut laborels dolore magnarels
									alia.
								</p>
							</div>
						</div>
					</li>
				</ul>
			</section>

			{/* 
      <!--
        - testimonials modal
      --> */}

			<div className="modal-container" data-modal-container>
				<div className="overlay" data-overlay></div>

				<section className="testimonials-modal">
					<button className="modal-close-btn" data-modal-close-btn>
						<ion-icon name="close-outline"></ion-icon>
					</button>

					<div className="modal-img-wrapper">
						<figure className="modal-avatar-box">
							<img
								src="avatar-1.png"
								alt="Daniel lewis"
								width="80"
								data-modal-img
							/>
						</figure>

						<img src="icon-quote.svg" alt="quote icon" />
					</div>

					<div className="modal-content">
						<h4 className="h3 modal-title" data-modal-title>
							Daniel lewis
						</h4>

						<time datetime="2021-06-14">14 June, 2021</time>

						<div data-modal-text>
							<p>
								Richard was hired to create a corporate identity. We were very
								pleased with the work done. She has a lot of experience and is
								very concerned about the needs of client. Lorem ipsum dolor sit
								amet, ullamcous cididt consectetur adipiscing elit, seds do et
								eiusmod tempor incididunt ut laborels dolore magnarels alia.
							</p>
						</div>
					</div>
				</section>
			</div>

			{/* clients */}

			<section className="clients">
				<h3 className="h3 clients-title">Clients</h3>

				<ul className="clients-list has-scrollbar">
					<li className="clients-item">
						<a href="#">
							<img src="logo-1-color.png" alt="client logo" />
						</a>
					</li>

					<li className="clients-item">
						<a href="#">
							<img src="logo-2-color.png" alt="client logo" />
						</a>
					</li>

					<li className="clients-item">
						<a href="#">
							<img src="logo-3-color.png" alt="client logo" />
						</a>
					</li>

					<li className="clients-item">
						<a href="#">
							<img src="logo-4-color.png" alt="client logo" />
						</a>
					</li>

					<li className="clients-item">
						<a href="#">
							<img src="logo-5-color.png" alt="client logo" />
						</a>
					</li>

					<li className="clients-item">
						<a href="#">
							<img src="logo-6-color.png" alt="client logo" />
						</a>
					</li>
				</ul>
			</section>
		</article>
	);
}
